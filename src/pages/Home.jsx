import React, { useEffect, useState } from 'react'
import bgImg from '../assets/cctv.jpg'
import fence from '../assets/fence.jpg'
import cctv from '../assets/cctv-sys.png'
// import cct from '../assets/cct.png'
import hik from '../assets/hik.png'
import smart from '../assets/smart-l.jpg'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: "CCTV Installation Services",
    text: "We provide professional CCTV installation services with top-quality equipment to secure your home and business.",
    bg: bgImg,
    img: cctv,
  },
  {
    id: 2,
    title: "Smart Home Security",
    text: "Integrate smart surveillance with mobile access and alerts for the ultimate home safety experience.",
    bg: smart,
    img: smart,
  },
  {
    id: 3,
    title: "Commercial Surveillance",
    text: "Advanced camera systems tailored for large facilities, with AI monitoring and 24/7 recording.",
    bg: fence,
    img: cctv,
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      {/* <div className='w-full flex h-[80vh]'>
        <div className='w-[70%] h-full relative' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src={cct} alt="camera" className='w-[150px] h-[150px] object-contain absolute top-[10px] left-[250px] rounded-full' />
          <div className='flex justify-center flex-col h-full px-[40px] gap-4'>
            <div className='w-[200px] h-[2px] bg-green-500 rounded-sm'></div>
            <h1 className='font-bold text-4xl'>
              CCTV Installation Services
            </h1>
            <p className='text-sm text-gray-500 text-left w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut quas illum dolores accusantium, laborum laudantium optio asperiores animi esse praesentium. laborum laudantium optio asperiores animi esse praesentium</p>
            <button className='w-fit px-2 py-1 bg-green-600 text-white cursor-pointer rounded-sm hover:bg-green-800 transition-all duration-300'>Get A Quote</button>
          </div>
        </div>
        <div className='w-[30%] h-full relative bg-green-500'>
          <div className='h-[400px] w-[400px] rounded-full bg-green-800 absolute border-white top-[8vh] -left-[180px]'>
            <img src={cctv} alt="cctv" className='object-contain w-full h-full rounded-full' />
          </div>
        </div>
      </div> */}
      <div className="w-full flex h-[80vh] overflow-hidden">
        {/* Left Side */}
        <div className="w-[70%] h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slides[current].bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </motion.div>
          </AnimatePresence>

          {/* Text Content */}
          <div className="relative z-10 flex justify-center flex-col h-full px-[40px] gap-4">
            <div className="w-[200px] h-[2px] bg-green-500 rounded-sm"></div>
            <AnimatePresence mode="wait">
              <motion.h1
                key={slides[current].title}
                className="font-bold text-4xl text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {slides[current].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={slides[current].text}
                className="text-sm text-gray-200 text-left w-[70%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slides[current].text}
              </motion.p>
            </AnimatePresence>

            <button className="w-fit px-4 py-2 bg-green-600 text-white cursor-pointer rounded-sm hover:bg-green-800 transition-all duration-300">
              Get A Quote
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[30%] h-full relative bg-green-500 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].img}
              className="h-[400px] w-[400px] rounded-full bg-green-800 border-4 border-white overflow-hidden absolute top-[8vh] -left-[200px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={slides[current].img}
                alt="cctv"
                className="object-contain w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Brands */}
      <div className='px-[40px] grid grid-cols-6 gap-3 bg-gray-50'>
        <img src={hik} alt="brand" />
        <img src={hik} alt="brand" />
        <img src={hik} alt="brand" />
        <img src={hik} alt="brand" />
        <img src={hik} alt="brand" />
        <img src={hik} alt="brand" />
      </div>
      <div className='px-[40px]'>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  )
}

export default Home