

const ServiceForm = () => {
    return (
        <div className='w-full bg-gray-100  h-[90vh] md:h-[60vh] lg:h-[75vh] mb-10'>
            <div className="w-[90%] mx-auto font-custom h-full flex justify-center items-center">
                <div className="h-full w-full py-20 flex flex-col md:flex-row items-center justify-center gap-10 p-2">
                    <div className="md:w-1/2">
                        <h1 className="text-3xl md:text-5xl font-light">
                            Request A Consultation
                        </h1>
                        <p className="font-serif text-2xl md:text-4xl text-blue-900 italic">In 24 Hours Or Less</p>
                    </div>
                    <form className="flex flex-col w-full  border gap-4 md:w-1/2">
                        <span className="flex gap-4">
                            <input type="text" placeholder="Name" className="w-[50%]  p-3" />
                            <input type="text" placeholder="Email" className="w-[50%]   p-3" />
                        </span>
                        <span className="">
                            <textarea placeholder="Message" className="w-full p-3" rows={8} name="" id=""></textarea>
                        </span>
                        <button className="bg-black p-5 text-white font-medium ">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ServiceForm