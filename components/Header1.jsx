import Image from "next/image";
import Link from "next/link"
import Block from "./Block";
import { block } from "@/lib/data/data";
import { User } from 'lucide-react';
const Header1 = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-20 px-10 ">
      <Image
        src="/oyo.png"
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
      <div className="flex h-full">
      {block.map((item)=>(
        <Block key={item.id} title={item.title} para={item.para} icon={item.icon} />
      ))} 
      </div>
      <div className="flex items-center px-3 hover:bg-gray-100 h-full">
          <User className="w-10 h-10 rounded-full mr-5 bg-gray-300"/>
          <Link href={"/login"} className=" font-bold">
              Login / Signup
            </Link>
          </div>
    </div>
  );
};

export default Header1;
