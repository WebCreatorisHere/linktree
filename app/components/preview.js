"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const preview = () => {
  const [handle, sethandle] = useState("")
  const router = useRouter()
  const gototree = ()=>{
    router.push(`/generate?handle=${handle}`)
  }
  return (
    <section className='bg-[#254f1a] max-[900px]:flex-col max-[900px]:gap-0  gap-10 px-12 max-[900px]:px-[24px] pt-[18%] max-[900px]:pt-[156px] text-[#d2e823] max-[900px]:h-auto h-[820px] flex '>
      <div className='w-[55%] max-lg:my-10 max-[900px]:w-full mx-auto max-[900px]:my-4'>
        <h1 className='font-black max-[450px]:text-[32px] max-[450px]:leading-[32px] text-[54px] max-lg:text-[52px] tracking-tight leading-[1] font-sans max-[900px]:text-[36px] max-[900px]:leading-[36px]'>Everything you are. In one, simple link in bio.</h1>
        <p className='font-sans text-lg max-[450px]:text-base  tracking-tight font-semibold my-6 px-2'>Join 50M+ people using Bittree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className='flex gap-2 relative my-8 flex-wrap'>
          <input type="text"
            placeholder='yourname'
            value={handle || ""}
            onChange={(e) => { sethandle(e.target.value)}}
            name='handle'
            className="bg-[#f6f7f5] p-4 max-[450px]:w-full py-4 pl-[83.5px] placeholder:text-slate-700 text-slate-700 outline-none border rounded-xl focus:outline-purple-500 focus:outline-4 text-lg outline-offset-[-1px] border-[#9a9a9a]"
          />
          <p className='absolute text-slate-700 text-lg top-4 left-4'>linktr.ee/</p>
          <button onClick={gototree} className='rounded-full hover:opacity-[0.92] px-[26px] bg-[#e9c0e9] py-4 text-[#1e2330] text-lg font-medium'>Claim your Bittree</button>
        </div>

      </div>
      <div className='w-[45%] max-[900px]:w-full flex justify-center items-start mx-auto'>
        <img className='w-[84%] max-[900px]:w-[70%] max-[900px]:my-20 max-lg:mt-20' src="images/home.png" alt="" />
      </div>
    </section>
  )
}

export default preview