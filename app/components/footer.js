"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import OpenAI from 'openai'

const footer = () => {
    const [handle, sethandle] = useState('')
    const router = useRouter()
    const { data: session } = useSession()

    const gototree = () => {
        router.push(`/generate?handle=${handle}`)
    }
    // const openai = new OpenAI({
    //     baseURL: "https://models.inference.ai.azure.com",
    //     apiKey: token,
    //     dangerouslyAllowBrowser: true
    //   });
    // const getairesponse = async () => {
    //     const response = await openai.chat.completions.create({
    //         messages: [
    //           { role:"system", content: "" },
    //           { role:"user", content: "What is your name and model and owner name" }
    //         ],
    //         model: "gpt-4o",
    //         temperature: 1,
    //         max_tokens: 4096,
    //         top_p: 1
    //       });
    //       console.log(response.choices[0].message.content);
    // }

    return (
        <footer className='bg-[#502274] text-white'>
            <div className='flex flex-col gap-6 p-9'>
                <h1 className='text-[52px] max-lg:w-[76%] max-lg:text-[42px] max-[700px]:leading-[28px] max-[700px]:text-[28px] max-[700px]:w-[95%] max-lg:leading-[42px] max-[700px]:mt-0 mt-10 leading-[51px] w-[750px] tracking-tighter text-center mx-auto font-black text-[#E9C0E9]'>Jumpstart your corner of the internet today</h1>
                <div className='flex gap-2 max-[640px]:flex-col max-[900px]:justify-center relative my-5 mx-auto'>
                    <input type="text"
                        placeholder='yourname'
                        value={handle || ""}
                        onChange={(e) => { sethandle(e.target.value) }}
                        name='handle'
                        className="bg-[#f6f7f5] max-[450px]:w-full p-4 py-3.5 pl-[214px] w-[340px] placeholder:text-slate-500  text-slate-700 outline-none border rounded-lg focus:outline-purple-500 focus:outline-4 text-lg outline-offset-[-1px] border-[#9a9a9a]"
                    />
                    <p className='absolute text-slate-700 text-lg top-4 left-3.5'>bittreebyyash.vercel.app/</p>
                    <button onClick={gototree} className='rounded-full hover:opacity-[0.92] px-[26px] bg-[#D2E823] py-4 text-[#1E232D] text-lg font-medium'>Claim your Bittree</button>
                </div>
            </div>

            <div className='grid grid-cols-4  max-[450px]:px-5 max-[750px]:grid-cols-2 max-[750px]:gap-y-10 mt-16 max-[900px]:mt-2 gap-4 p-16 max-[900px]:p-10 max-[900px]:mx-6 bg-white rounded-tl-xl rounded-tr-xl text-black mx-12'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-[28px]  max-[900px]:text-[22px] tracking-tight mb1 leading-10 font-semibold text-[#1e2330]'>Company</h3>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>The Linktree Blog</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Engineering Blog</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Marketplace</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>What's New</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>About</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Press</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Careers</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Link in Bio</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Social Good</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Contact</button>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-[28px] mb1 leading-10  max-[900px]:text-[22px] tracking-tight font-semibold text-[#1e2330]'>Community</h3>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Linktree for Enterprise</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>2023 Creator Report</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>2022 Creator Report</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Charities</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>What's Trending</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Creator Profile Directory</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Explore Templates</button>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-[28px] mb1 leading-10  max-[900px]:text-[22px] tracking-tight font-semibold text-[#1e2330]'>Support</h3>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Help Topics</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Getting Started</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Linktree Pro</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Features & How-Tos</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>FAQs</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Report a Violation</button>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-[28px] mb1 leading-10 max-[900px]:text-[22px] tracking-tight font-semibold text-[#1e2330]'>Trust & Legal</h3>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Terms & Conditions</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Privacy Notice</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Cookie Notice</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Trust Center</button>
                    <button className='text-sm text-left font-[600] text-[#676b5f] '>Cookie Preferences</button>
                </div>
            </div>
            <div className='bg-white max-[450px]:p-5 mb-20 max-[900px]:mx-6 mx-12 px-16 flex flex-wrap gap-8 justify-between max-[900px]:p-10  items-center pb-12 rounded-bl-xl rounded-br-xl'>
                <div className='flex gap-2 flex-wrap'>
                    {!session && <Link prefetch={true} href={"/login"} className=' p-4 px-6 hover:bg-[#00000016] bg-[#eff0ec] text-[#1e2330] rounded-lg font-medium text-lg'>Log in</Link>}
                    <Link href={"/login"} className='rounded-full hover:opacity-[0.92] px-[26px] bg-[#d2e823] py-4 text-[#1e2330] text-lg font-medium'>Get started for free</Link>
                    {session && <button onClick={() => { signOut() }} className='rounded-full hover:opacity-[0.92] px-[26px] bg-[#1e2330] py-4 text-white text-lg font-medium'>Log Out</button>}
                </div>

                <div className='flex gap-2'>
                    <Link prefetch={true} href={"https://bittreebyyash.vercel.app/yash"} className='rounded-full hover:opacity-[0.92]  bg-white  text-white text-lg font-medium'><img width={60} height={60} className='' src="/mainsvg.svg" alt="mera" /></Link>
                    <Link href={"/"} className='rounded-full hover:opacity-[0.92]  bg-white  text-white text-lg font-medium'><img width={60} height={60} className='' src="/threads.svg" alt="mera" /></Link>
                    <Link href={"/"} className='rounded-full hover:opacity-[0.92]  bg-white  text-white text-lg font-medium'><img width={60} height={60} className='' src="/tiktok.svg" alt="mera" /></Link>
                    <Link href={"https://www.instagram.com/enhancewithyash/"} className='rounded-full hover:opacity-[0.92]  bg-white  text-white text-lg font-medium'><img width={60} height={60} className='' src="/instagram.svg" alt="mera" /></Link>
                </div>
            </div>

            <div className=''>
                <div className='flex gap-12 justify-center'>
                    <Image className='w-auto h-auto' width={80} height={50} src="/images/india.png" alt="india" />
                    <Image className='w-auto h-auto' width={80} height={50} src="/images/usa.webp" alt="USA" />
                </div>
                <p className='text-base max-[900px]:text-sm font-semibold text-[#e9c0e9] w-[70%] mx-auto text-center py-9'>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</p>
            </div>
        </footer>
    )
}

export default footer