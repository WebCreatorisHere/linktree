"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import 'izitoast/dist/css/iziToast.min.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const {data:session} = useSession()
  const router = useRouter()

  const [iziToast, setizitoast] = useState(null)
  const [emailer, setemailer] = useState("")
  useEffect(() => {
    const loadizitoast = async () => {
      const izitoastmodule = (await import("izitoast")).default
      setizitoast(izitoastmodule)
      if(!session){
        router.push('/login')
      }
      else{
        setemailer(session.user.email)
      }
    }
    loadizitoast()
  }, [])
  const onsubmit = async (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ ...data, email: emailer });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/actions/createaccount", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success == true) {
          iziToast.success({
            title: 'Success',
            message: 'Your operation was successful!',
            position: 'topRight', // You can change to 'topLeft', 'bottomRight', etc.
          })
          let allinputs = document.getElementsByClassName('lola')
          for (let index = 0; index < allinputs.length; index++) {
            const element = allinputs[index]
            element.value = ''

          }
        }
        else {
          iziToast.error({
            title: 'Error',
            message: 'Passwords do not match!',
            position: 'topRight', // You can change to 'topLeft', 'bottomRight', etc.
          });
        }
      })
      .catch((error) => {
        console.log(error)
      })

      
    }
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className='font-bold my-2 text-[42px]'>Create Your Account</h1>
      <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-4 w-[50%]'>
        <div>{errors.name && <span className="text-sm text-[#ff6b6b] font-semibold ">Please enter your Name</span>}
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your Name*"
            className="w-full lola bg-[#f6f7f5] p-4 outline-none border rounded-lg border-[#9a9a9a]"
            id="name"
          /></div>

        <div>{errors.age && <span className="text-sm text-[#ff6b6b] font-semibold ">Please enter an Valid Age</span>}
          <input
            {...register("age", { required: true })}
            type="number"
            placeholder="Enter your Age*"
            className="w-full lola bg-[#f6f7f5] p-4 outline-none border rounded-lg border-[#9a9a9a]"
            id="age"
          /></div>

        <div className='relative'> {errors.password && <span className="text-sm text-[#ff6b6b] font-semibold ">Please enter an Password</span>}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Create your Password*"
            className="w-full lola bg-[#f6f7f5] p-4 outline-none border rounded-lg border-[#9a9a9a]"
            id="password"
          />
          <img onClick={(e) => {
            if (e.target.src == `${process.env.NEXT_PUBLIC_HOST}/view.svg`) { e.target.src = `${process.env.NEXT_PUBLIC_HOST}/hide_view.svg` }
            else { e.target.src = `${process.env.NEXT_PUBLIC_HOST}/view.svg` }
            e.target.previousSibling.type = e.target.previousSibling.type === 'password' ? 'text' : 'password'
          }} width={30} className='absolute right-4 top-[25%] cursor-pointer z-50' src="hide_view.svg" alt="" /></div>

        <div className='relative'>{errors.confirmedpassword && <span className="text-sm text-[#ff6b6b] font-semibold ">Please Confirm your Password</span>}
          <input
            {...register("confirmedpassword", { required: true })}
            type="password"
            placeholder="Confirm your Password*"
            className="w-full lola bg-[#f6f7f5] p-4 outline-none border rounded-lg border-[#9a9a9a]"
            id="confirmedpassword"
          />
          <img onClick={(e) => {
            if (e.target.src == `${process.env.NEXT_PUBLIC_HOST}/view.svg`) { e.target.src = `${process.env.NEXT_PUBLIC_HOST}/hide_view.svg` }
            else { e.target.src = `${process.env.NEXT_PUBLIC_HOST}/view.svg` }
            e.target.previousSibling.type = e.target.previousSibling.type === 'password' ? 'text' : 'password'
          }} width={30} className='absolute right-4 top-[25%] cursor-pointer z-50' src="hide_view.svg" alt="" /></div>

        <button className="bg-[#8129d9] disabled:bg-[#8129d9c8] text-white p-3 font-semibold rounded-full" disabled={isSubmitting} type="submit">
          Create Your Account
        </button>
      </form>
    </section>
  )
}

export default page