import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='min-h-screen bg-zinc-950 text-gray-200 flex flex-col'>
   <Navbar/>
   <main className='grow'>
    <div className='max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <Outlet/>
    </div>

   </main>
   <Footer/>
    </div>
  )
}

export default RootLayout