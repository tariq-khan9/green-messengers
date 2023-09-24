


import Link from 'next/link'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { UserButton, auth } from '@clerk/nextjs';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCaretDown } from '@fortawesome/free-solid-svg-icons'




export const Navbar = () => {
  const {userId, EmailAddress} = auth();
  
  // function handleProfileBtn (){
  //   if(profileBtn==='visible'){
  //     setProfileBtn('invisible')
  //   }
  //   else{
  //     setProfileBtn('visible')
  //   }
  // }

  
  return (
    <div className='bg-gradient-to-r from-teal-200 via-gray-200 to-teal-200  w-full h-14 flex  flex-row justify-between px-12 md:px-28 mb-0'>
        <div className='w-[200px]'>
          <Link href='/' className=''><img className='rounded-full h-12 mt-2'  src="./../img/leaf-logo.png" alt="ttariq" /></Link> 
        </div>
        {/* <div className='w-[300px]  justify-center flex items-center '>
           {session? <div class="grid grid-cols-2 rounded-full border-2 border-gray-400 divide-x-4 divide-gray-400">
                        <button className='m-1 mx-4 text-gray-500  hover:text-black'><Link href='/posts/add-post'>Add Post</Link></button>
                        <button className=' text-gray-500  hover:text-black' >
                          <Link href={`/${session?.user.email}`}>My Posts</Link>
                        </button>
                        
                      </div> : <h1 className='text-gray-500 text-lg'>Login to Add Post!</h1>}
        </div> */}
        <div className='pt-3 w-[200px] flex flex-row justify-end '>           
              {/* {session? 
               <div className='flex flex-col items-end'>
                  <div className='flex flex-row items-center content-center'>                 
                    <label className='font-myFont mr-1 font-thin text-gray-500  text-xs'>{session.user?.email}</label>                     
                    <div className='cursor-pointer pt-1 text-gray-500' onClick={()=>handleProfileBtn()}>
                      <BsFillCaretDownFill size={10} color='green' />
                    </div>                   
                  </div>
                  <div className={`rounded-md border mt-2 border-gray-600 `+ (profileBtn)}>
                    <ul>
                    <li> <h1 className='font-myFont pl-4 pr-6  pt-2  hover:border-red-500 text-gray-500 text-md hover:text-green-500 cursor-pointer'>My Posts</h1></li>
                    <li><button onClick={()=>signOut()}  className='font-myFont  pl-4 pr-6  py-2  hover:border-red-500 text-gray-500 text-sm hover:text-red-500'>Sign-Out</button>
                    </li> 
                    </ul>
                  </div>

                </div>
              :  */}
              {userId?
                <div className='ml-auto'>
                <UserButton afterSignOutUrl='/' />
                </div>
               :
               <div>
                <Link className='font-myFont hover:text-black text-sm text-gray-500' href='/login'>Sign-In</Link>                 
               </div>
              }
                                      
        </div>
    </div>
  )
}
