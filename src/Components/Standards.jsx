import Accordian from "./Accordian"


const Standards = () => {
    return (
        <div className="w-full bg-blue-200">
            <div className="w-[90%] mx-auto py-4 font-custom flex flex-col md:flex-row items-center">
                <div className="py-5 flex flex-col gap-8">
                    <h1 className="text-4xl">Highest standards</h1>
                    <p className="leading-[3vh] md:w-[70%]">
                        Our team of seasoned attorneys
                        is committed to delivering tailored solutions,
                        ensuring you receive the attention and representation you deserve.
                    </p>
                </div>
                {/* Accordian */}
                <div>
                    <Accordian />
                </div>
            </div>
        </div>
    )
}

export default Standards