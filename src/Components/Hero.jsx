import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="w-full h-full md:h-[95vh] flex items-center justify-center pt-16"
            style={{
                backgroundImage: 'url("https://images.pexels.com/photos/8112201/pexels-photo-8112201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="w-[90%] h-full mx-auto py-10 md:py-20 flex flex-col gap-10 justify-center">
                <div className="w-full md:w-[70%] lg:w-[60%] flex flex-col gap-5 md:gap-8 font-custom">
                    <div className="text-white">
                        <h1 className="text-[30px] sm:text-[43px] md:text-[48px] lg:text-[55px] lg:font-semibold leading-[5vh] md:leading-[7vh]">
                            We tailor our approach to meet individual needs
                        </h1>
                    </div>
                    <div className="text-white font-light  ">
                        <p className="leading-[2.5vh] sm:leading-[3vh] md:leading-[4vh] text-sm md:text-lg">
                            Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the attention and representation you deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to={'/contacts'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <button className=" bg-blue-100 border-blue-100 p-2 md:p-4">
                                Book Consultation
                            </button>
                        </Link>
                        <Link to={'/services'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <button className=" text-slate-200 border border-slate-200 p-2 md:p-4">
                                Explore More
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="w-full  h-[20vh] bg-[#1b2048] flex flex-col md:flex-row justify-center p-5 font-custom">
                    <div className="flex justify-between md:w-[65%] xl:w-[90%] gap-5">
                        <div className="flex flex-col justify-center items-center text-white my-4">
                            <h1 className="text-3xl md:text-5xl lg:text-5xl mb-2">
                                15+
                            </h1>
                            <p className="text-center text-[12px] md:text-base">Years of experience</p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-white my-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">
                                98%
                            </h1>
                            <p className="text-center text-[12px] md:text-base">Success rate</p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-white md:mr-10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">
                                28
                            </h1>
                            <p className="text-center text-[12px] md:text-base">Awards & honors</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;
