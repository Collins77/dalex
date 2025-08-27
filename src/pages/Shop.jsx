import React from 'react'

const Shop = () => {
  return (
    <div className=''>
        <div className='bg-[#f2f7fc] px-[100px] py-[40px] sm:h-[70vh] h-[80vh] flex flex-col gap-5 items-center justify-center'>
                <p className='sm:text-[12px] text-[10px] px-3 py-1 bg-[#dbebff] rounded-md text-[#2b4fba] w-fit'>Page in Development</p>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="sm:text-4xl text-2xl font-bold text-center">
                        Coming{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                            Soon
                        </span>
                    </h1>
                    <p className="text-gray-600 text-center sm:w-[60%]">The affordable shop feature is still in development.</p>
                </div>
                <a href="contact" className='bg-blue-600 text-white px-4 py-1 text-center rounded-md'>Contact Us</a>
            </div>
    </div>
  )
}

export default Shop