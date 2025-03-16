import connectViaMongoose from "@/lib/mongodb"
import Testimonial from "@/model/Testimonial"
import { NextResponse } from "next/server";

const GET = async() => {
    try {
        await connectViaMongoose()
        const testimonial = await Testimonial.find({});
        return NextResponse.json(testimonial);
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching testimonial", error },
            { status: 500 }
        )
    }
}

const POST = async (req: Request) => {
    try {
        await connectViaMongoose();
        const { quote, name, stars, image } = await req.json();

        if (!quote || !name || !stars || !image) {
            return NextResponse.json(
                { message: "All fileds required" },
                { status: 400 }
            )
        };

        const testimonial = await Testimonial.create({
            quote, name, stars, image
        });
        return NextResponse.json(
            { message: "Testimonial created successfully", testimonial },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Error creating testimonial", error },
            { status: 500 }
        )
    }
}

export { GET, POST }