import connectViaMongoose from "@/lib/mongodb";
import Offer from "@/model/Offer";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const GET = async () => {
  try {
    await connectViaMongoose();
    const offers = await Offer.find({});
    return NextResponse.json(offers);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    await connectViaMongoose();

    const formData = await req.formData();
    const file = formData.get("image") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const discount = formData.get("discount") as string;

    if (!file || !title || !description || !price || !discount) {
      return NextResponse.json(
        { message: "Missing fields", error: "All fields are required" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload image to Cloudinary
    const uploadResponse = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "brandbuild-offers" },
        (error, result) => {
          if (error || !result) {
            console.error("Cloudinary Upload Error:", error);
            reject(new Error("Cloudinary upload failed"));
          } else {
            resolve(result);
          }
        }
      );

      uploadStream.write(buffer);
      uploadStream.end();
    });

    const newOffer = await Offer.create({
      title,
      description,
      price,
      discount,
      image: uploadResponse.secure_url, 
    });

    return NextResponse.json({ message: "Offer created successfully", newOffer }, { status: 200 });

  } catch (error) {
    console.error("Error creating Offer:", error);
    return NextResponse.json(
      { message: "Error creating Offer", error },
      { status: 500 }
    );
  }
};
