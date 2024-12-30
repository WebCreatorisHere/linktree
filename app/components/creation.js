import React from 'react'

const creation = () => {
  return (
    <section className='h-[130vh] flex gap-[5%] flex-row-reverse px-12 pt-[18%] bg-[#e9c0e9] text-[#502274]'>
        <div className='w-[55%] mx-auto'>
         <h1 className='font-black text-[58px] leading-[1] font-sans'>Create and customize your Bittree in minutes</h1>
         <p className='font-sans text-lg font-semibold my-8 px-2'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
         <button className='rounded-full hover:opacity-[0.92] my-4 px-[26px] bg-[#502274] py-4 text-white text-lg font-medium'>Get started for free</button>

        </div>
        <div className='w-[45%] flex justify-center items-start mx-auto'>
            <img src="images/creator.png" alt="" />
        </div>
    </section>
  )
}

export default creation