import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const allowedOrigins = [
  'https://www.brandbuildng.com',
  'https://brandbuildng.com',
  'http://localhost:3000',
];

function getCorsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin') || '';

  if (!allowedOrigins.includes(origin)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: getCorsHeaders(origin) }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400, headers: getCorsHeaders(origin) }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'brandbuild-offers' },
        (error, result) => {
          if (error || !result) {
            console.error('Cloudinary Upload Error:', error);
            reject(new Error('Cloudinary upload failed'));
          } else {
            resolve(result);
          }
        }
      );

      uploadStream.write(buffer);
      uploadStream.end();
    });

    return NextResponse.json(
      { url: uploadResponse.secure_url },
      { status: 201, headers: getCorsHeaders(origin) }
    );
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500, headers: getCorsHeaders(origin) }
    );
  }
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin') || '';
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}