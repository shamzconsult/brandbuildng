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

export { GET }