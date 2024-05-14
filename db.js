import mongoose from "mongoose";
const uri =process.env.NEXT_PUBLIC_MONGO_URI;
const connectDB = async () => {
    await mongoose.connect(uri,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    );
    console.log("connected to db");
}

export default connectDB