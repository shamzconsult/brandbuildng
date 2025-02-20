import connectViaMongoose from "@/lib/mongodb"
import Offer from "@/model/Offer";
import { NextResponse } from "next/server";

const GET = async () => {
    try {
        await connectViaMongoose();
        const offers = await Offer.find({});
        return NextResponse.json(offers);
    } catch (error) {
        return NextResponse.json(
            { error: error },
            { status: 500 }
        );
    }
} 

const POST = async (req: Request) => {
    try {
        await connectViaMongoose();

        const { title, description, price, discount, image } = await req.json();

        if (!title || !description || !price || !image || !discount) {
            return NextResponse.json(
                { message: "Missing fields", error: "All fields are required" },
                { status: 400 }
            );
        }

        const newOffer = await Offer.create({ title, description, price, image, discount });

        return NextResponse.json({ message: "Offer created successfully", newOffer }, { status: 200 });

    } catch (error) {
        console.error('Error creating Offer:', error);
        return NextResponse.json(
            { message: "Error creating Offer", error },
            { status: 500 }
        );
    }
};

export { GET,POST }