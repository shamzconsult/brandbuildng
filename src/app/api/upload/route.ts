import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    console.log(
      "Checking request content type:",
      req.headers.get("content-type")
    );

    // Ensure request is multipart/form-data
    if (!req.headers.get("content-type")?.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Invalid content type. Expected multipart/form-data" },
        { status: 400 }
      );
    }

    const formData = await req.formData(); // This is failing in your case
    console.log("Parsed formData:", formData);

    const file = formData.get("image") as File;
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    console.log("Uploading file:", file);

    // Proceed with Cloudinary upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log("Buffer size:", buffer.length);

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
        uploadStream.write(buffer);
        uploadStream.end();
      }
    );

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
