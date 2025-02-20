import connectViaMongoose from '@/lib/mongodb';
import Admin from '@/model/Admin';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export async function POST(req: NextRequest) {
  try {
    await connectViaMongoose();
    const { email, password } = await req.json();

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
    response.cookies.set('token', token, { httpOnly: true, secure: true, sameSite: 'strict', path: '/' });

    return response;
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}




