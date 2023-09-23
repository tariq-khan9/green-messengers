'use client'
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // start the sign In process.
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
        console.log(result);
      }

    } catch (err) {
      console.error("error", err.errors[0].longMessage)
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
              <label className='mt-8 mb-4 text-xl font-inter text-gray-500'>Login here!</label>
             
              <div className='w-[70%] sm:w-[60%] md:w-[500px] h-[56%] border-x border-green-400 rounded-md flex flex-col items-center'>
              
                <button className='w-[70%] min-w-[250px] h-10 bg-red-100 rounded-full mt-4  ring-2 ring-offset-2 ring-teal-500/80  text-gray-600 font-inter text-md mb-8 pb-1   focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>Login with <span className='text-xl font-medium'><span className='text-blue-500'>G</span><span className='text-red-500'>o</span><span className='text-yellow-500'>o</span><span className='text-blue-500'>g</span><span className='text-green-600'>l</span><span className='text-red-500'>e</span></span></button>
         
                <hr className='w-[40%] max-w-[400px] min-w-[250px] h-[2px] bg-gray-500'/>
                 <div className='w-[70%] min-w-[250px] mt-5'>
                   <label className='block font-myFont text-green-700 text-sm '>Email: </label>
                   <input typeof='email'  value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type="text" placeholder="  tariq@email" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none  ' />
                 </div>
      
                 <div className='w-[70%] min-w-[250px] mt-2'>
                   <label className='block text-sm font-myFont text-green-700  '>Password: </label>
                   <input   value={password} onChange={(e)=>setPassword(e.target.value)} name='password' type="text" placeholder="  password" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none  ' />
               </div>
      
               
      
                 <button onClick={handleSubmit} className='w-[70%] min-w-[250px] h-7 rounded-full mt-8 bg-gray-400 ring-2 ring-offset-2 ring-teal-500/80  text-white font-inter text-[15px]'>Login</button>
      
                 {/* <Link className='mt-6 font-myFont text-xs sm:text-sm text-gray-600 content-start' href='/users/register'>dont have an account? <span className='text-black'>Register</span> here!</Link> */}
                
              </div>
             
           </div>
           {/* <ToastContainer position='top-center' closeOnClick={true} pauseOnHover={false}/> */}
          
           </form>
    </div>
  );
}

// 'use client'
// import { useState } from "react";
// import { useSignIn } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { Link } from "next/link";

// import 'react-toastify/dist/ReactToastify.css'
// import {ToastContainer, toast} from 'react-toastify'


// export default function Login() {

//     const { isLoaded, signIn, setActive } = useSignIn();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const router = useRouter();

//  const onSubmit= async(e)=>{
  
//     e.preventDefault();
//     if (!isLoaded) {
//       return;
//     }

//         try {
//         const result = await signIn.create({
//             identifier: emailAddress,
//             password,
//         });

//         if (result.status === "complete") {
//             console.log(result);
//             await setActive({ session: result.createdSessionId });
//             router.push("/")
//         }
//         else {
//             /*Investigate why the login hasn't completed */
//             console.log(result);
//         }

//         } catch (err) {
//         console.error("error", err.errors[0].longMessage)
//         }
  
//   }
// //   if(loading){
// //     return (
// //     <div className='flex flex-col  items-center content-center w-screen h-screen'>
// //     <h1 className='mt-32 text-lg text-gray-500'>Please wait while we validate your credentials...</h1>
// //     </div>
// //     )
// //   }
// //   else{
//   return (
//     <form>
      
//     <div className='flex flex-col  items-center w-screen h-screen'>
//        <label className='mt-8 mb-4 text-xl font-inter text-gray-500'>Login here!</label>
       
//        <div className='w-[70%] sm:w-[60%] md:w-[500px] h-[56%] border-x border-green-400 rounded-md flex flex-col items-center'>
        
//          <button className='w-[70%] min-w-[250px] h-10 bg-red-100 rounded-full mt-4  ring-2 ring-offset-2 ring-teal-500/80  text-gray-600 font-inter text-md mb-8 pb-1   focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>Login with <span className='text-xl font-medium'><span className='text-blue-500'>G</span><span className='text-red-500'>o</span><span className='text-yellow-500'>o</span><span className='text-blue-500'>g</span><span className='text-green-600'>l</span><span className='text-red-500'>e</span></span></button>
   
//          <hr className='w-[40%] max-w-[400px] min-w-[250px] h-[2px] bg-gray-500'/>
//           <div className='w-[70%] min-w-[250px] mt-5'>
//             <label className='block font-myFont text-green-700 text-sm '>Email: </label>
//             <input typeof='email'  value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type="text" placeholder="  tariq@email" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none  ' />
//           </div>

//           <div className='w-[70%] min-w-[250px] mt-2'>
//             <label className='block text-sm font-myFont text-green-700  '>Password: </label>
//             <input   value={password} onChange={(e)=>setPassword(e.target.value)} name='password' type="text" placeholder="  password" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none  ' />
//           </div>

         

//           <button onClick={onSubmit} className='w-[70%] min-w-[250px] h-7 rounded-full mt-8 bg-gray-400 ring-2 ring-offset-2 ring-teal-500/80  text-white font-inter text-[15px]'>Login</button>

//           <Link className='mt-6 font-myFont text-xs sm:text-sm text-gray-600 content-start' href='/users/register'>dont have an account? <span className='text-black'>Register</span> here!</Link>
          
//        </div>
       
//     </div>
//     <ToastContainer position='top-center' closeOnClick={true} pauseOnHover={false}/>
    
//     </form>
//   )
  
// }

