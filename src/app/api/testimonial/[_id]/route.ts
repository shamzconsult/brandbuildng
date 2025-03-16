import connectViaMongoose from "@/lib/mongodb"
import Testimonial from "@/model/Testimonial";
import { NextResponse } from "next/server";

const PUT = async (req: Request) => {
    try {
        await connectViaMongoose();
        const url = new URL(req.url);
        const id = url.pathname.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: "Testimonial ID is required" }, 
                { status: 400 }
            );
        }

        const { quote, name, stars, image } = await req.json()

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            id, 
            { quote, name, stars, image },
            { new: true, runValidators: true }
        );

        return NextResponse.json(
            { message: "Testimonila updated successfully", updatedTestimonial },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating testimonial:", error);
        return NextResponse.json({ message: "Error updating testimonial", error }, { status: 500 });
    }
}

const DELETE = async (req: Request) => {
    try {
        await connectViaMongoose();
        const url = new URL(req.url);
        const id = url.pathname.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: 'testimonial ID is required' },
                { status: 400 }
            );
        }

        await Testimonial.findByIdAndDelete(id);
        return NextResponse.json(
            { message: "Testimonial deleted Successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error deleting testimonial", error }, 
            { status: 500 }
        );
    }
}

export { PUT, DELETE }