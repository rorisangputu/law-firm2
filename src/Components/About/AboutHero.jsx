import React from 'react'

const AboutHero = () => {
    return (
        <div className='w-full h-[40vh] flex flex-col items-center justify-center font-custom'
            style={{
                backgroundImage: 'url("https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className=''>
                <h1 className='text-5xl text-white font-semibold  rounded'>
                    About
                </h1>
            </div>
        </div>
    )
}

export default AboutHero
