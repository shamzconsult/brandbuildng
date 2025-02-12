import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await new Promise<{ secure_url: string }>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: 'brandbuild-offers' },
          (error, result) => {
            if (error || !result) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

    return NextResponse.json({ url: uploadResponse.secure_url }, { status: 201 });

  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
