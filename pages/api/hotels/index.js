import connectDB from "@/db";
import Hotel from "@/model/hotel-model";

export default async function handler(req, res) {
   connectDB();
//     if (req.method === "POST") {
//         const newHotel = new Hotel(req.body);
//         const result = await newHotel.save();
//         return res.status(201).json({msg : "Hotel added successfully", result});
// }

if(req.method === "GET"){
    const hotels = await Hotel.find({location:req.query.name});
    if(hotels.length>0){
   return res.status(200).json({msg:"good",hotels});
    }
    const allHotels = await Hotel.find({});
}
}