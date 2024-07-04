"use client";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ViewDetail = ({hotels}) => {
  const [auth, setAuth] = useState(false);
 const route = useRouter();
  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  const handleButton = () => {
if (auth) {
route.push(`/checkout/${hotels._id}`);
return;
  }
  else{
    alert("Please login first");
    route.push(`/login`);
  }
}
  return (
    <>
      <Head>
        <title>{hotels?.name}</title>
      </Head>
      <div className="m-5 w-10/12 mx-auto my-10">
        <Image
          src={hotels?.banner}
          width={4000}
          height={4000}
          alt="hotel"
          className="w-full my-5 h-large-box"
        />
        <div className="w-full">
          <h3 className="font-bold text-3xl">
          {hotels?.name}
          </h3>
          <p className="my-5 text-xl text-justify">
            {hotels?.description}
          </p>
          <p className="text-3xl font-bold my-5">Facilities :</p>
          <ul className="text-xl flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-5">
          {
            hotels ? hotels?.facilities?.map((facility) => {
              return (<li className="flex items-center gap-4 hover:text-blue-400 hover:cursor-pointer" key={facility}>
             <Image src={facility.img} width={30} height={30} alt="icon"/> {facility.name}
            </li>) 
          }) : ""
          }
          </ul>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-10">
          <button className="bg-blue-400 text-lg w-60 h-14 rounded-lg">
            Price : &#8377;{hotels?.price}
          </button>
          <button className="bg-red-400 text-lg w-60 h-14 rounded-lg" onClick={handleButton}>
            Book Now
          </button>
          </div>
        </div>
      </div>
    </>
  );
};




export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`)
  const data = await res.json()
  console.log(data);
  return {
    props: {
      hotels : data.hotels
    }
  }
}


export default ViewDetail;



