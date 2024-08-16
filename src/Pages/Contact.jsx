import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-full bg-gray-100'>
            <div className='w-[90%] mx-auto py-10'>
                {/* Contact Form Section */}
                <div className='w-full md:h-[75vh] flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div className='md:w-1/2'>
                        <h1 className='text-3xl md:text-5xl font-light'>Contact Us</h1>
                        <p className='font-serif text-2xl md:text-4xl text-blue-900 italic'>We Want To Help You.</p>
                    </div>
                    <form className='flex flex-col w-full md:w-1/2 border p-4 gap-4'>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <input type='text' placeholder='Name' className='w-full md:w-[48%] p-3 border rounded' />
                            <input type='email' placeholder='Email' className='w-full md:w-[48%] p-3 border rounded' />
                        </div>
                        <textarea placeholder='Message' className='w-full p-3 border rounded' rows={6}></textarea>
                        <div className='flex flex-col'>
                            <label htmlFor='topic' className='text-lg font-medium'>Topic</label>
                            <select id='topic' className='p-3 border rounded'>
                                <option value='general'>Select Topic </option>
                                <option value='consultation'>Request a Consultation</option>
                                <option value='support'>Civil Claim</option>
                            </select>
                        </div>
                        <button type='submit' className='bg-black text-white p-4 rounded font-medium hover:bg-gray-800'>
                            Submit Request
                        </button>
                    </form>
                </div>

                {/* Address and Operation Times Section */}
                <div className='w-full h-full mt-10 flex flex-col md:flex-row justify-between gap-7'>
                    <div className='md:w-1/2 h-[40vh] md:h-[50vh] py-10 md:py-1 '>
                        <iframe
                            title="location-map"
                            className="w-full h-full rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581440.3240952096!2d27.6093915!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b5ef5f6e659%3A0xa7474f8f99e93a6a!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1657568213457!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-semibold mb-4'>Our Address</h2>
                        <p className='font-light'>
                            CommPark Suites, 56 Hatthaway Street,<br />
                            Rosebank, Johannesburg<br />
                            South Africa
                        </p>
                        <h2 className='text-2xl font-semibold mt-6 mb-4'>Operation Times</h2>
                        <p className='font-light'>
                            Monday - Friday: 9:00 AM - 5:00 PM<br />
                            Saturday: 10:00 AM - 2:00 PM<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
