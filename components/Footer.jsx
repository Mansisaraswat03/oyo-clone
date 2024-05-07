import Image from 'next/image';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-gray-500 bottom-0">
      <div className='px-5 lg:px-10'>
        <div className='flex flex-col lg:flex-row justify-between items-center py-5'>
          <div className='flex flex-col lg:flex-row gap-4 items-center'>
            <Image src="/logo-2.png" width={200} height={200} alt="logo" className='w-40 h-20' />
            <h2 className='text-white text-md lg:text-2xl font-bold'>World's leading chain of hotels and homes</h2>
          </div>
          <div className='mt-4 lg:mt-0 flex items-center gap-1'>
            <h2 className='text-white text-md lg:text-2xl font-bold'>Join our network and grow your business!</h2>
            <button className='bg-white text-black flex gap-1 rounded-md p-2'><Building2 />List your property</button>
          </div>
        </div>
        <div className='py-5'>
          <h2 className='text-white text-lg'>Download OYO app for exciting offers.</h2>
          <div className='flex flex-col lg:flex-row gap-4 mt-4'>
            <Link href="https://apps.apple.com/in/app/oyo-search-book-hotel-rooms/id988141624" target="_blank"><Image src="/apple.png" width={400} height={400} alt="logo" className='w-40 h-20' /></Link>
            <Link href="https://play.google.com/store/apps/details?id=com.oyo.consumer&hl=en" target="_blank"><Image src="/g-play.png" width={400} height={400} alt="logo" className='w-40 h-20' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
