import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form"; 

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string; 
}

function ContactMe() {
    const { 
        register, 
        handleSubmit, 
        formState: { },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:helixdeveloper1@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-6 sm:px-10 justify-evenly mx-auto items-center py-10 sm:py-20">
            {/* Heading Section */}
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl sm:text-3xl">
                Contact
            </h3>

            {/* <div className="flex flex-col space-y-8 sm:space-y-10 mt-20 sm:mt-24">
                <h4 className="text-3xl sm:text-4xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="decoration-[#0af7bc]/50 underline">Let’s Talk</span>
                </h4> */}

                {/* Contact Info Section */}
                <div className="space-y-8 sm:space-y-10">
                    {/* <div className="flex items-center space-x-4 sm:space-x-5 justify-center">
                        <PhoneIcon className="text-[#0af7bc] h-8 w-8 animate-pulse" />
                        <p className="text-xl sm:text-2xl">+8622452593</p>
                    </div> */}

                    <div className="flex items-center space-x-4 sm:space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#0af7bc] h-8 w-8 animate-pulse" />
                        <p className="text-xl sm:text-2xl">helixdeveloper1@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-4 sm:space-x-5 justify-center">
                        <MapIcon className="text-[#0af7bc] h-8 w-8 animate-pulse" />
                        <p className="text-xl sm:text-2xl">New York, New York</p>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 sm:space-y-5 w-full sm:w-[80%] mx-auto">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                        <input {...register('name')} placeholder="Name" className="contactInput w-full" type="text" />
                        <input {...register('email')} placeholder="Email" className="contactInput w-full" type="email" />
                    </div>

                    <input {...register('subject')} placeholder="Subject" className="contactInput w-full" type="text" />

                    <textarea {...register('message')} placeholder="Message" className="contactInput w-full" />

                    <button 
                        type="submit"
                        className="bg-[#0af7bc] py-4 sm:py-5 px-8 sm:px-10 rounded-md text-black font-bold text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
