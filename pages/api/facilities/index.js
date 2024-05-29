import connectDB from "@/db";
import hotelModel from "@/model/hotel-model";

export default async function handler(req, res) {
    connectDB();
    if (req.method === "GET") {
        const facilities = await hotelModel.find({}).distinct("facilities.name");
        return res.status(200).json({ msg: "good", facilities });
    }
}