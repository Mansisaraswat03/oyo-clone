import User from "@/model/user-model";
import connectDB from "@/db";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if(req.method === "POST"){
        connectDB();
        const {email, password} = req.body;
        if(!email || !password){
    res.status(400).json({ msg: "All fields are required"});
    }
    const user = await User.findOne({email});
    if(!user){
       return res.status(400).json({ msg: "User does not exist"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
       return res.status(400).json({ msg: "Incorrect credentials"});
    }
    const token = jwt.sign({token: user._id}, process.env.NEXT_PUBLIC_JWT_SECRET, {expiresIn: '30d'});
    return res.status(200).json({msg: "Login successful", token});
}
}