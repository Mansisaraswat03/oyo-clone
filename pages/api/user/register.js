import connectDB from "@/db";
import User from "@/model/user-model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export default async function handler(req, res) {
    if(req.method === "POST"){
        connectDB();
        const {name, email, password} = req.body;
        if(!name || !email || !password){
    res.status(400).json({ msg: "All fields are required"});
    }
    const emailExist = await User.findOne({email});
    if(emailExist){
        res.status(400).json({ msg: "Email already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({name, email, password: hashedPassword});
    const result = await newUser.save();
   const token = jwt.sign({token: result._id}, process.env.NEXT_PUBLIC_JWT_SECRET, {expiresIn: '30d'});
   return res.status(201).json({msg: "User Registered successfully", token});
  }
}