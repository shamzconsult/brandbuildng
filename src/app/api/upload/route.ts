import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    console.log("Received FormData keys:", [...formData.keys()]);

    const file = formData.get('image') as File;
    if (!file) {
      console.error("No file found in FormData");
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'brandbuild-offers' },
        (error, result) => {
          if (error || !result) {
            console.error("Cloudinary Upload Error:", error);
            return reject(new Error("Cloudinary upload failed"));
          }
          resolve(result);
        }
      );

      uploadStream.write(buffer);
      uploadStream.end();
    });

    return NextResponse.json({ url: uploadResponse.secure_url }, { status: 201 });

  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
