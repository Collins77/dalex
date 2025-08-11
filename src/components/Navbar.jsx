import React from 'react'
import { ArrowRight, Mail, MessageSquareQuote, Phone } from "lucide-react"
import logo from "../assets/logo-dark.png"

const Navbar = () => {
  return (
    <div className='border-b border-gray-200'>
      <div className='w-full bg-green-200 h-[20px] flex items-center justify-between px-[40px] py-1'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <Mail size={12} />
            <p className='text-sm'>info@dalex.com</p>
          </div>
          <div className='flex items-center gap-1'>
            <Phone size={12} />
            <p className='text-sm'>+254712345678</p>
          </div>
        </div>
        <div className='flex gap-3 text-sm'>
          <p>Mon - Fri 8:00 AM - 9:00 PM</p>
          <a href="#" className='flex items-center gap-1 underline'>
            Contact Us
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
      <nav className='flex px-[40px] py-2 items-center justify-between bg-white'>
        <a href="/">
          <img src={logo} alt="logo" className='w-[100px] h-[50px] object-contain' />
        </a>
        <ul className='flex items-center gap-4 '>
          <li className="relative group">
            <a href="/" className='relative inline-block hover:text-green-600'>Home</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="relative group">
            <a href="/" className='relative inline-block hover:text-green-600'>About Us</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="relative group">
            <a href="/" className='relative inline-block hover:text-green-600'>Services</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="relative group">
            <a href="/" className='relative inline-block hover:text-green-600'>Shop</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="relative group">
            <a href="/" className='relative inline-block hover:text-green-600'>Contact Us</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
        <div>
          <button className='bg-green-600 cursor-pointer hover:bg-green-800 text-white capitalize flex items-center gap-2 px-3 py-1 rounded-sm transition-all duration-300'>
            Get a Free Quote
            <ArrowRight />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar