import { list } from "@/pages/data/data"
import { ChevronDown } from 'lucide-react';
const Header2 = () => {
  return (
    <div>
      <div className='flex gap-16  h-10 justify-center px-5 bg-gray-100'>
        {list.map((item,index)=>(
            <div className="flex items-center px-1 hover:bg-white" key={index}>{item.name} <ChevronDown/></div>
        ))}
        <div className="flex items-center hover:text-red-500" > All Cities</div>
      </div>
    </div>
  )
}

export default Header2
