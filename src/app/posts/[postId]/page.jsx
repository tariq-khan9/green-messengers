
import React from 'react'
import connectMongoDB from '@/lib/mongodb';
import Post from '@/models/post';
import SinglePost from '@/components/SinglePost';


 export  async function getPost(id) {
    connectMongoDB()
  const post = await Post.findOne({_id: id })
  return {post}
}


const page = async ({params}) => {
  const {post} = await getPost(params.postId)
 
  return (
   
        <SinglePost post={post}/>
    
  )
}

export default page