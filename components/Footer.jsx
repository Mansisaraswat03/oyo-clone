import Image from 'next/image';
import { Building2 } from 'lucide-react';
const Footer = () => {
  return (
<div className="bg-gray-500 bottom-0">
   <div className='flex justify-between items-center px-10 h-20 '>
   <div className='flex gap-4 items-center'>
   <Image src="/logo-2.png" width={200} height={200} alt="logo" className='w-40 h-20'/>
    <h2 className='text-white text-2xl font-bold'>World's leading chain of hotels and homes</h2>
   </div>
    <h2 className='text-white text-2xl font-bold'>Join our network and grow your business!</h2>
    <div className='bg-white text-black flex gap-1 rounded-md p-2'><Building2/>List your property</div>
    </div>
    <div className='px-10'>
     <h2 className='text-white'>Download OYO app for exciting offers.</h2>
     <div className='flex'>
     <Image src="/apple.png" width={400} height={400} alt="logo" className='w-40 h-20'/>
     <Image src="/g-play.png" width={400} height={400} alt="logo" className='w-40 h-20'/>
     </div>
    </div>

</div>
  )
}

export default Footer
