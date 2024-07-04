import Checkout from '@/components/checkout'
import { Header1 } from '@/components/Header1'
import React from 'react'

const Page = ({hotels}) => {
  return (
    <>
      <Header1/>
      <Checkout hotels={hotels}/>
    </>
    
  )
}

export default Page;

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
