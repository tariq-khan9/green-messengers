import AllPosts from '@/components/AllPosts'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='head'>
          <h1 className='text-center text-3xl font-extrabold font-inter  mt-0 px-12  sm:px-16 md:px-36 xl:px-48'>Discover and Share 
          <div><span className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-lime-400 to-green-800 '> Green World <br/> <span className='text-3xl font-normal tracking-widest'>Practices</span>  </span></div></h1>

          <div className='w-full flex  justify-center '>
            <h2 className=' text-base sm:text-lg sm:px-0 px-8 font-normal text-gray-400 w-[520px] lg:w-[680px] text-center'>Green Messengers is an online platform to dicover, create and share eco-friendly ideas to save our beautiful planet</h2>
          </div>
      </div>
    <AllPosts/>
    </>
  )
}
