import { Link } from "react-router-dom";

const Integrity = () => {
    return (
        <div className="w-full py-12">
            <div className="w-[90%] mx-auto py-10 font-custom flex flex-col md:flex-row gap-5 items-center">
                <div className="flex flex-col h-1/2 w-full md:h-[60vh] xl:h-[42vh] md:w-1/2 gap-5 sm:gap-2 lg:gap-5 md:justify-center">
                    <div className="w-[85%] lg:w-[75%]">
                        <h1 className="text-3xl leading-[5vh] lg:text-4xl">We uphold the highest standards of integrity.</h1>
                    </div>
                    <div className="py-4 md:py-1 xl:py-4">
                        <p className="leading-[3vh] lg:text-xl">
                            We prioritize our clients&apos; needs, understanding that each case is unique. Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the attention and representation you deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link to={'/contacts'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <button className=" bg-blue-100 p-2 md:p-4">
                                Book Consultation
                            </button>
                        </Link>
                        <Link to={'/about'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                            <button className="font-custom text-black p-2 md:p-4">
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-full w-full md:h-[42vh] md:w-1/2 flex justify-center items-center">
                    <img className="h-full object-cover object-right" src="https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Integrity