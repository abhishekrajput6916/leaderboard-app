import React from 'react'

function ContactUs() {
  return (
    <div className="flex items-center w-full py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-teal-200 -z-10 "></div>
      {/* <div className="flex items-center justify-center text-white text-2xl font-bold absolute min-h-[40vh] bg-indigo-500 w-full top-0 bg-[url('')]">
        Contact Us
      </div> */}
      <div>
        <div>
          <h1 className="text-3xl font-medium ">Contact Us</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div>Email & phone</div>
      </div>

      <section className="bg-white dark:bg-gray-900 rounded-2xl min-w-sm">
        <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md " >
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">You can reach us anytime</p>
            <form action="#" className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>              
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs;