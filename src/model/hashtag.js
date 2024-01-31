import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    tweet: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
})

const Hashtag = mongoose.model('Hashtags', hashtagSchema);
export { Hashtag }