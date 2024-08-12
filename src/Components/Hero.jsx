const Hero = () => {
    return (
        <div className="w-full h-[85vh] flex items-center justify-center"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="w-[90%] h-full mx-auto py-10 md:py-20 flex flex-col gap-10 justify-center">
                <div className="w-full md:w-[70%] lg:w-[60%] flex flex-col gap-5 md:gap-8">
                    <div className="text-white">
                        <h1 className="text-[43px] md:text-[48px] lg:text-[55px] lg:font-semibold leading-[5vh] md:leading-[7vh] font-custom">
                            We tailor our approach to meet individual needs
                        </h1>
                    </div>
                    <div className="text-white font-light font-custom ">
                        <p className="leading-[3vh] md:leading-[4vh] md:text-lg">
                            Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the attention and representation you deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="font-custom bg-slate-200 p-4">
                            Book Consultation
                        </button>
                        <button className="font-custom text-slate-200 border border-slate-200 p-4">
                            Explore More
                        </button>
                    </div>
                </div>
                <div className="w-full  h-[25vh] bg-[#1b2048] flex flex-col md:flex-row md:justify-around p-5 font-custom">
                    <div className="flex justify-between md:w-[65%] xl:w-[60%] gap-5">
                        <div className="flex flex-col justify-center items-center text-white my-4">
                            <h1 className="text-5xl lg:text-5xl mb-2">
                                15+
                            </h1>
                            <p className="text-center">Years of experience</p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-white my-4">
                            <h1 className="text-4xl lg:text-5xl mb-2">
                                98%
                            </h1>
                            <p className="text-center">Success rate</p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-white my-4">
                            <h1 className="text-4xl lg:text-5xl mb-2">
                                84k
                            </h1>
                            <p className="text-center">Clients worldwide</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-white md:mr-10">
                        <h1 className="text-4xl lg:text-5xl mb-2">
                            28
                        </h1>
                        <p className="text-center">Awards & honors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
