import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare, FaAngular } from "react-icons/fa";
import { SiDjango, SiLaravel, SiBootstrap } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="text-4xl my-16 text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* React */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        
        {/* Python */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-5xl text-yellow-500" />
        </div>
        
        {/* Java */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-5xl text-red-600" />
        </div>
        
        {/* PHP */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className="text-5xl text-purple-600" />
        </div>
        
        {/* Laravel */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLaravel className="text-5xl text-red-600" />
        </div>
        
        {/* Bootstrap */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBootstrap className="text-5xl text-primary-600" />
        </div>
        
        {/* Django */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDjango className="text-5xl text-green-500" />
        </div>
        
        {/* HTML */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-5xl text-orange-500" />
        </div>
        
        {/* CSS */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-5xl text-blue-500" />
        </div>
        
        {/* JavaScript */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-5xl text-yellow-500" />
        </div>

        {/* AngularJS */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAngular className="text-5xl text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
