"use client";

import React, { useEffect, useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/legacy/image";

const HandlePage = () => {
    const router = useRouter();
    const params = useParams();
    const handle = params.handle;
    const [currthings, setCurrthings] = useState({});
    const [links, setLinks] = useState([]);

    const getthings = () => {
        fetch(`${process.env.NEXT_PUBLIC_HOST}/actions/addtree`)
            .then(response => response.json())
            .then(bigdata => {
                const oridata = bigdata.data;
                const key = 'handle';
                const boy = oridata.find(obj => obj[key] === handle);

                if (boy) {
                    setCurrthings(boy);
                    setLinks(boy.links);
                } else {
                    router.push('/not-found'); // Redirect to Not Found page
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                router.push('/not-found'); // Redirect in case of an error
            });
    };

    useEffect(() => {
        getthings();
    }, [handle]);

    useEffect(() => {
      if(handle == "not-found"){
      return notFound()
    }
    }, [router])
    
    
    return (
        <>
            
                {currthings.handle && <main className='h-screen relative'>
                    <Image
                        src="https://picsum.photos/1920/1080"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="absolute top-0 left-0"
                    />
                    <div className='h-full w-full absolute backdrop-blur-md top-0 left-0 z-10'></div>
                    <section className='max-w-[640px] h-[62%] p-4 pb-0 relative z-50 mx-auto'>
                        <div className='flex py-16 pb-8 flex-col gap-5 items-center'>
                           
                                <Image
                                    className='rounded-full w-24'
                                    src={currthings.pic || "/bluetick.svg"}
                                    alt="dp"
                                    width={96}
                                    height={96}
                                    layout="intrinsic"
                                />
                        
                            <div className='flex font-bold text-xl gap-1'>
                                @{handle}
                                <img src="bluetick.svg" alt="bluetick" />
                            </div>
                        </div>
                        <button className='w-10 hover:bg-black/20 flex justify-center items-center h-10 bg-black/30 absolute top-6 right-6 rounded-full'>
                            <svg width="16" height="16" viewBox="0 0 16 16">
                                <path
                                    fill="white"
                                    stroke="white"
                                    d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
                                ></path>
                                <path
                                    fill="white"
                                    stroke="white"
                                    d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
                                ></path>
                                <path
                                    fill="white"
                                    stroke="white"
                                    d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
                                ></path>
                            </svg>
                        </button>
                        <div className='flex flex-col gap-3.5 overflow-y-scroll scrollbar-hide max-h-full'>
                            {links[0] &&
                                links.map((itema, index) => (
                                    <Link key={index} href={itema.link} className='w-full py-6 bg-white rounded-full after:rounded-[90px] after:border-2 after:border-black after:border-b-[11px] after:border-r-[11px] hover:after:border-b-[6px] hover:after:border-r-[6px]  relative after:-top-0 after:-left-0 z-50 after:z-20  after:w-[100%] after:h-[100%] text-center font-semibold after:absolute'>{itema.text}</Link>
                                ))}
                        </div>
                    </section>
                </main>}
            {!currthings.handle && <p className=' flex justify-center items-center h-screen font-bold text-3xl'>Loading...</p>}
        </>
    );
};

export default HandlePage;
