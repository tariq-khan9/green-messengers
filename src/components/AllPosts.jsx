'use client'
import Link from "next/link"
import { useState, useEffect} from "react";
import axios from "axios";
import Pagination from "./Pagination";



export default function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading]=  useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)
     // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  
    const fetchPosts= async()=>{
      setLoading(true)
      const res = await axios.get('https://green-messengers.vercel.app/api/post')
      if(res.status===401){
        console.log("401 happned")
        return null
      }
      setPosts(res.data)
        setLoading(false)
    }
  
    useEffect(() => {
      fetchPosts()
    }, [])

    const filterPosts = (searchtext) => {
      const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
      return posts.filter(
        (item) =>
          regex.test(item.title) ||
          regex.test(item.content) ||
          regex.test(item.authorEmail)
      );
    };

    const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value);
        
        setSearchedResults(searchResult);
        console.log(searchedResults)
      }, 500)
    );
    };
     
    //getting current posts only
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
     //change page number
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

 if(loading){
  return <div className="flex flex-col items-center"> 
          <h1 className="p-12 m-24 text-lg font-myFont italic text-slate-700 ">Loading...</h1> 
         </div>
 }

  return (
    <>
  <div>
      <div className='flex justify-center py-4'>
          <input onChange={handleSearchChange} name="search" className='w-1/2 sm:2/5 max-w-[450px] drop-shadow-xl border-2 border-gray-200 p-[5px] rounded-md focus:border-amber-600 focus:outline-none' placeholder=' Search by author, title or content of the post.'/>
      </div>

      {searchText? 
        <>
         
            {searchedResults.length?
             searchedResults.map((post)=> (
              <div className='p-6 pl-8 grid md:grid-cols-2 xl:grid-cols-3 justify-center bg-opacity-5 '>
             <div key={post.id} className='w-[380px] mb-4  bg-stone-400  justify-center p-4 m-2 border border-gray-400 rounded-lg bg-opacity-30 '>
                <h1 className='mb-6 text-xl flex justify-center '>{post.title}</h1>
                <p className='text-justify'>{post.content.substring(0,250)}...</p>
                <button   className='text-amber-700 hover:text-amber-600'> <Link href={`/posts/${post._id}`}>Read More</Link></button>
                
                   <h1 className='mt-6'><span className='text-amber-700'>Author:</span> {post.authorEmail}</h1>
                  <h1 className='text-amber-700' >Date: {post.date.substring(0,10)}</h1>
                
             </div>
             </div> 
             ))
             :
            
              <div className="text-amber-600 mt-6 font-semibold italic text-xl text-center">No post found!</div>
             
          }
          
        </>
        :
        <div>
              <div className='p-6 pl-8 grid md:grid-cols-2 xl:grid-cols-3 justify-center bg-opacity-5 '>
                {currentPosts.map((post)=> (
                <div key={post.id} className='w-[380px] mb-4  bg-stone-400  justify-center p-4 m-2 border border-gray-400 rounded-lg bg-opacity-30 '>
                    <h1 className='mb-6 text-xl flex justify-center '>{post.title}</h1>
                    
                    <p className='text-justify '>{post.content.substring(0,250)}...</p>
                    <button   className='text-amber-700 font-semibold hover:text-amber-600'> <Link href={`/posts/${post._id}`}>Read More</Link></button>
                    
                    <h3 className='mt-6 text-gray-600'><span className='text-amber-700'>Author:</span> {post.authorEmail}</h3>
                     <h3 className="text-gray-600" ><span className='text-amber-700'>Date: </span>{post.date.substring(0,10)}</h3>
                </div>
                ) )}
              </div> 
              <div className="flex justify-center mb-4 font-bold text-gray-600">
                <Pagination loading={loading} currentPage={currentPage} setCurrentPage={setCurrentPage}  postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
              </div>
        </div> 
      }   
  </div> 
  </>
  )
  
}