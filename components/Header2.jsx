import { list } from "@/lib/data/data"
import { ChevronDown } from 'lucide-react';
import Link from "next/link";
export const Header2 = () => {
  return (
    <div>
      <div className='hidden md:flex gap-16  h-10 justify-center px-5 bg-gray-100'>
        {list.map((item,index)=>(
            <div className="flex items-center px-1 hover:bg-white cursor-pointer" key={index}>{item.name} <ChevronDown/></div>
        ))}
        <div className="flex items-center hover:text-red-500 cursor-pointer" > All Cities</div>
      </div>
      <div className='lg:hidden flex gap-4 h-10 justify-center px-5 bg-gray-100'>
        {list.slice(0, 2).map((item, index) => (
          <Link href={item.link} className="flex items-center px-1 hover:bg-white cursor-pointer" key={index}>
            {item.name} <ChevronDown/>
          </Link>
        ))}
        <div className="flex items-center hover:text-red-500 cursor-pointer">
          All Cities
        </div>
      </div>
    </div>
  )
}
