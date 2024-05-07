"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Block from './Block';
import { block } from '@/lib/data/data';
import { User, Menu } from 'lucide-react';

export const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 border-gray-300 bg-white">
      <div className="flex justify-between items-center h-20 md:px-10">
        <Image src="/oyo.png" alt="logo" width={200} height={200} className="w-28 h-28" />
        <div className="hidden lg:flex h-full">
          {block.map((item) => (
            <Block key={item.id} title={item.title} para={item.para} icon={item.icon} />
          ))}
          <div className="flex items-center px-3 hover:bg-gray-100 h-20 cursor-pointer mx-6">
              <User className="w-8 h-8 rounded-full mr-3 bg-gray-300" />
              <Link href="/login" className="font-bold">
                Login / Signup
              </Link>
            </div>
        </div>
        <div className="flex items-center px-3 hover:bg-gray-100 h-full cursor-pointer md:hidden">
          <Menu className="w-8 h-8" onClick={toggleMenu} />
          <User className="w-8 h-8 rounded-full mr-3 bg-gray-300 ml-2" />
        </div>
        <div className={`fixed top-20 left-0 py-6 w-64 bg-white z-50 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="flex flex-col gap-6 h-full">
            {block.map((item) => (
              <Block key={item.id} title={item.title} para={item.para} icon={item.icon}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
