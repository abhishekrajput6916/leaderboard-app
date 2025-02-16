import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Map from '../components/Map';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';


function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 xl:gap-2 justify-center md:px-8 px-2 w-full py-8 pb-16 xl:pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-teal-200 -z-10 "></div>
      {/* <div className="flex items-center justify-center text-white text-2xl font-bold absolute min-h-[40vh] bg-indigo-500 w-full top-0 bg-[url('')]">
        Contact Us
      </div> */}
      <div className='flex flex-col gap-4 max-w-md w-11/12 xl:max-w-xl xl:mx-8'>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">Contact Us</h1>
          <p className='lg:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <Link to={'#'} target="blank"  className='font-semibold w-fit flex gap-2 lg:text-xl items-center'><MdOutlineEmail className='text-lg lg:text-2xl' /><u className='mb-1 cursor-pointer hover:text-slate-500' onClick={() => window.location = 'mailto:abhishekrajput9111606916@gmail.com'}>abc@gmail.com</u></Link>
          <Link to={'tel:+1234567890'} className='font-semibold  w-fit flex gap-2 items-center lg:text-xl'><IoCallOutline className='text-lg lg:text-2xl' /><u className='mb-1 cursor-pointer hover:text-slate-500'>+91 99999 99999</u></Link>
        </div>
        <div className='w-full rounded-2xl overflow-hidden border border-gray-400'>
          <Map className={"h-64 xl:h-80 w-full object-cover object-left-top relative"} />
        </div>
      </div>

        <ContactForm className='flex items-center justify-center w-full lg:px-4 px-4' />
    </div>
  )
}

export default ContactUs;