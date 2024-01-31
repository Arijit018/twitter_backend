import express from "express";
import { createTweet,getTweet } from "../controllers/tweet_controller.js";
import { userLogin, userSignUp } from "../controllers/user_controller.js";
const router = express.Router();

router.post('/tweets',createTweet);
router.get('/tweet/:id',getTweet);
router.post('/signup', userSignUp);
router.post('/login', userLogin);

export {router}