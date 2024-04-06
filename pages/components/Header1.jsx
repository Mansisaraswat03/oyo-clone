
import Image from "next/image";
import Block from "./Block";
const Header1 = () => {
  return (
    <div className='flex justify-center items-center h-28 px-10'>
<Image
        src='/oyo.png'
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
      <div>
      <Block/>
      </div>
      
    </div>
  )
}

export default Header1;
