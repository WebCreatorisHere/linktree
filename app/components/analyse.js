import React from 'react'

const analyse = () => {
  return (
    <section className='bg-[#F3F3F1] max-[900px]:px-[24px] max-[900px]:h-auto gap-[5%] px-12 pt-[11%] text-[#1E2330] max-[900px]:flex-col max-[900px]:gap-0 h-[650px] flex flex-row-reverse'>
        <div className='w-[55%] max-[900px]:w-full mx-auto'>
         <h1 className='font-black max-[450px]:text-[32px] text-[52px] max-[900px]:text-[36px] max-[900px]:leading-[36px] tracking-tighter leading-[1] font-sans'>Analyze your audience and keep your followers engaged</h1>
         <p className='font-sans max-[450px]:text-base text-lg font-semibold my-8 px-2'>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
         <button className='rounded-full hover:opacity-[0.92] my-4 px-[26px] bg-[#e9c0e9] py-4 text-[#1e2330] text-lg font-medium'>Get Started for free</button>

        </div>
        <div className='w-[45%] max-[900px]:w-full flex max-lg:items-center justify-center items-start mx-auto'>
            <img className='w-[84%] max-[900px]:w-[70%] max-[900px]:mb-20' src="images/boc.png" alt="" />
        </div>
    </section>
  )
}

export default analyse