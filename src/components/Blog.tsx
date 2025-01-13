import React from 'react'
import Image from 'next/image';

const Blogs = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-secondary text-center text-2xl font-bold'>Leatest Blog</h1>
      <div className='flex flex-col md:flex-row lg:flex-row justify-center align items-center'>
      <Image src="/image/blog1.png" alt="Blog " width={300} height={300}/>
      <Image src="/image/blog2.png" alt="Blog " width={300} height={300}/>
      <Image src="/image/blog3.png" alt="Blog " width={300} height={300}/>
    </div>
    </div>
  )
}

export default Blogs;