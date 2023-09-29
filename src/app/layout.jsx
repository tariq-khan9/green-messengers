import './globals.css'
import { Inter, Roboto_Mono, Courgette} from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const mono = Roboto_Mono({subsets:['latin']})
const courget = Courgette({subsets:['latin'], weight:['400']})

export const metadata = {
  title: 'Green Messengers',
  description: 'Green World ideas sharing platform',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className='min-w-[600px] bg-gradient-radial from-lime-200 via-gray-200 to-teal-200 gradient-radial'>
        {/* <Header username='tariq'/> */}
        <div className='flex flex-col '>
              <div className='sticky top-0 '>
              <Navbar/>
              </div>
              <div className=' top-6'>
              {children}
              </div> 
          </div> 
        </body>
    </html>
    </ClerkProvider>
  )
}
