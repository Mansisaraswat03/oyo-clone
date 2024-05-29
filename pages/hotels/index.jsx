import { Header1 } from '@/components/Header1'
import Hotel from '@/components/Hotel'
import Head from 'next/head'
import React from 'react'

const Hotels = ({hotels}) => {
  return (
    <>
    <Head>
        <title>OYO - Hotels !</title>
      </Head>
    <Header1/>
    {
      hotels ? hotels.map((hotel) => {
                return (
                  <div className=" m-5 " key={hotel._id}>
                    <Hotel hotel={hotel} />
                  </div>
                );
              })
            : ""}
    </>
    
  )
}

export default Hotels


export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`)
  const data = await res.json()
  console.log(data);
  return {
    props: {
      hotels : data.hotels ? data.hotels :  data.allHotels,
    }
  }
}
