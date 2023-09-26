'use client'


import React,{useState, useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from 'react-toastify'
import { BASE_URL } from '@/lib/constant'
import {  clerkClient } from '@clerk/nextjs';

export default function AddPost() {
  const baseUrl = BASE_URL
 // const [authEmail, setAuthEmail] = useState(session?.user?.email) 
  const [postData, setPostData] = useState({
    title:"",
    content:""  
   })

  useEffect(()=>{
    const user = 'fgfgfgfd'
    //setAuthEmail(user)
  },[postData])
  
// reset form data after successfully creating a user
 function resetForm(){
        setPostData({ 
            title:"",
            content:""
        });
      }
 // destructure the fields for if condition to check
 const {title, content} = postData
 const onSubmit = async(e)=>{
      e.preventDefault()   
     // if(session){
        if(title  && content )
          {
            try{   
                  const res = await fetch(`${baseUrl}/api/post`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        title: postData.title,
                        content: postData.content,
                        authorEmail: authEmail
                      })
                    });

                  if (res.status===201) {
                    resetForm();
                    toast.success("Post Created Successfully!", {
                      autoClose: 2000
                    })
                    
                    
                  } 
                  else {
                    toast.error("Something went wrong", {
                      autoClose: 2000
                    })
                  }
                } 
              catch(error) {
                    console.error('Error:', error);
              }
          }
          else{
            toast.warning("All fields required!", {
              autoClose: 2000
            })
          }
      // } 
      // else{
      //       toast.warning("Plz login first", {
      //         autoClose: 2000
      //       })
      // }
  }
      
      return (
        <div className='flex flex-col  items-center w-screen h-screen'>
          <label className='mt-8 text-xl font-inter text-gray-500'>Write your Post</label>
          {/* <div className='w-[70%] sm:w-[60%] md:w-[500px] h-[60%] border-x border-green-500 mt-6 rounded-md '>
              */}
            <form className='w-[90%] sm:w-[80%] md:w-[700px] h-[55%] border-x border-green-500 mt-6 rounded-md  flex flex-col items-center' id='regUserForm' onSubmit={onSubmit} >        
              <div className='w-[80%] min-w-[250px] mt-2'>
                <label className='block font-myFont text-green-700 text-lg '>Title: </label>
                <input  name='name'  minLength='4' maxLength='50' type="text" value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}  placeholder=" Post title" className='shadow text-sm font-inter font-light  w-full h-[35px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none ' />
              </div>

              <div className='w-[80%] min-w-[250px] mt-2'>
                <label className='block font-myFont text-green-700 text-lg '>Content: </label>
                <textarea  name='name'  minLength='20' type="text" value={postData.content} onChange={(e)=>setPostData({...postData, content: e.target.value})}  placeholder="  Write your post..." className='shadow text-sm font-inter font-light  w-full h-[220px] border border-gray-200 p-[5px] rounded-sm focus:border-teal-500 focus:outline-none ' />
              </div>

            

              <button type='submit' className='w-[70%] min-w-[250px] h-7 rounded-full mt-8 bg-gray-400 ring-2 ring-offset-2 ring-teal-500/80  text-white font-inter text-[15px] p-0'>Create Post</button>
            </form>
            
          
          <ToastContainer position='top-center' closeOnClick={true} pauseOnHover={false}/>
          
        </div>
        

      )
  
}

