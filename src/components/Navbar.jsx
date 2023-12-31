'use client'
import Link from 'next/link'
import { UserButton,  useClerk} from '@clerk/nextjs';
//import { loggedEmail } from '@/lib/context';

export const Navbar =  () => {
  const {user} = useClerk()
  
  

 //clerkCliend is used to get the complete object of User
 //const users = user ? clerkClient.users.getUser(userId) : null;
 
 
  const loggedEmail = user? user.emailAddresses[0].emailAddress : '';
  
 
 
  
 

  return (
    <div className='bg-gradient-to-r from-teal-200 via-gray-200 to-teal-200  w-full h-14 flex  flex-row justify-between px-12 md:px-28 mb-0'>
        <div className='w-[200px]'>
          <Link href='/' className=''><img className='rounded-full h-12 mt-2'  src="./../img/leaf-logo.png" alt="ttariq" /></Link> 
        </div>
        <div className='w-[370px] mt-1   flex items-center '>
           {user? <div class="grid grid-cols-2 rounded-full border-2 border-amber-600 divide-x-4 divide-amber-600">
                        <button className='m-1 mx-4 text-amber-600  hover:text-amber-500'><Link href='/posts/add-post'><h2>Add Post</h2></Link></button>
                        <button className=' text-amber-600  hover:text-amber-500' >
                          <Link href={`/${loggedEmail}`}><h2>My Posts</h2></Link>
                        </button>
                        
                      </div> : <h2 className='text-amber-600 ml-7 text-lg '>Login to add Post!</h2>}
        </div>



              {user?
                <div>
                  <div className='ml-auto mt-3'>
                  <UserButton afterSignOutUrl='/' />
                  </div>
                  
                </div>
               :
               <div className='mt-[10px]'>
                {/* <Link className='font-myFont  hover:text-black text-sm text-gray-500' href='/login'><h2>Sign-In</h2></Link>   */}
                <Link href='/login' className=''><img className='rounded-full h-10 '  src="./../img/login.png" alt="ttariq" /></Link>                
               </div>
              }                           
    </div>
  )
}
