import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Navbar = () => {
    const { pathname } = useRouter()
 
    const [active, setActive] = useState('')
 
    //later
    useEffect(() => {
       if (pathname === '/') setActive('About')
       else if (pathname === '/projects') setActive('Projects')
       else if (pathname === '/resume') setActive('Resume')
    }, [])
    return (
        <div className='flex items-center justify-between px-5 py-3 my-3'>
           <span className='text-xl font-bold border-b-4 md:text-2xl border-green'>
              {active}
           </span>
           <div>
               asdfasdfas
           </div>
        </div>)
} 
export default Navbar
