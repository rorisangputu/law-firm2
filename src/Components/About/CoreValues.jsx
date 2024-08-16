import React from 'react';
import AccordionAbout from './AccordionAbout';

const CoreValues = () => {
    return (
        <div className='w-full bg-blue-100'>
            <div className='w-[90%] mx-auto font-custom text-black py-10'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl md:text-4xl'>Our Core Values</h1>
                        <p>
                            Guided by our fundamental principles, we embrace a set of core values
                            that shape our decisions and actions, ensuring we deliver the highest
                            level of service to our clients.
                        </p>
                    </div>
                    <div>
                        <AccordionAbout />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
