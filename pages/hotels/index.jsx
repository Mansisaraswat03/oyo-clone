import Filters from "@/components/Filters";
import { Header1 } from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(1000);
  const [list, setList] = useState([]);
  const [checkList, setCheckList] = useState([]);

  const handleCheckList = async () => {
    const {data} = await axios.get(`/api/facilities/search?val=${checkList}`);
    if(data?.hotels){
      let newArr = data.hotels;
      setList(newArr);
    }
  }

  useEffect(() => {
    if(checkList){
      handleCheckList();
  }}, [checkList]);

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}&city=${hotels.location}`);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };
  return (
    <>
      <Head>
        <title>OYO - Hotels !</title>
      </Head>
      <Header1 />
      <div className="flex flex-col lg:grid grid-cols-12">
        <div className="col-span-3 ">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((hotel) => {
                return (
                  <div className=" m-5 col-span-9" key={hotel._id}>
                    <Hotel hotel={hotel} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((hotel) => {
                return (
                  <div className=" m-5 col-span-9" key={hotel._id}>
                    <Hotel hotel={hotel} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Hotels;

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allHotels,
    },
  };
}
