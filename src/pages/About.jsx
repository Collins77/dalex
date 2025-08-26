import React from 'react'
import about from '../assets/corp.jpeg'
import { Shield, Target, Users, Zap } from 'lucide-react'
import team from '../assets/team.jpg'

const About = () => {
    return (
        <div className=''>
            <div className='px-[100px] py-[40px] bg-[#f2f7fc] h-[80vh] flex items-center gap-6'>
                <div className='w-[50%] flex flex-col gap-4'>
                    <p className='text-[12px] px-3 py-1 bg-[#dbebff] rounded-md text-[#2b4fba] w-fit'>About Dalex Security</p>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">
                            Protecting Businesses Since{" "}
                            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                                2019
                            </span>
                        </h1>
                        <p className="text-gray-600">Founded on the principle that every business deserves enterprise-level security, Dalex Security Experts has grown from a small local company to a trusted security partner for businesses across the region.</p>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img src={about} alt="about" className='w-[420px] h-[300px] rounded-md object-cover' />
                </div>
            </div>
            <div className='bg-white px-[100px] py-[40px] grid grid-cols-4 gap-6'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-3xl bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent'>500+</h1>
                    <p className='text-gray-500'>Security Installations</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-3xl bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent'>5+</h1>
                    <p className='text-gray-500'>Years of Experience</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-3xl bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent'>24/7</h1>
                    <p className='text-gray-500'>Monitoring Support</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-3xl bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent'>99.9%</h1>
                    <p className='text-gray-500'>System Uptime</p>
                </div>
            </div>
            <div className='px-[100px] py-[40px] bg-[#f2f7fc] flex items-center flex-col gap-5'>
                <h1 className='font-bold text-4xl'>Our Mission</h1>
                <p className='text-gray-500 text-center w-[68%]'>To provide businesses with cutting-edge security solutions that protect their most valuable assets - their people, property, and data. We believe that every organization, regardless of size, deserves access to professional-grade security systems backed by expert support and reliable service.</p>
                <div className='w-[70px] h-[70px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full'>
                    <Shield color='white' />
                </div>
            </div>
            <div className="px-[100px] bg-white py-[40px]">
                <div className="w-full flex flex-col items-center justify-center gap-2 mb-[20px]">
                    <h1 className="font-bold text-4xl">Our Values</h1>
                    <p className="text-lg text-gray-500 text-center w-[65%]">These core principles guide everything we do and ensure we deliver the highest quality security solutions.</p>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
                            <Shield color="white" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="font-semibold">Trust & Reliability</h1>
                            <p className="text-center text-sm text-gray-600">We build lasting relationships through consistent, dependable service and transparent communication.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
                            <Target color="white" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="font-semibold">Excellence</h1>
                            <p className="text-center text-sm text-gray-600">We strive for perfection in every installation and continuously improve our security solutions.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
                            <Zap color="white" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="font-semibold">Customer-Centric</h1>
                            <p className="text-center text-sm text-gray-600">Your security needs drive everything we do. We customize solutions to fit your specific requirements.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
                            <Shield color="white" />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="font-semibold">Innovation</h1>
                            <p className="text-center text-sm text-gray-600">We stay ahead of security threats by adopting the latest technologies and best practices.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f2f7fc] px-[100px] py-[40px]'>
                <div className="w-full flex flex-col items-center justify-center gap-2 mb-[60px]">
                    <h1 className="font-bold text-4xl">Meet Our Team</h1>
                    <p className="text-lg text-gray-500 text-center w-[65%]">Our experienced professionals are dedicated to providing you with the best security solutions and support.</p>
                </div>
                <div className='w-full h-[350px] rounded-lg mb-[40px]'>
                    <img src={team} alt="team" className='w-full h-full rounded-lg object-cover' />
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='flex flex-col gap-3 justify-center items-center p-4 bg-white shadow-md rounded-md'>
                        <div className='w-[60px] h-[60px] rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center'>
                            <Users color='white' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-semibold'>Alex Rodriguez</h1>
                            <p className='text-sm text-blue-600'>CEO & Founder</p>
                        </div>
                        <p className='text-gray-500 text-[12px] text-center'>Former security consultant with 15+ years experience in enterprise security solutions.</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center p-4 bg-white shadow-md rounded-md'>
                        <div className='w-[60px] h-[60px] rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center'>
                            <Users color='white' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-semibold'>Alex Rodriguez</h1>
                            <p className='text-sm text-blue-600'>CEO & Founder</p>
                        </div>
                        <p className='text-gray-500 text-[12px] text-center'>Former security consultant with 15+ years experience in enterprise security solutions.</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center p-4 bg-white shadow-md rounded-md'>
                        <div className='w-[60px] h-[60px] rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center'>
                            <Users color='white' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-semibold'>Alex Rodriguez</h1>
                            <p className='text-sm text-blue-600'>CEO & Founder</p>
                        </div>
                        <p className='text-gray-500 text-[12px] text-center'>Former security consultant with 15+ years experience in enterprise security solutions.</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center p-4 bg-white shadow-md rounded-md'>
                        <div className='w-[60px] h-[60px] rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center'>
                            <Users color='white' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-semibold'>Alex Rodriguez</h1>
                            <p className='text-sm text-blue-600'>CEO & Founder</p>
                        </div>
                        <p className='text-gray-500 text-[12px] text-center'>Former security consultant with 15+ years experience in enterprise security solutions.</p>
                    </div>
                </div>
            </div>
            <div className='px-[220px] py-[40px] bg-white flex flex-col items-center justify-center gap-6'>
                <h1 className='text-4xl font-bold'>Our Story</h1>
                <div className='flex flex-col gap-5 text-gray-500 text-justify'>
                    <p>Dalex Security Experts was born out of a simple observation: small and medium businesses were being underserved by traditional security companies that focused only on large enterprise clients. Our founder, Alex Rodriguez, saw an opportunity to bring enterprise-level security solutions to businesses of all sizes.</p>
                    <p>Starting with just two technicians and a vision, we began installing our first CCTV systems in 2019. Word spread quickly about our attention to detail, competitive pricing, and exceptional customer service. Within our first year, we had completed over 50 installations and built a reputation for reliability.</p>
                    <p>Today, we've expanded our services to include biometric access control, electric fencing, alarm systems, and comprehensive security consulting. Our team has grown to include certified technicians, security consultants, and customer support specialists who share our commitment to protecting what matters most to our clients.</p>
                    <p>As we look to the future, we remain committed to our founding principles: providing cutting-edge security technology, exceptional installation quality, and ongoing support that gives our clients peace of mind. Whether you're a small retail store or a large manufacturing facility, we have the expertise and technology to keep you secure.</p>
                </div>
            </div>
        </div>
    )
}

export default About