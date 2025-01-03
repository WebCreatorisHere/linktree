import React from 'react'

const share = () => {
  return (
    <section className='bg-[#780016] max-lg:h-[750px] max-[900px]:flex-col max-[900px]:h-auto max-[900px]:gap-0 gap-2 px-12 max-[900px]:px-[24px] pt-[18%] text-[#E9C0E9] h-[820px] flex '>
        <div className='w-[55%] mx-auto max-[900px]:w-full'>
         <h1 className='font-black max-[450px]:text-[32px] max-[450px]:leading-[32px] tracking-tight text-[52px] leading-[1] font-sans max-[900px]:text-[36px] max-[900px]:leading-[36px]'>Share your Bittree from your Instagram, TikTok, Twitter and other bios</h1>
         <p className='font-sans max-[450px]:text-base text-lg font-semibold my-8 px-2'>Add your unique Bittree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
         <button className='rounded-full hover:opacity-[0.92] my-4 px-[26px] bg-[#e9c0e9] py-4 text-[#1e2330] text-lg font-medium'>Get Started for free</button>

        </div>
        <div className='w-[45%] max-[900px]:w-full flex justify-center items-start mx-auto'>
            <img className='w-[92%] max-[900px]:w-[70%] max-[900px]:mb-20' src="images/links.png" alt="" />
        </div>
    </section>
  )
}

export default share