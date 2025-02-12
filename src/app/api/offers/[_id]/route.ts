import connectViaMongoose from "@/lib/mongodb"
import Offer from "@/model/Offer";
import { NextResponse } from "next/server";

const PUT = async (req: Request) => {
    try {
        await connectViaMongoose();
        const url = new URL(req.url);
        const id = url.pathname.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: "Offer ID is required" }, 
                { status: 400 }
            );
        }

        const { title, description, discount, image, price } = await req.json();

        const updatedOffer = await Offer.findByIdAndUpdate(
            id, 
            { title, description, price, discount, image },
            { new: true, runValidators: true }
        );

        return NextResponse.json(
            { message: "Offer updated successfully", updatedOffer }, 
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating offer:", error);
        return NextResponse.json({ message: "Error updating offer", error }, { status: 500 });
    }
}

const DELETE = async (req: Request) => {
    try {
        await connectViaMongoose();
        const url = new URL(req.url);
        const id = url.pathname.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: 'Offer ID is required' },
                { status: 400 }
            );
        }

        await Offer.findByIdAndDelete(id);
        return NextResponse.json(
            { message: "Offer deleted Successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting offer:", error);
        return NextResponse.json(
            { message: "Error deleting offer", error }, 
            { status: 500 }
        );
    }
}

export { DELETE, PUT }