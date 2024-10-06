import Accordian from "./Accordian";

const Standards = () => {
    return (
        <div className="w-full py-12 xl:py-24  bg-blue-100">
            <div className="w-[90%] mx-auto my-auto font-custom flex flex-col md:flex-row items-center">
                <div className="py-5 flex flex-col gap-8 w-full md:w-3/5">
                    <h1 className="text-4xl font-medium">Highest standards</h1>
                    <p className="leading-[3vh] md:w-[70%] md:text-xl">
                        Our team of seasoned attorneys
                        is committed to delivering tailored solutions,
                        ensuring you receive the attention and representation you deserve.
                    </p>
                </div>
                {/* Accordion */}
                <div className="w-full md:w-2/5">
                    <Accordian />
                </div>
            </div>
        </div>
    );
}

export default Standards;
