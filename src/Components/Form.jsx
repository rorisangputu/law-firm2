

const Form = () => {
    return (
        <div className='w-full bg-blue-100 h-[70vh]'>
            <div className="w-[90%] mx-auto font-custom h-full flex justify-center items-center">
                <div className="h-full w-full py-20 flex flex-col gap-10">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-medium">
                            We handle a wide range of legal matters
                        </h1>
                    </div>
                    <form className="flex flex-col w-full border gap-4">
                        <span className="flex gap-4">
                            <input type="text" placeholder="Name" className="w-[50%]  h-11 p-2" />
                            <input type="text" placeholder="Email" className="w-[50%]  h-11 p-2" />
                        </span>
                        <span className="">
                            <textarea placeholder="Message" className="w-full p-2" rows={7} name="" id=""></textarea>
                        </span>
                        <button className="bg-black p-4 text-white font-medium">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form