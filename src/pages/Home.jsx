import { Camera, CircleCheckBig, Fingerprint, Shield, Star, Zap } from "lucide-react"
import cctv from '../assets/cctvee.jpg'

const Home = () => {


  return (
    <div className=''>
      <div className="flex justify-between w-full items-center h-[80vh] bg-[#dbeafd] px-[100px]">
        <div className="flex flex-col w-[50%] gap-3">
          <p className="text-[12px] border border-gray-400 w-fit px-2 py-0.5 rounded-md">Trusted Security Experts</p>
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-bold">
              Protecting What{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>
            <p className="text-gray-600">Advanced security solutions tailored for your business. From CCTV surveillance to biometric access control, we provide comprehensive protection you can trust.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white cursor-pointer px-6 py-1 rounded-md text-sm hover:bg-blue-800 transition-all duration-300">Get a Quote</button>
            <button className="bg-white text-blue-600 text-sm border border-blue-400 px-6 py-1 rounded-md cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-300">Shop Now</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex gap-2 items-center bg-white px-2 py-1 rounded-md">
              <CircleCheckBig color="green" size={12} />
              <p className="text-[12px] text-gray-500">ISO 27001 Certified</p>
            </div>
            <div className="flex gap-2 items-center bg-white px-2 py-1 rounded-md">
              <CircleCheckBig color="green" size={12} />
              <p className="text-[12px] text-gray-500">Support</p>
            </div>
            <div className="flex gap-2 items-center bg-white px-2 py-1 rounded-md">
              <CircleCheckBig color="green" size={12} />
              <p className="text-[12px] text-gray-500">5+ Years Experience</p>
            </div>
            <div className="flex gap-2 items-center bg-white px-2 py-1 rounded-md">
              <CircleCheckBig color="green" size={12} />
              <p className="text-[12px] text-gray-500">500+ Installations</p>
            </div>

          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="relative w-[420px] h-[300px] bg-gradient-to-r from-cyan-100 via-blue-200 to-indigo-200 rounded-md transform rotate-2">
            {/* Inner wrapper to counter the rotation */}
            <div className="absolute inset-0 flex items-center justify-center transform -rotate-2">
              <img
                src={cctv}
                alt="Security"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[100px] bg-white py-[40px]">
        <div className="w-full flex flex-col items-center justify-center gap-2 mb-[20px]">
          <h1 className="font-bold text-4xl">Comprehensive Security Solutions</h1>
          <p className="text-lg text-gray-500 text-center w-[65%]">Protect your business with our cutting-edge security technologies and expert installation services.</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
              <Camera color="white" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="font-semibold">CCTV Installation</h1>
              <p className="text-center text-sm text-gray-600">Professional surveillance systems with HD cameras and remote monitoring capabilities.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
              <Fingerprint color="white" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="font-semibold">Biometric Access</h1>
              <p className="text-center text-sm text-gray-600">Advanced fingerprint and facial recognition systems for secure access control.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
              <Zap color="white" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="font-semibold">Electric Fences</h1>
              <p className="text-center text-sm text-gray-600">High-voltage perimeter security solutions with intelligent monitoring systems.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6 items-center justify-center shadow-lg rounded-md">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md">
              <Shield color="white" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="font-semibold">Alarm Systems</h1>
              <p className="text-center text-sm text-gray-600">Smart alarm systems with 24/7 monitoring and instant emergency response.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[100px] bg-[#eef9ff] py-[40px]">
        <div className="w-full flex flex-col items-center justify-center gap-2 mb-[20px]">
          <h1 className="font-bold text-4xl">What Our Clients Say</h1>
          <p className="text-lg text-gray-500 text-center w-[65%]">Trusted by businesses across the region.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
            </div>
            <div>
              <p className="italic text-sm">"Dalex Security transformed our office security. Their team is professional and the systems work flawlessly."</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Sarah Johnson</h1>
              <p className="text-[12px] text-gray-500">TechCorp Inc.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
            </div>
            <div>
              <p className="italic text-sm">"Excellent CCTV installation service. The cameras provide crystal clear footage and remote access is seamless."</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Michael Chen</h1>
              <p className="text-[12px] text-gray-500">Retail Solutions</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
              <Star fill="gold" color="gold" size={14} />
            </div>
            <div>
              <p className="italic text-sm">"Their biometric access control system has greatly improved our facility security. Highly recommended!"</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Emma Davis</h1>
              <p className="text-[12px] text-gray-500">Manufacturing Co.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 py-[40px] h-[300px]">
        <div className="flex flex-col gap-3 w-full h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Ready to Secure Your Business?</h1>
          <p className="text-white ">Get a free consultation and custom security assessment from our experts.</p>
          <div className="flex items-center gap-3">
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

export default Home