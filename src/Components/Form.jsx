

const Form = () => {
    return (
        <div className='w-full bg-blue-100  h-[90vh] md:h-[60vh] lg:h-[75vh]'>
            <div className="w-[90%] mx-auto font-custom h-full flex justify-center items-center">
                <div className="h-full w-full py-20 flex flex-col justify-center gap-10 p-2">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-medium">
                            We handle a wide range of legal matters
                        </h1>
                    </div>
                    <form className="flex flex-col w-full border gap-4">
                        <span className="flex gap-4">
                            <input type="text" placeholder="Name" className="w-[50%]  p-3" />
                            <input type="text" placeholder="Email" className="w-[50%]   p-3" />
                        </span>
                        <span className="">
                            <textarea placeholder="Message" className="w-full p-3" rows={8} name="" id=""></textarea>
                        </span>
                        <button className="bg-black p-5 text-white font-medium">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form