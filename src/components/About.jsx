import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='text-4xl text-center my-20 font-bold'>
        About <span className='text-neutral-500'>Me</span>
      </h2>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img
              className="rounded-2xl w-48 h-48 lg:w-64 lg:h-64 object-cover" // **Change this to adjust the image size**
              src={aboutImg}
              alt='About'
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
