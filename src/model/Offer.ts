import mongoose, { models, Schema } from "mongoose";

const OfferSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    discount: { 
        type: Number, 
        default: 0 
    }, 
    price: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        // required: true 
    },
}, { timestamps: true });

const Offer = models.Offer || mongoose.model('Offer', OfferSchema);

export default Offer;
