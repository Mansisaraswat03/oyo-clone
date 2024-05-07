import Image from "next/image";
import React from "react";
import { countries } from "../lib/data/data";
export const Location = () => {
  return (
    <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2">
      <div className="p-4">
        <Image
          src="/location.png"
          alt="logo"
          width={400}
          height={400}
          className="w-10/12 "
        />
      </div>
      <div className="flex flex-col p-4 py-10 gap-6">
        <h1 className="font-bold text-3xl">There's an OYO around. Always.</h1>
        <p className="text-gray-500">
          More Destinations. More Ease. More Affordable.
        </p>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <h2 className="font-bold text-4xl">35+</h2>
            <p className="text-gray-400">Countries</p>
          </div>
          <p className="text-6xl text-gray-400">/</p>
          <div>
            <span className="font-bold text-4xl"> 174,000+</span>
            <p className="text-gray-400">Hotels & Homes</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 px-6">
          {countries.map((item) => (
            <div className="flex items-center gap-2">
              <div className={`rounded-full w-2 h-2 bg-red-500`} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
