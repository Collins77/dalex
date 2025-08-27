import React from 'react'
import cctv from '../assets/cctvee.jpg'
import biom from '../assets/biom.jpg'
import elec from '../assets/elec.jpeg'
import alarm from '../assets/alarm2.jpg'
import { Award, Camera, CircleCheckBig, Clock4, Fingerprint, Headset, Shield, Zap } from 'lucide-react'

const Services = () => {
    return (
        <div>
            <div className='bg-[#f2f7fc] sm:px-[100px] px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 items-center justify-center'>
                <p className='text-[12px] px-3 py-1 bg-[#dbebff] rounded-md text-[#2b4fba] w-fit'>Professional Security Services</p>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="sm:text-4xl text-2xl font-bold text-center">
                        Comprehensive Security{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h1>
                    <p className="text-gray-600 text-center sm:w-[60%] sm:text-normal text-sm">From advanced surveillance systems to biometric access control, we provide complete security solutions tailored to your business needs.</p>
                </div>
            </div>
            <div className='flex flex-col gap-10 sm:px-[100px] px-[40px] py-[40px] h-fit bg-white'>
                <div className='sm:flex w-full sm:h-[350px] rounded-md shadow-md'>
                    <div className='sm:w-[50%] h-full'>
                        <img src={cctv} alt="cctv" className='w-full h-full object-cover sm:rounded-l-lg rounded-t-lg' />
                    </div>
                    <div className='p-[40px] flex flex-col gap-3 sm:w-[50%]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                                <Camera color='white' />
                            </div>
                            <h1 className='font-bold text-xl'>CCTV Installation & Surveillance</h1>
                        </div>
                        <p className='text-gray-500'>Professional CCTV systems with HD cameras, remote monitoring, and cloud storage solutions.</p>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-sm'>Key Features:</h1>
                            <div className='sm:grid sm:grid-cols-2 gap-2 flex flex-col'>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    4K Ultra HD cameras
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Night vision capability
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Remote mobile access
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Cloud storage backup
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Motion detection alerts
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Professional installation
                                </p>
                            </div>
                        </div>
                        <button className='px-4 py-1 bg-blue-600 rounded-md w-fit text-white text-sm cursor-pointer hover:bg-blue-800'>Get A Quote</button>
                    </div>
                </div>
                <div className='sm:flex w-full sm:h-[350px] rounded-md shadow-md'>
                    <div className='sm:w-[50%] sm:hidden block h-full'>
                        <img src={biom} alt="cctv" className='w-full h-full object-cover sm:rounded-r-lg rounded-t-lg' />
                    </div>
                    <div className='p-[40px] flex flex-col gap-3 sm:w-[50%]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                                <Fingerprint color='white' />
                            </div>
                            <h1 className='font-bold text-xl'>Biometric Access Control</h1>
                        </div>
                        <p className='text-gray-500'>Advanced fingerprint and facial recognition systems for secure access management.</p>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-sm'>Key Features:</h1>
                            <div className='sm:grid sm:grid-cols-2 flex flex-col gap-2'>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Fingerprint scanners
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Card reader integration
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Facial recognition
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Multi-factor authentication
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Access logs & reporting
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Integration with existing systems
                                </p>
                            </div>
                        </div>
                        <button className='px-4 py-1 bg-blue-600 rounded-md w-fit text-white text-sm cursor-pointer hover:bg-blue-800'>Get A Quote</button>
                    </div>
                    <div className='w-[50%] sm:block hidden h-full'>
                        <img src={biom} alt="cctv" className='w-full h-full object-cover rounded-r-lg' />
                    </div>
                </div>
                <div className='sm:flex w-full sm:h-[350px] rounded-md shadow-md'>
                    <div className='sm:w-[50%] sm:h-full h-[50%]'>
                        <img src={elec} alt="cctv" className='w-full h-full object-cover sm:rounded-l-lg rounded-t-lg' />
                    </div>
                    <div className='p-[40px] flex flex-col gap-3 sm:w-[50%]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                                <Zap color='white' />
                            </div>
                            <h1 className='font-bold text-xl'>Electric Fence Systems</h1>
                        </div>
                        <p className='text-gray-500'>High-voltage perimeter security with intelligent monitoring and alert systems.</p>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-sm'>Key Features:</h1>
                            <div className='sm:grid sm:grid-cols-2 flex flex-col gap-2'>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    High-voltage deterrent
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Zone-based monitoring
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Weather-resistant design
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Low maintenance operation
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Integration with alarms
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Professional installation
                                </p>
                            </div>
                        </div>
                        <button className='px-4 py-1 bg-blue-600 rounded-md w-fit text-white text-sm cursor-pointer hover:bg-blue-800'>Get A Quote</button>
                    </div>
                </div>
                <div className='sm:flex w-full sm:h-[350px] h-fit rounded-md shadow-md'>
                    <div className='sm:w-[50%] sm:h-full h-[50%] sm:hidden block'>
                        <img src={alarm} alt="cctv" className='w-full h-full object-cover sm:rounded-r-lg rounded-t-lg' />
                    </div>
                    <div className='p-[40px] flex flex-col gap-3 sm:w-[50%] sm:h-full h-[50%]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500'>
                                <Shield color='white' />
                            </div>
                            <h1 className='font-bold text-xl'>Alarm & Monitoring Systems</h1>
                        </div>
                        <p className='text-gray-500'>Comprehensive alarm systems with 24/7 monitoring and emergency response.</p>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-sm'>Key Features:</h1>
                            <div className='sm:grid sm:grid-cols-2 flex flex-col gap-2'>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    24/7 monitoring service
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Instant alert notifications
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Emergency response coordination
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Mobile app control
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Backup communication
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Professional maintenance
                                </p>
                            </div>
                        </div>
                        <button className='px-4 py-1 bg-blue-600 rounded-md w-fit text-white text-sm cursor-pointer hover:bg-blue-800'>Get A Quote</button>
                    </div>
                    <div className='w-[50%] sm:block hidden h-full'>
                        <img src={alarm} alt="cctv" className='w-full h-full object-cover rounded-r-lg' />
                    </div>
                </div>
            </div>
            <div className='bg-[#f2f7fc] sm:px-[100px] px-[40px] py-[40px]'>
                <div className="w-full flex flex-col items-center justify-center gap-2 mb-[20px]">
                    <h1 className="font-bold sm:text-3xl text-xl">Why Choose Dalex Security?</h1>
                    <p className="text-gray-500 text-center sm:w-[65%]">We go beyond installation to provide comprehensive support and maintenance for all your security systems.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-6'>
                    <div className='flex flex-col gap-3 items-center justify-center p-5 shadow-md bg-white rounded-md'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md'>
                            <Clock4 color='white' />
                        </div>
                        <h1 className='font-semibold text-lg'>24/7 Support</h1>
                        <p className='text-gray-500 text-center'>Round-the-clock technical support and emergency response.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center p-5 shadow-md bg-white rounded-md'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md'>
                            <Award color='white' />
                        </div>
                        <h1 className='font-semibold text-lg'>Certified Technicians</h1>
                        <p className='text-gray-500 text-center'>All installations performed by certified security professionals.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center p-5 shadow-md bg-white rounded-md'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md'>
                            <Headset color='white' />
                        </div>
                        <h1 className='font-semibold text-lg'>Ongoing Maintenance</h1>
                        <p className='text-gray-500 text-center text-sm'>Regular system maintenance and updates to ensure optimal performance.</p>
                    </div>
                </div>
            </div>
            <div className='bg-white sm:px-[100px] px-[40px] py-[40px]'>
                <div className="w-full flex flex-col items-center justify-center gap-2 mb-[20px]">
                    <h1 className="font-bold sm:text-3xl text-xl">Our Installation Process</h1>
                    <p className="text-gray-500 text-center sm:w-[65%] sm:text-normal text-sm">From consultation to ongoing support, we ensure a smooth and professional experience.</p>
                </div>
                <div className='sm:grid sm:grid-cols-4 gap-6'>
                    <div className='flex flex-col gap-3 items-center justify-center p-5 bg-white rounded-md'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full'>
                            <h1 className='text-white font-bold text-xl'>01</h1>
                        </div>
                        <h1 className='font-semibold'>Consultation</h1>
                        <p className='text-gray-500 text-center text-sm'>Free security assessment and system design consultation.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center p-5 bg-white rounded-md'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full'>
                            <h1 className='text-white font-bold text-xl'>02</h1>
                        </div>
                        <h1 className='font-semibold'>Planning</h1>
                        <p className='text-gray-500 text-center text-sm'>Custom system design and detailed installation planning.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center p-5 bg-white rounded-md'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full'>
                            <h1 className='text-white font-bold text-xl'>03</h1>
                        </div>
                        <h1 className='font-semibold'>Installation</h1>
                        <p className='text-gray-500 text-center text-sm'>Professional installation by certified technicians.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center p-5 bg-white rounded-md'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full'>
                            <h1 className='text-white font-bold text-xl'>04</h1>
                        </div>
                        <h1 className='font-semibold'>Support</h1>
                        <p className='text-gray-500 text-center text-sm'>Ongoing maintenance and 24/7 technical support.</p>
                    </div>
                </div>
            </div>
            <div className="sm:px-0 px-[40px] bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 py-[40px] h-[300px]">
                <div className="flex flex-col gap-3 w-full h-full items-center justify-center">
                    <h1 className="sm:text-4xl text-2xl font-bold text-white">Ready to Secure Your Business?</h1>
                    <p className="text-white text-center sm:text-normal text-sm">Get a free consultation and custom security assessment from our experts.</p>
                    <div className="sm:flex flex sm:flex-row flex-col items-center gap-3">
                        <button className="bg-white px-6 py-1 text-blue-600 rounded-md text-sm hover:bg-blue-200 cursor-pointer">
                            Get Free Quote
                        </button>
                        <button className="bg-blue-600 text-white text-sm px-6 py-1 rounded-md hover:bg-blue-800 cursor-pointer">
                            Call Us Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services