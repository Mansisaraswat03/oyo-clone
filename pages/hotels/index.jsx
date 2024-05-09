import { Header1 } from '@/components/Header1'
import Hotel from '@/components/Hotel'
import Head from 'next/head'
import React from 'react'

const Hotels = () => {
  return (
    <>
    <Head>
        <title>OYO - Hotels !</title>
      </Head>
    <Header1/>
        <div className='m-5'>
      <Hotel/>
      <Hotel/>
    </div>
    </>
    
  )
}

export default Hotels
