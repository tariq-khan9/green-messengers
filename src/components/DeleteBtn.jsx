'use client'
import React from 'react'
import {HiOutlineTrash} from "react-icons/hi"
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from 'react-toastify'
import { useRouter } from 'next/navigation'
import { BASE_URL } from '@/lib/constant'


const DeleteBtn = ({id}) => {
  const baseUrl = BASE_URL
 const router = useRouter()
 const deletePost = async() => {
   const confirmed = confirm("Are you sure to delete?");
   if(confirmed){
   const res =  await fetch(`${baseUrl}/api/post?id=${id}`, {
        method: "DELETE",
    });

    if(res.status===200){
      toast.success("Post Deleted Successfully!", {
        autoClose: 1500
      })
      router.refresh()
    }
    if(res.status===503){
      toast.error("Something went wrong! check your connection", {
        autoClose: 1500
      })
    }

   }
 }   
  return (<>
    <button className='text-red-600 text-lg ml-24 mt-4'  onClick={deletePost}>
      <HiOutlineTrash size={24}/>
    </button>
    <ToastContainer position='top-center' closeOnClick={true} pauseOnHover={false}/>
    </>

  )
}

export default DeleteBtn