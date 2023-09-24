
import Link from 'next/link'
import { UserButton, auth } from '@clerk/nextjs';

export const Navbar = () => {
  const {userId, EmailAddress} = auth();
  
  return (
    <div className='bg-gradient-to-r from-teal-200 via-gray-200 to-teal-200  w-full h-14 flex  flex-row justify-between px-12 md:px-28 mb-0'>
        <div className='w-[200px]'>
          <Link href='/' className=''><img className='rounded-full h-12 mt-2'  src="./../img/leaf-logo.png" alt="ttariq" /></Link> 
        </div>
              {userId?
                <div className='ml-auto mt-3'>
                <UserButton afterSignOutUrl='/' />
                </div>
               :
               <div className='mt-4'>
                <Link className='font-myFont  hover:text-black text-sm text-gray-500' href='/login'>Sign-In</Link>                 
               </div>
              }                           
    </div>
  )
}
