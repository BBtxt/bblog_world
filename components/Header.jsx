import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [{name: 'React', slug: "react"}, {name: "webDev", slug: "webDev"}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8 '>
        <div className='border-b w-full inline-block border-violet-400 py-8'>
            <div className=' md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-stone-800'>
                        BBLOG WORLD
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
               
                        <span className='md:float-right mt-2 align-middle text-stone-800 ml-4 font-semibold '>
                        [Gallery: 🚧UNDER CONSTRUCTION🚧]
                        </span>
                  
            </div>
        </div>
    </div>
  )
}

export default Header
