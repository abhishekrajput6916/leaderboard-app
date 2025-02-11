import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdOutlineEmail } from "react-icons/md";

function ContactForm({ className }) {
    const [errors, setErrors] = useState({ emailError:  "Email invalid!", messageError:  "Please write a message!" });
  const [formValues, setFormValues] = useState({});

    function handleInputChange(e) {
        const { name, value } = e.target;
    
        setFormValues((old) => {
          return { ...old, [name]: value };
        });
        // console.log(formValues);
      }
    function handleFormSubmit(e) {
        e.preventDefault();
        if (!formValues.email) {
          toast.error(errors.emailError);
        }else if(!formValues.message){
          toast.error(errors.messageError);
        }else{
          toast.success("Email sent successfully!!!");
        } 
      }
    return (
        <div className={className}>
            <div className="py-8 lg:py-16 px-4 md:px-8 lg:px-12 mx-auto max-w-screen-md bg-gray-900 rounded-2xl w-full ">
                <h2 className="mb-4 text-2xl lg:text-4xl sm:text-4xl tracking-tight font-extrabold text-center text-white">Get in Touch</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">You can reach us anytime</p>
                <form action="#" className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
                    <div>
                        <label for="email" className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-300"><MdOutlineEmail />Your email</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            onChange={handleInputChange}
                            className="shadow-sm border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                            placeholder="name@mail.com"
                            required />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            for="message"
                            className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                        <textarea
                            id="message"
                            rows="4"
                            name='message'
                            onChange={handleInputChange}
                            className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Write a message..."></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center border-2 border-gray-300/50 hover:bg-slate-600  text-white focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800  ease-linear transition-all duration-150  outline-none focus:outline-none rounded-md cursor-pointer ">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm