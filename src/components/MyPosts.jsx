
import React from 'react'
import Link from 'next/link'
import DeleteBtn from './DeleteBtn'


const MyPosts = ({posts}) => {

  return (
    <div className='p-6 pl-8 grid md:grid-cols-2 xl:grid-cols-3 justify-center bg-opacity-5 '>
        {posts.map((post)=> (
        <div key={post._id} className='w-[380px] mb-4  bg-stone-400  justify-center p-4 m-2 border border-gray-400 rounded-lg bg-opacity-30 '>
            <h1 className='mb-6 text-xl flex justify-center '>{post.title}</h1>
            <p className='text-justify'>{post.content.substring(0,250)}...</p>
            <button   className='text-green-700'> <Link href={`/posts/${post._id}`}>Read More</Link></button>
            <div className='grid grid-cols-2 gap-12 '>
            <h1 className='mt-6'>Date: {post.date.getFullYear()}-{post.date.getMonth()}-{post.date.getDate()}</h1>
            <DeleteBtn id={post._id}/>
            
            </div>
        </div>
       ) )}
      </div> 
  )
}

export default MyPosts