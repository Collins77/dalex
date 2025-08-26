import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='bg-[#f2f7fc] px-[100px] py-[40px] h-[50vh] flex flex-col gap-5 items-center justify-center'>
                <p className='text-[12px] px-3 py-1 bg-[#dbebff] rounded-md text-[#2b4fba] w-fit'>Get In Touch</p>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-4xl font-bold text-center">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                            Our Experts
                        </span>
                    </h1>
                    <p className="text-gray-600 text-center w-[60%]">Ready to secure your business? Get a free consultation and custom quote from our security professionals.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact