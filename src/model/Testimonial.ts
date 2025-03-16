import mongoose, { models, Schema } from "mongoose";

const TestimonialSchema = new Schema({
    quote: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
});

const Testimonial = models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);

export default Testimonial