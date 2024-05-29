import connectDB from "@/db";
import hotelModel from "@/model/hotel-model";

export default async function handler(req, res) {
    connectDB();
    if (req.method === "GET") {
        const hotels = await hotelModel.find({ price: { $lte: req.query.price } });
        return res.status(200).json({ msg: "Range Filter", hotels });
    }
}