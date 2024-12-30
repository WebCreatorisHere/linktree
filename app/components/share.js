import React from 'react'

const share = () => {
  return (
    <section className='bg-[#780016] gap-2 px-12 pt-[18%] text-[#E9C0E9] h-[130vh] flex '>
        <div className='w-[55%] mx-auto'>
         <h1 className='font-black text-[58px] leading-[1] font-sans'>Share your Bittree from your Instagram, TikTok, Twitter and other bios</h1>
         <p className='font-sans text-lg font-semibold my-8 px-2'>Add your unique Bittree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
         <button className='rounded-full hover:opacity-[0.92] my-4 px-[26px] bg-[#e9c0e9] py-4 text-[#1e2330] text-lg font-medium'>Get Started for free</button>

        </div>
        <div className='w-[45%] flex justify-center items-start mx-auto'>
            <img src="images/links.png" alt="" />
        </div>
    </section>
  )
}

export default share