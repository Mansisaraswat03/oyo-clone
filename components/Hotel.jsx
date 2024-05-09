import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className="border border-red-500 rounded-lg w-full mb-5 p-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-3">
          <Image
            src="/hotel-3.avif"
            width={400}
            height={400}
            alt="hotel"
            className="w-full md:w-[860px] h-72  mb-3"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 mt-5">
        <Image
          src="/hotel-1.png"
          width={200}
          height={200}
          alt="hotel"
          className="w-full"
        />
        <Image
          src="/hotel-1.png"
          width={400}
          height={400}
          alt="hotel"
          className="w-full"
        />
        <Image
          src="/hotel-1.png"
          width={400}
          height={400}
          alt="hotel"
          className="w-full"
        />
        <Image
          src="/hotel-1.png"
          width={400}
          height={400}
          alt="hotel"
          className="w-full"
        />
      </div>
        <div className="md:ml-5">
          <h2 className="font-extrabold text-2xl line-clamp-1 mt-2">
            OYO Sushwesh Guest House
          </h2>
          <p className="text-lg my-5">
            The Jianguo Hotel Qianmen is located near Tiantan Park, just a
            10-minute walk from the National Center for the Performing Arts and
            Tian'anmen Square. Built in 1956 it has old school charm and many
            rooms still feature high, crown-molded ceilings. A 2012 renovation
            brought all rooms and services up to modern day scratch and
            guestrooms come equipped with free Wi-Fi and all the usual amenities
            required for a comfortable stay.
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold">Facilities : </span>
            <span>Free Wifi , Swimming pool, Beaches, Restaurant, 10+</span>
          </p>
          <div className="flex items-center gap-6">
          <button className="bg-blue-400 text-lg w-60 h-14 rounded-lg">
            Price :1200
          </button>
          <Link href="/hotels/3" className="text-xl font-bold text-red-600 hover:underline"> view details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
