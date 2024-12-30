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
    <section className='bg-[#254f1a] gap-2 px-12 pt-[18%] text-[#d2e823] h-[130vh] flex '>
      <div className='w-[55%] mx-auto'>
        <h1 className='font-black text-[58px] leading-[1] font-sans'>Everything you are. In one, simple link in bio.</h1>
        <p className='font-sans text-lg font-semibold my-6 px-2'>Join 50M+ people using Bittree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className='flex gap-2 relative my-4'>
          <input type="text"
            placeholder='yourname'
            value={handle || ""}
            onChange={(e) => { sethandle(e.target.value)}}
            name='handle'
            className="bg-[#f6f7f5] p-4 py-4 pl-[83.5px] placeholder:text-slate-700 text-slate-700 outline-none border rounded-xl focus:outline-purple-500 focus:outline-4 text-lg outline-offset-[-1px] border-[#9a9a9a]"
          />
          <p className='absolute text-slate-700 text-lg top-4 left-4'>linktr.ee/</p>
          <button onClick={gototree} className='rounded-full hover:opacity-[0.92] px-[26px] bg-[#e9c0e9] py-4 text-[#1e2330] text-lg font-medium'>Claim your Bittree</button>
        </div>

      </div>
      <div className='w-[45%] flex justify-center items-start mx-auto'>
        <img src="images/home.png" alt="" />
      </div>
    </section>
  )
}

export default preview