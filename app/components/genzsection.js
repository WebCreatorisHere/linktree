"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import 'izitoast/dist/css/iziToast.min.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Navbar from './navbar';

const genzsection = ({}) => {
    const searchparams = useSearchParams()
    const [iziToast, setiziToast] = useState(null)
    const [links, setlinks] = useState([{ link: "", text: "" }])
    const [others, setothers] = useState({ handle: searchparams?searchparams.get("handle"):"", pic: "" })
    const [teller, setteller] = useState(false)
    const [trees, setTrees] = useState([])
    const router = useRouter()
    useEffect(() => {
        const loadizitoast = async () => {
            const izitoastmodule = (await import("izitoast")).default
            setiziToast(izitoastmodule)

            
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/actions/addtree`)
            let c = await a.json()
            setTrees(c.data)
        }
        loadizitoast()

    }, [])

    function isValidImageUrl(url) {
        try {
          const parsedUrl = new URL(url); // Validate URL format
          const path = parsedUrl.pathname.toLowerCase(); // Get the path of the URL
          return true
        } catch (error) {
          return false; // Invalid URL format
        }
      }

    const submithandler = async() => {
        let a = trees.find((box)=>box.handle == others.handle)
        let atrue = isValidImageUrl(others.pic)
        if(a){
            
                showtoast("error","Error","Handle Already Exists!!")
            }
            else if(!atrue){
                
                showtoast("error","Error","Please Enter a valid URL!!")
        }
        else{setteller(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            handle: others.handle,
            pic: others.pic,
            links: JSON.stringify(links)
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/actions/addtree", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setteller(false)
                setothers({handle:"",pic:""})
                setlinks([{link:"",text:""}])
                router.push(`/${others.handle}`)
            })
            .catch((error) => console.error(error));}

    }

    const showtoast = (type, title, message) => {
        iziToast[type]({
            title: title,
            message: message,
            position: 'topRight',
            timeout: 5000,
            transitionIn: 'bounceInLeft',
            transitionOut: 'fadeOutRight',

        })
    }

    const addlink = async () => {

        showtoast('success', 'Link Added', 'Your link has been added successfully')
        setlinks([...links, { link: "", text: "" }])
    }

    const handlelinkchange = (index, text, link, e) => {
        setlinks(initiallinks => {
            return initiallinks.map((item, i) => {
                if (i == index) {
                    return { text, link }
                }
                else {
                    return item
                }
            })
        })
    }

  return (
    <main className='relative -z-20 bg-[#E9C0E9] h-screen min-h-[641px] pt-[10%]'>
        <Navbar/>
    <section className='flex -z-10 relative justify-between text-gray-900 h-[100%]'>
                <div className='col1 w-[60%] max-[1060px]:w-full p-10 max-[1060px]:p-5 flex justify-center items-center flex-col'>
                    <h1 className='font-extrabold my-8 text-3xl max-sm:text-2xl max-sm:mb-4 max-sm:mt-16'>Create your Bittree</h1>
                    <div className='flex flex-col gap-4 justify-center items-start max-[1060px]:pl-0 pl-9'>
                        <div className='item'>
                            <h1 className='font-semibold text-2xl text-start max-sm:text-xl'>Step 1: Create Your Handle</h1>
                            <div className='mx-6 max-sm:mx-0 my-2.5 '>
                                <input type="text"
                                    value={others.handle || ""}
                                    onChange={(e) => { setothers({ ...others, [e.target.name]: e.target.value }) }}
                                    placeholder='Enter your handle'
                                    className="bg-[#f6f7f5] p-4 py-2 max-sm:text-sm outline-none border rounded-full focus:outline-purple-500 focus:outline-4 outline-offset-[-1px] border-[#9a9a9a]"
                                    name='handle'
                                />
                            </div>
                        </div>

                        <div className='item'>
                            <h1 className='font-semibold text-2xl text-start  max-sm:text-xl'>Step 2: Add Links</h1>
                            {links && links.map((object, index) => {
                                return <div key={index} className='mx-6 max-sm:mx-0 my-2.5 flex flex-wrap gap-4'>
                                    <input type="text"
                                        value={object.text || ""}
                                        onChange={(e) => { handlelinkchange(index, e.target.value, object.link, e) }}
                                        placeholder='Enter you link text'
                                        className="bg-[#f6f7f5] p-4 py-2 max-sm:text-sm outline-none border rounded-full focus:outline-purple-500 focus:outline-4 outline-offset-[-1px] border-[#9a9a9a]"
                                        name='text'
                                    />
                                    <input type="text"
                                        value={object.link || ""}
                                        onChange={(e) => { handlelinkchange(index, object.text, e.target.value, e) }}
                                        placeholder='Enter you link'
                                        className="bg-[#f6f7f5] p-4 py-2 max-sm:text-sm outline-none border rounded-full focus:outline-purple-500 focus:outline-4 outline-offset-[-1px] border-[#9a9a9a]"
                                        name='link'
                                    />
                                </div>
                            })}

                            <button onClick={() => addlink()} className="mx-6 max-sm:text-sm bg-[#8129d9] disabled:bg-[#8129d9c8] text-white p-3 py-1.5 font-semibold text-sm rounded-full" type="submit">
                                + Add Link
                            </button>
                        </div>

                        <div className='item w-full'>
                            <h1 className='font-semibold text-2xl text-start max-sm:text-xl'>Step 3: Add Your Appearance</h1>
                            <div className='mx-6 max-sm:mx-0 my-2.5 flex flex-col w-full gap-4'>
                                <input type="text"
                                    placeholder='Enter URL of profile picture'
                                    value={others.pic || ""}
                                    onChange={(e) => { setothers({ ...others, [e.target.name]: e.target.value }) }}
                                    name='pic'
                                    className="bg-[#f6f7f5] p-4 py-2 max-sm:text-sm outline-none border rounded-full focus:outline-purple-500 focus:outline-4 outline-offset-[-1px] border-[#9a9a9a]"
                                />
                                <button disabled={teller || others.handle == "" || others.pic == "" || links[0].link=="" || links[0].text==""} onClick={submithandler} className="bg-[#8129d9] creator disabled:bg-[#8129d9c8] text-white p-3 py-2 font-semibold text-base max-sm:text-sm rounded-full" type="submit">
                                    Create Your BitTree
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col2 flex justify-center items-end h-full relative w-[40%] max-[1060px]:hidden overflow-hidden pt-[3.3%]'>
                    <img className='w-2/3 mb-5 rotate-1' src="images/scene.png" alt="" />
                </div>
            </section>
            </main>
           
  )
}

export default genzsection