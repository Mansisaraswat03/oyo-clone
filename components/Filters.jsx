"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const Filters = ({price,setPrice,handlePrice,checkList,setCheckList}) => {
  const [list, setList] = useState([]);
  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get("/api/facilities");
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);
  console.log(list);

  const handleCheckList = (e) => {
    let newList=[];
    if (e.target.checked) {
        newList.push(e.target.value);
        setCheckList(newList);
        return;
    }
    newList=newList.filter((item)=>item!==e.target.value);
    setCheckList(newList);
  };

  return (
    <>
      <div className="border-2 border-red-500 rounded-md p-5 m-5 h-auto">
        <label htmlFor="price" className="text-xl">
          Price:{" "}
        </label>
        <input type="range" name="price" id="price" min={1000} max={3000} value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <span className=" ml-10">&#8377; {price ? price : ""}</span>
        <div>
          <button
            className=" w-40 h-10 bg-green-300 cursor-pointer my-3"
            onClick={handlePrice}
          >
            Search
          </button>
        </div>
        <div className="my-10">
          <h3 className=" font-bold">Filters By Facilities :</h3>
          {list?.map((facility) => {
            return (
              <p key={facility} className="grid grid-cols-4 my-3">
                <label htmlFor="checkbox" className=" col-span-2">
                  {facility}
                </label>
                <input
                  type="checkbox"
                  name="ckeckbox"
                  id="checkbox"
                  value={facility}
                  className=" w-5 h-5 ml-3 col-span-1"
                  onChange={handleCheckList}
                />
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filters;
