

const Hero = () => {
    return (
        <div className="w-full"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="w-[90%] mx-auto py-20 flex flex-col gap-7">
                <div className="">
                    <div className="text-white">
                        <h1 className="text-[43px] leading-[5vh] font-custom">We tailor our approach to meet individual needs</h1>
                    </div>
                    <div className="text-white py-7 leading-[3vh] font-light font-custom">
                        <p>
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
                <div>
                    <div className="w-full h-[70%] bg-[#1b2048] mx-auto flex flex-col md:flex-row md:justify-between p-5 font-custom">
                        <div className="flex  justify-between md:w-[75%] mb-2">
                            <div className="text-white flex flex-col justify-center items-center my-3">
                                <h1 className="text-4xl mb-4">
                                    15+
                                </h1>
                                <p>Years of experience</p>
                            </div>
                            <div className="text-white flex flex-col justify-center items-center my-3">
                                <h1 className="text-4xl mb-4">
                                    98%
                                </h1>
                                <p>Success rate</p>
                            </div>
                            <div className="text-white flex flex-col justify-center items-center my-3">
                                <h1 className="text-4xl mb-4">
                                    84k
                                </h1>
                                <p>Clients worldwide</p>
                            </div>
                        </div>
                        <div className="text-white flex flex-col justify-center items-center my-3">
                            <h1 className="text-4xl mb-4">
                                28
                            </h1>
                            <p>Awards & honors</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero