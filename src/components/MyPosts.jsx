
import React from 'react'
import Link from 'next/link'
import DeleteBtn from './DeleteBtn'


const MyPosts = ({posts}) => {

  return (
    <div>
        {posts.length?
        posts.map((post)=> (
          <div key={post._id} className='p-6 pl-8 grid md:grid-cols-2 xl:grid-cols-3 justify-center bg-opacity-5 '>
        <div  className='w-[380px] mb-4  bg-stone-400  justify-center p-4 m-2 border border-gray-400 rounded-lg bg-opacity-30 '>
            <h1 className='mb-6 text-xl flex justify-center '>{post.title}</h1>
            <p className='text-justify'>{post.content.substring(0,250)}...</p>
            <button   className='text-amber-700 hover:text-amber-600 font-semibold'> <Link href={`/posts/${post._id}`}>Read More</Link></button>
            <div className='grid grid-cols-2 gap-12 '>
            <h1 className='mt-6'><span className='text-amber-800'>Date:</span> {post.date.getFullYear()}-{post.date.getMonth()}-{post.date.getDate()}</h1>
            <DeleteBtn id={post._id}/>
            
            </div>
            </div> 
        </div>
       ) ):
       <div className='text-center text-lg text-gray-500 italic mt-24'> No post in your log to show!
        </div>}
        </div>
      
  )
}

export default MyPosts