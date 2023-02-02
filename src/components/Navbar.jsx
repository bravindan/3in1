import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function Navbar() {
  return (
    <main className='sticky top-0 z-10'>
        <section className="mx-auto h-16 bg-sky-500 text-white shadow-lg flex items-center justify-even md:justify-between ">
        <div className=''>
        <Link to='/'><FaHome className='text-2xl ml-4'/></Link>

        </div>
        <div>
            <ul className='flex ml-4 md:m-3 py-3 justify-center items-center gap-x-4 md:gap-x-10'>

            <li className='hover:bg-sky-700 rounded-md px-4 duration-300 '>
            <Link to='/movies'>Movies</Link>
            </li>
            <li className='hover:bg-sky-700 rounded-md px-4 duration-300 '>
            <Link to='/weather'>Weather</Link>
            </li>
            <li className='hover:bg-sky-700 rounded-md px-4 duration-300 '>
            <Link to='/news'>News</Link>
            </li>
           
            </ul>
            </div>
        </section>
    </main>
  )
}
