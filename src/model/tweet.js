import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    noOfRetweet: {
        type: Number
    },
    comments: {
        type: String
    },
})

const Tweet = mongoose.model('Tweet', tweetSchema);
export { Tweet }