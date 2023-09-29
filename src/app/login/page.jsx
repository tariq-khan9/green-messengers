'use client'
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from 'react-toastify'
import  Link  from "next/link";

export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/")
      }
      else {
        /*Investigate why the login hasn't completed */
        console.log("all field required");
      }

    } catch (err) {
      console.error("error is here", err.errors[0].longMessage)
      toast.error(err.errors[0].longMessage, {
        autoClose: 2000
      })
    }
  };

  return (
    <div>
      {/* <form className="border border-slate-500 m-8">
        <div >
          <label htmlFor="email">Email</label>
          <input className="border border-slate-500" onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
        </div>
        <button onClick={handleSubmit}>Sign In</button>
      </form> */}
      <form>
      
           <div className='flex flex-col  items-center w-screen h-screen'>
              <h3 className='mt-8 mb-4 text-xl  text-teal-600'>Login here!</h3>
             
              <div className='w-[70%] sm:w-[60%] md:w-[500px] h-[56%]  flex flex-col items-center'>
              
                 <div className='w-[70%] min-w-[250px] mt-5'>
                   <h2 className='font-semibold text-teal-600 text-sm'>Email: </h2>
                   <input typeof='email'  value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type="text" placeholder="  tariq@email" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none  ' />
                 </div>
      
                 <div className='w-[70%] min-w-[250px] mt-2'>
                   <h2 className='font-semibold text-teal-600 text-sm'>Password: </h2>
                   <input   value={password} onChange={(e)=>setPassword(e.target.value)} name='password' type="text" placeholder="  password" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none  ' />
               </div>
      
               
      
                 <button onClick={handleSubmit} className='w-[70%] min-w-[250px] h-7 rounded-full mt-8 bg-gray-400 ring-2 ring-offset-2 ring-teal-500/80  text-white font-inter text-[15px]'>Login</button>
      
                 {/* <Link className='mt-6 font-myFont text-xs sm:text-sm text-gray-600 content-start' href='/users/register'>dont have an account? <span className='text-black'>Register</span> here!</Link> */}
                 <Link className="mt-12 italic text-gray-500" href='/register'>Not Registered?  <spnan className='text-gray-600 font-semibold'>Sign Up</spnan> here!</Link>
              </div>
             
           </div>
           {/* <ToastContainer position='top-center' closeOnClick={true} pauseOnHover={false}/> */}
          
           </form>
           <ToastContainer position='top-center' closeOnClick={true} pauseOnHover={false}/>
    </div>
  );
}



