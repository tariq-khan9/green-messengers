'use client'
import React, {useEffect} from 'react'

const SinglePost = ({post}) => {

    useEffect(() => {
            window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

  return (
    <div className='w-full h-screen mt-12 overflow-hidden'>
        <div className=' px-32'>
           <h1 className='text-gray-500 text-2xl mb-4'>{post.title}</h1> 
           <p className='text-lg text-gray-800 text-justify'>{post.content}</p>
        </div>
    </div>
  )
}

export default SinglePost