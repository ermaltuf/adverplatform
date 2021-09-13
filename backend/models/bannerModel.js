import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    category : { type: String, required: true },
    caption: { type: String, required: true },
    contentPosition : { type: String, required: true },
    items: {
        Name: String,
        Image: String
    }

},
    {
        timestamps: true,
    }
);


const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;