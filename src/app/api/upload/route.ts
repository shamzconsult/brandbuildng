import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    console.log("formData", formData);
    console.log("Uploading file", file);

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const result = await cloudinary.api.ping();

    console.log("ping result>>>", result);
    console.log("Processing file bytes/buffer", file);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
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
        console.log("end");
        uploadStream.write(buffer);
        uploadStream.end();
      }
    );

    console.log("upload response>>", uploadResponse);

    return NextResponse.json(
      { url: uploadResponse.secure_url },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await cloudinary.api.ping();
    return NextResponse.json({ message: "Cloudinary is working", result });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return NextResponse.json(
      { error: "Cloudinary configuration failed" },
      { status: 500 }
    );
  }
}
