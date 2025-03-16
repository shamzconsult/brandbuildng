import connectViaMongoose from "@/lib/mongodb"
import Testimonial from "@/model/Testimonial";

export const getAlltestimonial = async () => {
    try {
        await connectViaMongoose();
        const testimonial = await Testimonial.find();
        return JSON.parse(JSON.stringify(testimonial));
    } catch (error) {
        console.error("Error fetching testimonial: ", error);
        return [];
    }
}