import mongoose from "mongoose";

const connect = async() =>{
    await mongoose.connect('mongodb://0.0.0.0:27017/TwitterDB')
}
export {connect};   

