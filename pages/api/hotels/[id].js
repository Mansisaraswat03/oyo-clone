import connectDB from "@/db";
import hotelModel from "@/model/hotel-model";

export default async function handler(req, res) {
    connectDB();
    if (req.method === "GET") {
        const hotels = await hotelModel.findById(req.query.id);
        return res.status(200).json({msg:"good",hotels});
    }
}