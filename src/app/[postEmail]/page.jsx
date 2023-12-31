
import React from 'react'
import connectMongoDB from '@/lib/mongodb';

import Post from '@/models/post';
import MyPosts from '@/components/MyPosts';


 async function getPosts(email) {

  connectMongoDB()
  //decode email address as some browsers encode "@" to "%40"
  const encodeEmail = decodeURIComponent(email);
  const posts = await Post.find({ authorEmail: encodeEmail})
  return {posts}
}


const page = async ({params}) => {
  const {posts} = await getPosts(params.postEmail)
 
  return (
    <div className='w-full h-screen mt-8'>
        <div className=''>
          <h3 className='text-xl text-amber-600 font-bold text-center'>All My Posts</h3>
           <MyPosts posts={posts}/>
        </div>
    </div>
  )
}

export default page