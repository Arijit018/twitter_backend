import express from "express";
import { connect } from "./config/database.js";
import { passportAuth } from './config/jwt_middleware.js';
import passport from 'passport';
import { router } from "./routes/index.js";
const app = express();
app.use(passport.initialize());
passportAuth(passport);
app.use(express.json())
app.use('/',router)
app.listen(3000, async() => {
    console.log('Server started at 3000');
    connect();
    console.log('MongoDB is connected');
    //  Tweet.create({
    //     content: 'This is my 1st tweet ',
    //     likes:25,
    //     noOfRetweet: 10,
    //     comments: 'This is my 1st comment',
    // })
    // Hashtag.create({
    //     text: ' Hashtags 1',
    //     tweet: ['65b204eea5db922ed1619044']
    // })

    // const tweetRepo = new TweetRepository();
    // let tweet = await tweetRepo.deleteTweet({
    //     '_id': '65b207692343116b05f3c686'
    // });
    // console.log(tweet);
})