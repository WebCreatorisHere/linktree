import React from 'react'

const creation = () => {
  return (
    <section className='h-[820px] max-[900px]:px-[24px] max-lg:h-[750px] max-[900px]:h-auto max-[900px]:flex-col max-[900px]:gap-0 flex gap-[5%] flex-row-reverse px-12 pt-[18%] bg-[#e9c0e9] text-[#502274]'>
        <div className='w-[55%] mx-auto max-[900px]:w-full'>
         <h1 className='font-black tracking-tight max-[450px]:text-[32px] max-[450px]:leading-[32px] max-[900px]:text-[36px] max-[900px]:leading-[36px] text-[52px] leading-[1] font-sans'>Create and customize your Bittree in minutes</h1>
         <p className='font-sans max-[450px]:text-base text-lg font-semibold my-8 px-2'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
         <button className='rounded-full hover:opacity-[0.92] my-4 px-[26px] bg-[#502274] py-4 text-white text-lg font-medium'>Get started for free</button>

        </div>
        <div className='w-[45%] max-[900px]:w-full flex justify-center items-start mx-auto'>
            <img className='w-[84%] max-[900px]:w-[70%] max-[900px]:mb-20' src="images/creator.png" alt="" />
        </div>
    </section>
  )
}

export default creation