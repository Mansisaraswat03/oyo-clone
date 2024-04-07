import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-2">
      <Image src="/1.png" height={800} width={800} alt="banner" className="w-11/12 "/>
      <Image src="/2.png" height={400} width={400} alt="banner" className="w-11/12"/>
      <Image src="/banner1.png" height={800} width={800} alt="banner" className="w-11/12"/>
    </div>
  )
}

export default Header4
