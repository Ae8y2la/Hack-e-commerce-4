import React from 'react'
import Topbar from '../components/TopBar'
import Navbar from '../components/TopBar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const ShopPage = () => {
  return (
    <section id="shop">
    <div>
        <Topbar />
        <Navbar />
        <Image src="/Image/shop.svg" alt="shop" width={1200} height={1200} className='px-6 md:px-20 lg:px-20 mt-8'/>
        <div className='flex flex-col md:flex-row lg:flex-row gap-12 px-32 md:px-60 lg:px-60 mt-8'>
        <Image src="/shop/img7.png" alt="shop" width={100} height={100} /> 
        <Image src="/shop/img5.png" alt="shop" width={100} height={100} /> 
        <Image src="/shop/img10.png" alt="shop" width={100} height={100} /> 
        <Image src="/shop/img2.png" alt="shop" width={100} height={100} /> 
        <Image src="/shop/img1.png" alt="shop" width={100} height={100} /> 
        </div>
        <Footer />
      <Link href="/">Go to Home Page</Link>
    </div>
    </section>
  )
}

export default ShopPage;