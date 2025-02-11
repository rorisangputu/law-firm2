
import { Link } from "react-router-dom";
const HomeConsult = () => {
    return (
        <div className='w-full py-16 lg:py-24'>
            <div className='w-[90%] mx-auto font-custom flex flex-col lg:flex-row gap-7'>
                <div className='lg:w-1/2 flex '>
                    <div className='h-full flex flex-col gap-7 md:justify-center md:items-start'>
                        <h1 className='text-3xl font-medium leading-[5vh] md:text-start lg:text-4xl'>
                            Your rights matter, we are here to defend them
                        </h1>
                        <p className='leading-[3vh] md:text-start lg:text-xl'>
                            We prioritize our clients&apos; needs, understanding that each case is unique. Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the attention and representation you deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
                        </p>
                        <Link to={'/contacts'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <button className="font-custom bg-blue-100 p-4 lg:text-lg">
                                Get a free consultation
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-6 lg:w-1/2'>
                    <div className='flex bg-blue-100 p-5 h-[19vh] mr-5 '>
                        <div className='flex flex-col gap-3 justify-center'>
                            <div className='flex w-full justify-between items-center'>
                                <h1 className='text-xl md:text-3xl font-medium'>
                                    Initial consultation
                                </h1>
                                <p>01</p>
                            </div>
                            <p>
                                Our comprehensive expertise allows us to handle a wide range of legal matters
                                effectively
                            </p>
                        </div>
                    </div>
                    <div className='flex bg-blue-950 md:p-5 h-[19vh] ml-5 text-white'>
                        <div className='flex flex-col gap-3 justify-center w-[90%] mx-auto'>
                            <div className='flex w-full justify-between items-center'>
                                <h1 className='text-xl md:text-3xl font-medium'>
                                    Tailored legal strategy
                                </h1>
                                <p>02</p>
                            </div>
                            <p className='text-sm md:text-base'>
                                Our comprehensive expertise allows us to handle a wide range of legal matters
                                effectively
                            </p>
                        </div>
                    </div>
                    <div className='flex bg-blue-100 p-5 h-[19vh] mr-5 '>
                        <div className='flex flex-col gap-3 justify-center'>
                            <div className='flex w-full justify-between items-center'>
                                <h1 className='text-lg md:text-3xl font-medium'>
                                    Dedicated representation
                                </h1>
                                <p>03</p>
                            </div>
                            <p>
                                Our comprehensive expertise allows us to handle a wide range of legal matters
                                effectively
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeConsult