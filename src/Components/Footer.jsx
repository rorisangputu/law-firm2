import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full bg-blue-950">
            <div className="w-[90%] mx-auto flex flex-col gap-6 text-white font-custom py-10">
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Link>
                        <div className="w-32 text-center p-4 border border-white">
                            Visit us
                        </div>
                    </Link>
                    <Link>
                        <div className="w-36 text-center p-4 border border-white">
                            Stay in touch
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 :grid-cols-4 lg:flex lg:justify-between">
                        {/* Address 1 */}
                        <div className="flex flex-col gap-6 py-5">
                            <div className="border-b-2 border-white w-[8rem] pb-2">
                                <h3 className="">Johannesburg</h3>
                            </div>
                            <p className="flex flex-col gap-1 font-light">
                                <span>CommPark Suites</span>
                                <span>56 Hatthaway Street,</span>
                                <span>Rosebank, Jhb</span>
                            </p>
                        </div>
                        {/* Address 2 */}
                        <div className="flex flex-col gap-6 py-5">
                            <div className="border-b-2 border-white w-[6rem] pb-2">
                                <h3 className="">Cape Town</h3>
                            </div>
                            <p className="flex flex-col gap-1 font-light">
                                <span>Signal Hill Office Park</span>
                                <span>12 Signal Road,</span>
                                <span>Green Point, CT</span>
                            </p>
                        </div>
                        {/* Address 3 */}
                        <div className="flex flex-col gap-6 py-5">
                            <div className="border-b-2 border-white w-[4rem] pb-2">
                                <h3 className="">Durban</h3>
                            </div>
                            <p className="flex flex-col gap-1 font-light">
                                <span>Beachfront Towers</span>
                                <span>101 Marine Parade,</span>
                                <span>Durban Central, DBN</span>
                            </p>
                        </div>
                        {/* Address 4 */}
                        <div className="flex flex-col gap-6 py-5">
                            <div className="border-b-2 border-white w-[9.5rem] pb-2">
                                <h3 className="text-lg">+27 &#40;11&#41; 433 3865</h3>
                            </div>
                            <div className="border-b-2 border-white w-[9.5rem] pb-2">
                                <h3 className="text-lg">info@inlaw.co.za</h3>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-md md:text-lg">&copy; 2024 In Law. All rights reserved.</p>
                        <div className="flex gap-3 items-center">
                            <FaXTwitter className="h-5 w-5 md:h-6 md:w-6" />
                            <IoLogoFacebook className="h-6 w-6 md:h-6 md:w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
