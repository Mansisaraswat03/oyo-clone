import Head from "next/head";
import Image from "next/image";

const ViewDetail = () => {
  return (
    <>
      <Head>
        <title>OYO - View Details</title>
      </Head>
      <div className="m-5 w-8/12 mx-auto my-10">
        <Image
          src="/hotel-3.avif"
          width={4000}
          height={4000}
          alt="hotel"
          className="w-full my-5 h-large-box"
        />
        <div className="w-full">
          <h3 className="font-bold text-3xl">
            Super OYO 822815 Indian Residency, Near Adams Academy, Kadugodi
          </h3>
          <p className="my-5 text-xl text-justify">
            It is located near Tiantan Park, just a 10-minute walk from the
            National Center for the Performing Arts and Tian'anmen Square. Built
            in 1956 it has old school charm and many rooms still feature high,
            crown-molded ceilings. A 2012 renovation brought all rooms and
            services up to modern day scratch and guestrooms come equipped with
            free Wi-Fi and all the usual amenities required for a comfortable
            stay.
          </p>
          <button className="bg-blue-400 text-lg w-60 h-14 rounded-lg">
            Price :1200
          </button>
          <p className="text-3xl font-bold my-5">Facilities :</p>
          <ul className="text-xl flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-5">
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Swimming
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Beaches
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Restaurant
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">Wifi</li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Laundary
            </li>
          </ul>
          <button className="bg-red-400 text-lg w-60 h-14 rounded-lg my-5">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewDetail;
