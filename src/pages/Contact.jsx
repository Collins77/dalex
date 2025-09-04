import { CircleCheckBig, Clock5, Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='bg-[#f2f7fc] sm:px-[100px] px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 items-center justify-center'>
                <p className='text-[12px] px-3 py-1 bg-[#dbebff] rounded-md text-[#2b4fba] w-fit'>Get In Touch</p>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="sm:text-4xl text-2xl font-bold text-center">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                            Our Experts
                        </span>
                    </h1>
                    <p className="text-gray-600 text-center sm:w-[60%]">Ready to secure your business? Get a free consultation and custom quote from our security professionals.</p>
                </div>
            </div>
            <div className='sm:px-[100px] px-[40px] py-[40px] bg-white sm:flex sm:flex-row flex flex-col gap-8'>
                <div className='sm:w-[50%]'>
                    <form action="" className='p-3 bg-white shadow-md rounded-md'>
                        <div className='mb-[40px] flex flex-col'>
                            <h1 className='font-bold'>Send us a Message</h1>
                            <p className='text-gray-500 text-sm'>Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mb-[20px]'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='text-sm text-gray-500'>Full Name*</label>
                                <input type="text" placeholder='Your Full Name' className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='text-sm text-gray-500'>Email Address*</label>
                                <input type="email" placeholder='your@email.com' className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='text-sm text-gray-500'>Phone Number*</label>
                                <input type="tel" placeholder='+2547.....' className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='text-sm text-gray-500'>Subject*</label>
                                <input type="text" placeholder='How can we help?' className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mb-[30px]'>
                            <label htmlFor="" className='text-sm text-gray-500'>Message*</label>
                            <textarea name="message" id="" cols={12} className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400'></textarea>
                        </div>
                        <div>
                            <button className='bg-blue-600 text-white flex gap-2 items-center py-1 w-full rounded-md justify-center text-sm'>
                                <Send size={12} />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className='sm:w-[50%]'>
                    <div className='mb-[20px]'>
                        <h1 className='font-bold sm:text-2xl text-xl'>Get in Touch</h1>
                        <p className='text-gray-500 sm:text-normal text-sm'>Our security experts are ready to help you protect your business. Contact us today for a free consultation.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='p-4 flex gap-4 bg-white shadow-lg rounded-md'>
                            <div className='w-[40px] h-[40px] bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md flex items-center justify-center'>
                                <Phone color='white' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-sm font-bold'>Phone</h1>
                                <p className='text-sm text-gray-600'>+254712253278</p>
                                <p className='text-sm text-gray-600'>+254715523751</p>
                                <p className='text-[12px] text-gray-500'>Available 24/7</p>
                            </div>
                        </div>
                        <div className='p-4 flex gap-4 bg-white shadow-lg rounded-md'>
                            <div className='w-[40px] h-[40px] bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md flex items-center justify-center'>
                                <Mail color='white' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-sm font-bold'>Email</h1>
                                <p className='text-sm text-gray-600'>info@dalexsecurity.com</p>
                                <p className='text-sm text-gray-600'>support@dalexsecurity.com</p>
                                <p className='text-[12px] text-gray-500'>We respond within 2 hours</p>
                            </div>
                        </div>
                        <div className='p-4 flex gap-4 bg-white shadow-lg rounded-md'>
                            <div className='w-[40px] h-[40px] bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md flex items-center justify-center'>
                                <MapPin color='white' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-sm font-bold'>Location</h1>
                                <p className='text-sm text-gray-600'>123 Security Boulevard</p>
                                <p className='text-sm text-gray-600'>Business District, State 12345</p>
                                <p className='text-[12px] text-gray-500'>Visit our offices</p>
                            </div>
                        </div>
                        <div className='p-4 flex gap-4 bg-white shadow-lg rounded-md'>
                            <div className='w-[40px] h-[40px] bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md flex items-center justify-center'>
                                <Clock5 color='white' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-sm font-bold'>Business Hours</h1>
                                <p className='text-sm text-gray-600'>Mon-Fri: 8:00 AM - 6:00 PM</p>
                                <p className='text-sm text-gray-600'>Sat: 9:00 AM - 4:00 PM</p>
                                <p className='text-[12px] text-gray-500'>Emergency support 24/7</p>
                            </div>
                        </div>
                        <div className='p-4 flex flex-col gap-3 bg-white shadow-lg rounded-md'>
                            <h1 className='font-bold'>Our Services</h1>
                            <div className='grid grid-cols-2 gap-2'>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    CCTV Installation
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Biometric Access Control
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Electric Fence Systems
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Alarm & Monitoring
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    Security Consultation
                                </p>
                                <p className='flex items-center gap-1 text-[12px] text-gray-500'>
                                    <CircleCheckBig color='#00bd7e' size={'12px'} />
                                    System Maintenance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f2f7fc] sm:px-[100px] px-[40px] py-[40px] flex flex-col gap-6 items-center justify-center'>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Visit our offices</h1>
                    <p className='text-gray-500 text-center sm:text-lg text-sm'>See our security equipment in action and meet our expert team.</p>
                </div>
                <div className='w-full h-[350px] rounded-lg bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center'>
                    <iframe
                        title="company-location"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.91668376312!2d36.898961374965495!3d-1.2181057987702761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTMnMDUuMiJTIDM2wrA1NCcwNS41IkU!5e0!3m2!1sen!2ske!4v1756985283676!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-md shadow"
                    ></iframe>
                </div>
            </div>
            <div className='bg-white sm:px-[200px] px-[40px] py-[40px] flex flex-col gap-6 items-center justify-center'>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Frequently Asked Questions</h1>
                    <p className='text-gray-500 text-center sm:text-lg text-sm'>Quick answers to common questions about our security services.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 shadow-lg rounded-md p-8'>
                        <h1 className='font-bold text-sm'>How long does installation typically take?</h1>
                        <p className='text-gray-500 text-sm'>Most installations are completed within 1-2 business days, depending on the system complexity and size of your facility.</p>
                    </div>
                    <div className='flex flex-col gap-3 shadow-lg rounded-md p-8'>
                        <h1 className='font-bold text-sm'>Do you offer 24/7 monitoring services?</h1>
                        <p className='text-gray-500 text-sm'>Yes, we provide 24/7 professional monitoring services with immediate emergency response coordination.</p>
                    </div>
                    <div className='flex flex-col gap-3 shadow-lg rounded-md p-8'>
                        <h1 className='font-bold text-sm'>What warranty do you provide on installations?</h1>
                        <p className='text-gray-500 text-sm'>We offer a comprehensive 2-year warranty on all installations, plus lifetime technical support.</p>
                    </div>
                    <div className='flex flex-col gap-3 shadow-lg rounded-md p-8'>
                        <h1 className='font-bold text-sm'>Can you integrate with existing security systems?</h1>
                        <p className='text-gray-500 text-sm'>Absolutely! Our experts can integrate new components with most existing security infrastructures.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 bg-red-500 sm:px-[100px] px-[40px] py-[40px] items-center justify-center'>
                <h1 className='text-white font-bold sm:text-3xl text-xl'>Emergency Support</h1>
                <p className='text-white text-center'>For security emergencies and urgent technical support, call our 24/7 hotline.</p>
                <p className='bg-white text-red-500 px-4 py-1 flex items-center justify-center text-sm rounded-md'>Call Emergency Line: +254712253278</p>
            </div>
        </div>
    )
}

export default Contact