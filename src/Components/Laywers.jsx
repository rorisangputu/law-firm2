

const Laywers = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto font-custom flex flex-col gap-7 py-10'>
                <div className="flex flex-col gap-5 ">
                    {/* Title and paragraph */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl md:text-4xl">
                            Lawyers specializing in diverse areas
                        </h1>
                        <p className="text-lg md:text-xl md:w-[90%] xl:w-[80%]">
                            We prioritize our clients&apos; needs, understanding that
                            each case is unique. Our team of seasoned attorneys is committed to
                            delivering tailored solutions, ensuring you receive the attention
                            and representation you deserve. Our comprehensive expertise allows
                            us to handle a wide range of legal matters effectively.
                        </p>
                    </div>
                    {/* Quotes */}
                    <div className="border-l border-l-black pl-10 flex flex-col gap-2">
                        <p className="font-medium md:text-lg md:w-[70%] xl:w-[50%]">
                            &quot; Our attorneys are accessible, responsice, and will
                            keep you updated on the progress of your case &quot;
                        </p>
                        <p className="font-light">
                            Theresa Webb, found of In Law
                        </p>
                    </div>
                    {/* Button */}
                    <button className="font-custom bg-blue-100 p-4 w-[50%] lg:text-lg">
                        Show All Members
                    </button>
                </div>
                {/* Lawyers picture list */}
                <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7">
                        {/* Lawyer 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 overflow-hidden rounded-full">
                                <img
                                    src="https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024"
                                    alt="Theresa Webb"
                                    className="w-full h-full rounded-full object-cover transform transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="text-center mt-2">
                                <h1 className="text-lg font-semibold">Theresa Webb</h1>
                                <p className="text-md text-gray-500">Founder</p>
                            </div>
                        </div>

                        {/* Lawyer 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 overflow-hidden rounded-full">
                                <img
                                    src="https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024"
                                    alt="Theresa Webb"
                                    className="w-full h-full rounded-full object-cover transform transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="text-center mt-2">
                                <h1 className="text-lg font-semibold">Lawyer 2</h1>
                                <p className="text-md text-gray-500">Position</p>
                            </div>
                        </div>

                        {/* Lawyer 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 overflow-hidden rounded-full">
                                <img
                                    src="https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024"
                                    alt="Theresa Webb"
                                    className="w-full h-full rounded-full object-cover transform transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="text-center mt-2">
                                <h1 className="text-lg font-semibold">Lawyer 3</h1>
                                <p className="text-md text-gray-500">Position</p>
                            </div>
                        </div>

                        {/* Lawyer 4 */}
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 overflow-hidden rounded-full">
                                <img
                                    src="https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024"
                                    alt="Theresa Webb"
                                    className="w-full h-full rounded-full object-cover transform transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="text-center mt-2">
                                <h1 className="text-lg font-semibold">Lawyer 4</h1>
                                <p className="text-md text-gray-500">Position</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Laywers