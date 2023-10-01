'use client';
import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from 'react-toastify'

const Register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [regData, setRegData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPass:""    
   })
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const router = useRouter();

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }
    if(regData.password!==regData.confirmPass)
    {
      toast.error("Confirm Password didnt matched.", {
        autoClose: 1000
      })
      return;
    }

    try {
      
      await signUp.create({
        first_name: regData.firstName,
        last_name: regData.lastName,
        email_address: regData.email,
        password: regData.password,
      })
      

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (error) {
          toast.error("Email already taken or Password type mismatched!", {
                      autoClose: 2000
                    })
    }
  };

  // Verify User Email Code
  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== 'complete') {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push('/');
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className='w-full flex flex-col items-center'>
    <div className='w-[70%] sm:w-[60%] md:w-[500px] h-[56%] mt-4  flex flex-col items-center' >
      <h3 className='text-amber-700 font-bold text-xl my-4'>Register your crendentials</h3>
        {!pendingVerification && (
          <form className='w-full sm:w-[60%] md:w-[500px] h-[55%]   flex flex-col items-center' id='regUserForm' onSubmit={handleSubmit} >        
              <div className='w-[70%] min-w-[250px] mt-2'>
                <h2 className='font-semibold text-amber-600 text-sm '>First Name: </h2>
                <input  name='firstName' required minLength='4' maxLength='30' type="text" value={regData.firstName} onChange={(e)=>setRegData({...regData, firstName: e.target.value})}  placeholder=" first name" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none ' />
              </div>

              <div className='w-[70%] min-w-[250px] mt-2'>
                <h2 className='font-semibold text-amber-600 text-sm '>Last Name: </h2>
                <input  name='lastName' required minLength='4' maxLength='30' type="text" value={regData.lastName} onChange={(e)=>setRegData({...regData, lastName: e.target.value})}  placeholder=" last name" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none ' />
              </div>

              <div className='w-[70%] min-w-[250px] mt-3'>
                <h2 className='font-semibold text-amber-600 text-sm '>Email: </h2>
                <input  name='email' required type="email" value={regData.email} onChange={(e)=>setRegData({...regData, email: e.target.value})} placeholder="  tariq@email" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none ' />
              </div>

              <div className='w-[70%] min-w-[250px] mt-3'>
                <h2 className='font-semibold text-amber-600 text-sm '>Password: </h2>
                <input name='password'  type="text" required  title="Password should be digits (0 to 9) or alphabets (a to z)." value={regData.password} onChange={(e)=>setRegData({...regData, password: e.target.value})} placeholder="  password" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none ' />
              </div>

              <div className='w-[70%] min-w-[250px] mt-3'>
                <h2 className='font-semibold text-amber-600 text-sm '>Confirm Password: </h2>
                <input type="text" name='confirmPass' value={regData.confirmPass} onChange={(e)=>setRegData({...regData, confirmPass: e.target.value})} placeholder="  confirm your password" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none ' />
              </div>

              <button type='submit' className='w-[70%] min-w-[250px] h-8 rounded-full mt-8 bg-gray-600   text-white font-inter font-semibold text-[15px] p-1'>Register</button>
          </form>
        )}
        {pendingVerification && (
          <div className='w-full h-screen'>
            <form >
              <input
                value={code}
                className='bg-gray-50 border h-10 mt-12 border-gray-300 text-gray-900 sm:text-sm rounded-sm block w-full '
                placeholder=' Enter Verification Code...'
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                type='submit'
                onClick={onPressVerify}
                className='w-full text-white mt-6 h-8 bg-gray-600 hover:bg-blue-700 font-medium rounded-full text-sm px-5  text-center'
              >
                Verify Email
              </button>
            </form>
          </div>
        )}
      <ToastContainer position='top-center' closeOnClick={true} pauseOnHover={false}/>
    </div>
    </div>
  );
};

export default Register;