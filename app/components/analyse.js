import React from 'react'

const analyse = () => {
  return (
    <section className='bg- dev
    [#F3F3F1] gap-[5%] px-12 pt-[11%] text-[#1E2330] h-[100vh] flex flex-row-reverse'>
        <div className='w-[55%] mx-auto'>
         <h1 className='font-black text-[58px] leading-[1] font-sans'>Analyze your audience and keep your followers engaged</h1>
         <p className='font-sans text-lg font-semibold my-8 px-2'>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
         <button className='rounded-full hover:opacity-[0.92] my-4 px-[26px] bg-[#e9c0e9] py-4 text-[#1e2330] text-lg font-medium'>Get Started for free</button>

        </div>
        <div className='w-[45%] flex justify-center items-start mx-auto'>
            <img src="images/boc.png" alt="" />
        </div>
    </section>
  )
}

export default analyse