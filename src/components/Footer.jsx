import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0f172a]'>
      <div className='w-full sm:px-[100px] px-[40px] pt-[60px] pb-[40px] border-b border-gray-800'>
        <div className='sm:grid sm:grid-cols-4 gap-6 flex flex-col'>
          <div className='flex flex-col gap-3'>
            <div className="flex gap-2 items-center">
              <div className="h-[38px] w-[38px] bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center rounded-xl">
                <Shield color="white" size={"22px"} />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-white">Dalex Security</h1>
                <p className="text-gray-500 text-[12px]">Experts</p>
              </div>
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Protecting what matters most with cutting-edge security solutions and expert installation services since 2019.</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <Phone color='#0092b9' size={16} />
                <p className='text-gray-500 text-sm'>+254712345678</p>
              </div>
              <div className='flex items-center gap-2'>
                <Mail color='#0092b9' size={16} />
                <p className='text-gray-500 text-sm'>info@dalex.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin color='#0092b9' size={16} />
                <p className='text-gray-500 text-sm'>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Our Services</h1>
            <ul className='text-gray-500 text-sm flex flex-col gap-3'>
              <li>
                <a href="" className='hover:text-[#0092b9]'>CCTV Installation</a>
              </li>
              <li>
                <a href="" className='hover:text-[#0092b9]'>Biometric Access Control</a>
              </li>
              <li>
                <a href="" className='hover:text-[#0092b9]'>Electric Fence Systems</a>
              </li>
              <li>
                <a href="" className='hover:text-[#0092b9]'>Alarm & Monitoring</a>
              </li>
              <li>
                <a href="" className='hover:text-[#0092b9]'>Security Consultation</a>
              </li>
              <li>
                <a href="" className='hover:text-[#0092b9]'>System Maintenance</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Quick Links</h1>
            <ul className='text-gray-500 text-sm flex flex-col gap-3'>
              <li>
                <a href="about" className='hover:text-[#0092b9]'>About Us</a>
              </li>
              <li>
                <a href="services" className='hover:text-[#0092b9]'>Our Services</a>
              </li>
              <li>
                <a href="shop" className='hover:text-[#0092b9]'>Shop</a>
              </li>
              <li>
                <a href="contact" className='hover:text-[#0092b9]'>Contact</a>
              </li>
              <li>
                <a href="" className='hover:text-[#0092b9]'>Support</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Stay Connected</h1>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 text-sm'>Follow us for security tips and industry updates.</p>
              <div className='flex gap-3 items-center'>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                  <Facebook className='text-gray-500 hover:text-white' />
                </div>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                  <Instagram className='text-gray-500 hover:text-white' />
                </div>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                  <Twitter className='text-gray-500 hover:text-white' />
                </div>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                  <Linkedin className='text-gray-500 hover:text-white' />
                </div>
              </div>
              <div className='border border-red-600 rounded-md bg-red-600/20 p-3 mt-4 flex flex-col gap-2'>
                <h1 className='font-bold text-sm text-red-600'>24/7 Emergency Support</h1>
                <p className='text-sm text-gray-500'>For urgent security issues, call our emergency hotline:</p>
                <h1 className='font-bold text-sm text-white'>+254712345678</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:px-[100px] px-[40px] py-[20px] flex items-center justify-between border-b border-gray-800'>
        <p className='sm:text-sm text-gray-500 text-[10px]'>&copy; 2025 Dalex Security Experts. All rights reserved.</p>
        <div className='flex items-center gap-3'>
          <a href="policy" className='text-gray-500 hover:text-[#0092b9] sm:text-sm text-[10px]'>Privacy Policy</a>
          <a href="terms" className='text-gray-500 hover:text-[#0092b9] sm:text-sm text-[10px]'>Terms of Service</a>
        </div>
      </div>
      <div className='sm:px-[100px] px-[40px] py-[10px] bg-[#020617] flex items-center justify-center gap-4' >
        <p className='flex text-[12px] text-gray-500 items-center gap-1'>
          <Shield size={12} />
          ISO 27001 Certified
        </p>
        <p className='sm:text-[12px] text-[10px] text-gray-500'>Licensed Security Contractor</p>
        <p className='sm:text-[12px] text-[10px] text-gray-500'>Bonded & Insured</p>
        <p className='sm:text-[12px] text-[10px] text-gray-500'>BBB A+ Rating</p>
        <p className='sm:text-[12px] text-[10px] text-gray-500'>CCTV Specialist Certified</p>
      </div>
    </div>
  )
}

export default Footer