import React from "react";
import Slider from "../components/Slider";
import { user1, user2, user3 } from "../assets/assets";

function AboutUs() {
  const testimonials = [{
    image: user1,
    text: " I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort."
  },
  {
    image: user2,
    text: " I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort."
  },
  {
    image: user3,
    text: " I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort."
  }]

  return (
    <div className="relative">
      <section className="py-8 lg:py-14 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1
            className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Control your Finances with our <span className="text-indigo-600">Smart Tool </span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">Invest intelligently and discover a better way to manage your entire wealth easily.</p>
        </div>
      </section>

      <section className="py-8 lg:py-14 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box max-w-sm mx-auto">
              <img src={user3} alt="About Us tailwind page"
                className="max-lg:mx-auto object-cover rounded-2xl" />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2
                  className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About
                  Us </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Driven by a passion for seamless user experiences, we've meticulously curated pagedone
                  to empower creators, designers, and developers alike. Our mission is to provide a
                  comprehensive toolkit,
                  enabling you to build intuitive, beautiful interfaces that resonate with users on every
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-14 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

            <div className="lg:pr-24 flex items-center">
              <div className="data w-full max-w-sm mx-auto">
                <img src={user2} alt="About Us tailwind page"
                  className="block w-full h-full lg:hidden mb-9 mx-auto object-cover" />
                <div>
                  <iframe src="" frameborder="0"></iframe>
                </div>
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">We
                  are Creative Since 2005</h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn’t just a collection of components and guidelines; it's a philosophy. We go
                  beyond aesthetics, prioritizing accessibility, scalability, and usability. Every element,
                  from the tiniest
                  detail to the grandest layout, is meticulously crafted to enhance functionality and elevate
                  user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                className="hidden lg:block object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5 flex-col ">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                  <p className="text-xs lg:text-lg text-gray-500 leading-5">Company's remarkable growth journey as we
                    continually innovate and drive towards new heights of success.</p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5 flex-col ">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                  <p className="text-xs lg:text-lg text-gray-500 leading-5">Our very talented team members are the powerhouse
                    of pagedone and pillars of our success. </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5 flex-col ">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
                  <p className="text-xs lg:text-lg text-gray-500 leading-5">We have accomplished more than 625 projects
                    worldwide and we are still counting many more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-8 lg:py-14 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">What our happy user says!</h2>
          </div>

          <Slider slides={testimonials.map(testimonial => <div className=" flex relative flex-col items-center justify-center max-w-max mx-auto lg:max-w-4xl">
            <div className="">
              <img src={testimonial.image} alt="Emily image"
                className="mx-auto size-24 transition-all duration-300 border rounded-full object-cover" />
            </div>
            <p className="text-lg text-gray-500 leading-8 my-4 text-center">{testimonial.text}</p>
          </div>)} />
        </div>
      </section>

      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="bg-gradient-to-r from-slate-900 to-slate-700  rounded-2xl p-8 xl:p-11">
          <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">Subscribe to the latest offer
          </h2>
          <p className="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">Join our community of subscribers
            and receive regular
            updates delivered straight to your inbox. It's quick, easy, and free</p>
          <div
            className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
            <input type="text" name="email"
              className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
              placeholder="Enter your email.." />
            <button
              type="submit"
              className="py-2 px-5 text-sm bg-indigo-500 shadow-md text-white font-semibold hover:bg-indigo-700 ease-linear transition-all duration-150  outline-none focus:outline-none rounded-full lg:rounded-l-none  cursor-pointer">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
