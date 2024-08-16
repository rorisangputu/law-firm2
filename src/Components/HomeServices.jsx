import { FaUserInjured } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { MdRealEstateAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeServices = () => {
    return (
        <div className='w-full font-custom'>
            <div className='w-[90%] mx-auto py-10 flex flex-col  gap-7'>
                <div>
                    <div>
                        <h1 className='text-4xl'>
                            Servcies
                        </h1>
                        <p className='my-5'>
                            We prioritize our clients&apos; needs, understanding that each case is unique
                        </p>
                    </div>
                    <Link to={'/services'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <button className="font-custom bg-blue-100 p-4">
                            Explore All
                        </button>
                    </Link>

                </div>
                <div className='flex flex-col lg:flex-row gap-5 lg:gap-8'>
                    <div className='w-full relative p-5 h-[40vh] flex flex-col justify-end text-white'
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className='z-10 relative flex flex-col gap-3'>
                            <div className='h-12 w-12 md:h-16  md:w-16 bg-blue-100 rounded-full flex justify-center items-center'>
                                <FaUserInjured className="h-6 w-6 md:h-8  md:w-8 text-blue-950" />
                            </div>
                            <h1 className='text-xl md:text-3xl'>
                                Personal Injury
                            </h1>
                            <p className="text-sm md:text-base">
                                We are dedicated to providing exceptional legal services with expertise,
                                and a personalized approach
                            </p>
                            <div className='font-light'>
                                <p className='hover:underline'>Learn More</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full relative p-5 h-[40vh] flex flex-col justify-end text-white'
                        style={{
                            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664367173144-7e854e199524?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
                        <div className='z-10 relative flex flex-col gap-3'>
                            <div className='h-12 w-12 md:h-16  md:w-16 bg-blue-100 rounded-full flex justify-center items-center'>
                                <MdFamilyRestroom className="h-6 w-6 md:h-8  md:w-8 text-blue-950" />
                            </div>
                            <h1 className='text-xl md:text-3xl'>
                                Family Law Advocacy
                            </h1>
                            <p className="text-sm md:text-base">
                                We are dedicated to providing exceptional legal services with expertise,
                                and a personalized approach
                            </p>
                            <div className='font-light'>
                                <p className='hover:underline'>Learn More</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full relative p-5 h-[40vh] flex flex-col justify-end text-white'
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className='z-10 relative flex flex-col gap-3'>
                            <div className='h-12 w-12 md:h-16  md:w-16 bg-blue-100 rounded-full flex justify-center items-center'>
                                <MdRealEstateAgent className="h-6 w-6 md:h-8  md:w-8 text-blue-950" />
                            </div>
                            <h1 className='text-xl md:text-3xl'>
                                Real Estate Transactions
                            </h1>
                            <p className="text-sm md:text-base">
                                We are dedicated to providing exceptional legal services with expertise,
                                and a personalized approach
                            </p>
                            <div className='font-light'>
                                <p className='hover:underline'>Learn More</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HomeServices