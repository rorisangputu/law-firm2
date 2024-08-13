import React from 'react'

const Trust = () => {
    return (
        <div className='w-full font-custom py-7 relative h-[70vh] flex flex-col justify-end text-white'
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className='w-[90%] mx-auto z-10 relative flex flex-col gap-3'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium'>
                    Trust is the foundation of any attorney-client
                    relationship
                </h1>
                <p className='text-md lg:text-xl font-light'>
                    We uphold the highest standards of integrity and transparency.
                    We keep our clients informed throughout the legal process,
                    empowering them with knowledge to make informed decisions.
                </p>
            </div>
        </div>
    )
}

export default Trust