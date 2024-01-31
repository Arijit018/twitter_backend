import { TweetService } from "../services/tweet_service.js";

const tweetService = new TweetService();

const createTweet = async (req,res) =>{
    try {
        const data = req.body;
        const response= await tweetService.create(data);
        return res.status(201).json({
            success: true,
            message: ' Sucessfully created a tweet',
            data : response, 
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error Occured',
            data: {},
            err: error
        })
    }
}
const getTweet = async (req,res) =>{
    try {
        const id = req.params.id;
        console.log(id);
        const response= await tweetService.getTweet(id);
        // console.log(response);
        return res.status(200).json({
            success: true,
            message: ' Sucessfully fetched a tweet',
            data : response, 
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error Occured',
            data: {},
            err: error
        })
    }
}

export {
    createTweet, 
    getTweet
}