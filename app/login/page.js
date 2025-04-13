"use client";
import React, { useEffect ,useState} from "react";
import { signIn ,getCsrfToken} from "next-auth/react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
   
    const router = useRouter();
    const [csrfToken, setCsrfToken] = useState("")
    const [iziToast, setizitoast] = useState(null)
    const [completed, setcompleted] = useState(false)
    
    const {data:session} = useSession()

    useEffect(() => { 
      const fetchCsrfToken = async () => {
      const token = await getCsrfToken();
      setCsrfToken(token);
    }
    
    fetchCsrfToken();
        document.title = "Login - Get Me a Chai"
        if (session && !completed) {
            router.push("/createaccount");
        }
        if(session && completed){
          router.push("/generate")
        }
   }, [ session])
   useEffect(() => {
    const loadizitoast = async () => {
      const izitoastmodule = (await import("izitoast")).default
      setizitoast(izitoastmodule)
      
    }
    loadizitoast()
   }, [])
   
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
  let a = await signIn("credentials", {
      email: data.email,
      password: data.password,
      csrfToken,
      redirect: false,
    }).then((response)=>{
      if (response.ok) {
        router.push("/generate");
        return true
      }
      else{
        iziToast.error({
          title: "Error",
          message: "Invalid Email or Password",
          position:"topRight"
        })
        return false
      }
    })
    setcompleted(a)
  }

  const handleProviderSignIn = async (provider) => {
    const response = await signIn(provider);
    if (response.ok) {
      router.push("/createaccount");
    }
  };
  return (
    <main className="flex">
      <div className="w-1/2 p-10 max-[450px]:p-5 max-[950px]:w-full">
      <div className="flex font-semibold text-[28px] leading-9 justify-between items-center"><div className="flex items-center"><p>Bittree</p> <img className="" width={22} src="greenlogo.svg" alt="" /></div>
      <div><Link prefetch={true} href={"/"} className=' p-4 max-[900px]:p-3 max-[450px]:text-base max-[900px]:px-4 px-6 hover:bg-[#00000016] bg-[#eff0ec] text-[#1e2330] rounded-lg font-medium text-lg'>Home</Link></div></div>
     <div className="flex items-center flex-col gap-4 py-10 mt-16">
      <h1 className="font-extrabold max-[950px]:text-[36px] max-[950px]:leading-[36px] max-[450px]:text-[30px] tracking-tight max-[450px]:leading-[30px] text-[42px] leading-9 text-black">Sign Up or Log In</h1> 
      <p className="text-[#676b5f] font-normal max-[450px]:text-sm">Welcome! Welcome! Welcome!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-[450px]:px-0 gap-4 px-10">
        <div className="flex flex-col">
        {errors.email && <span className="text-sm text-[#ff6b6b] font-semibold ">Please enter an email</span>}
        
        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="Enter your Email*"
          className="bg-[#f6f7f5] p-4 outline-none border rounded-lg border-[#9a9a9a]"
        id="email"
        />
        </div>
        <div className="flex flex-col">
          {errors.password && <span className="text-sm text-[#ff6b6b] font-semibold ">Please enter an Password</span>}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Enter your Password*"
          className="bg-[#f6f7f5] p-4 outline-none border rounded-lg border-[#9a9a9a]"
        />
        </div>
          <button className="bg-[#8129d9] disabled:bg-[#8129d9c8] text-white p-3 font-semibold rounded-full" disabled={isSubmitting} type="submit">
          Sign In
        </button>
      </form>
      <p className="text-[#676b5f] font-normal text-center my-4">OR</p>
      <div className="flex flex-col gap-3 px-10  max-[450px]:px-0">
      <button
        onClick={() => handleProviderSignIn("google")}
        type="button"
        className="text-black bg-[white] justify-center hover:bg-[#f6f7f5] border font-bold rounded-full items-center hover:border-[#f6f7f5] px-5 py-2.5 text-center inline-flex dark:focus:ring-[#4285F4]/55  gap-2"
      >
        <img src="google.svg" alt="" />
        Continue with Google
      </button>
      <button
        onClick={() =>handleProviderSignIn("github")}
        type="button"
        className="text-white bg-[#24292F] justify-center hover:bg-[#24292F]/90 font-bold rounded-full gap-1 px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
        Continue with Github
      </button>

</div>
      </div>

      <div className="w-1/2 relative overflow-hidden max-[950px]:hidden"><img className="absolute translate-y-[-20%]" src="images/banner.png" alt="" /></div>
    </main>
  );
};

export default Login;
