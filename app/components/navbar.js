"use client"
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const navbar = () => {
    const { data: session } = useSession()
    return (
        <nav className='fixed z-[500]  w-full max-[900px]:top-[16px] top-[50px]'>
            <div className='rounded-full border max-[900px]:w-[97.5%] w-[95%] mx-auto max-[900px]:p-2 p-3.5 flex justify-between items-center bg-white z-[500]'>
                <div className='flex items-center px-5 max-[450px]:px-2'>
                    <div className='flex cursor-pointer items-center mx-2'><p className='text-2xl max-2xl:hidden max-[900px]:block max-[450px]:hidden font-bold'>Bittree</p><img width={28} src="logo.svg" alt="" /></div>
                    <ul className='flex max-[900px]:hidden text-slate-600 items-center'>
                        <li className='px-4 py-3 hover:bg-[#00000016] cursor-pointer rounded-lg'>
                            <Link className='text-[#676b5f] font-semibold' href={"/"}>Home</Link>
                        </li>
                        <li className='px-4 py-3 hover:bg-[#00000016] cursor-pointer rounded-lg'>
                            <Link className='text-[#676b5f] font-semibold' href={"/"}>Marketplace</Link>
                        </li>
                        <li className='px-4 py-3 hover:bg-[#00000016] cursor-pointer rounded-lg'>
                            <Link className='text-[#676b5f] font-semibold' href={"/"}>Discover</Link>
                        </li>
                        <li className='px-4 py-3 hover:bg-[#00000016] cursor-pointer rounded-lg'>
                            <Link className='text-[#676b5f] font-semibold' href={"/"}>Pricing</Link>
                        </li>
                        <li className='px-4 py-3 hover:bg-[#00000016] cursor-pointer rounded-lg'>
                            <Link className='text-[#676b5f] font-semibold' href={"/"}>Learn</Link>
                        </li>
                    </ul>

                </div>

                <div className='flex gap-2 justify-center items-center'>
                    {!session && <><Link prefetch={true} href={"/login"} className=' p-4 max-[900px]:p-3 max-[450px]:text-base max-[900px]:px-4 px-6 hover:bg-[#00000016] bg-[#eff0ec] text-[#1e2330] rounded-lg font-medium text-lg'>Log in</Link>
                        <Link href={"/login"} className='rounded-full max-[900px]:py-3 hover:opacity-[0.92] px-[26px] max-[450px]:text-base bg-[#1e2330] py-4 text-white text-lg font-medium'>Sign up free</Link></>}
                    {session && <button onClick={() => { signOut() }} className='rounded-full hover:opacity-[0.92] px-[26px] bg-[#1e2330] py-4 text-white text-lg font-medium'>Log Out</button>}
                </div>
            </div>
        </nav>
    )
}

export default navbar