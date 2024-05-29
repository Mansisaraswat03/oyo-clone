import connectDB from "@/db";
import hotelModel from "@/model/hotel-model";

export default async function handler(req, res) {
    connectDB();
    if (req.method === "GET") {
        const key =req.query.val;
        const hotels = await hotelModel.find({'facilities.name':{$in:key}});
        return res.status(200).json({ msg: "good", hotels });
    }
}