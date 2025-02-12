import connectViaMongoose from "@/lib/mongodb"
import Offer from "@/model/Offer";

export const getAllOffer = async () => {
    try {
        await connectViaMongoose();
        const Offers = await Offer.find();
        return JSON.parse(JSON.stringify(Offers));
    } catch (error) {
        console.error("Error fetching offers: ", error);
        return null;
    }
} 