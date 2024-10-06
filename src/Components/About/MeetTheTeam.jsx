const MeetTheTeam = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-[90%] mx-auto font-custom'>
                <div className='flex flex-col gap-3 py-5'>
                    <div className='w-full flex flex-col md:flex-row md:justify-between py-5 gap-3'>
                        <div className="flex flex-col items-center md:justify-center md:items-start gap-2">
                            <h1 className='text-3xl'>
                                Meet The Team
                            </h1>
                            <p className="text-center md:text-start">
                                We are dedicated to producing your desired outcome.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <button className="bg-blue-950 p-3 px-7 text-white">
                                See All
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-x-10'>
                            <div className='flex flex-col gap-3'>
                                <div className="w-40 h-40 md:w-80 md:h-80 overflow-hidden">
                                    <img
                                        src="https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024"
                                        alt="Theresa Webb"
                                        className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center md:items-start gap-1 py-4'>
                                    <h1 className='text-xl font-medium'>Theresa Webb</h1>
                                    <p>Founder, Advocate</p>
                                </div>
                                <p>
                                    Theresa Webb is a distinguished Advocate of the High Court with over 30 years of experience in the legal field.
                                    She has expertly navigated numerous high-profile and complex civil cases, earning her a stellar reputation among
                                    her peers. Theresa&apos;s exceptional work in labor law has been recognized with the prestigious Law Professionals Guild
                                    Award on two occasions. Beyond her legal achievements, she is a passionate advocate for women in the legal profession,
                                    using her platform to champion gender equality and empowerment.
                                    <br /><br />
                                    Driven by a commitment to excellence, Theresa founded In Law to share her innovative approach to practicing law
                                    and to mentor the next generation of talented attorneys, ensuring that the future of the legal profession is in capable hands.
                                </p>

                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-x-10 mt-10'>
                            <div className='flex flex-col gap-3'>
                                <div className="w-40 h-40 md:w-80 md:h-80 overflow-hidden">
                                    <img
                                        src="https://framerusercontent.com/images/CfuRRl1Mx0mrVMAounyyBpmaMs.jpg?scale-down-to=1024"
                                        alt="Mable Glenn"
                                        className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center md:items-start gap-1 py-4'>
                                    <h1 className='text-xl font-medium'>Mable Glenn</h1>
                                    <p>Managing Partner, Corporate Law Specialist</p>
                                </div>
                                <p>
                                    Mable Glenn is a leading expert in corporate law with over 20 years of experience.
                                    She has advised numerous multinational corporations on mergers, acquisitions, and
                                    compliance issues, earning her a reputation as one of the top corporate lawyers in the
                                    country. Mable’s strategic thinking and negotiation skills have led to groundbreaking
                                    deals that have transformed the industry.
                                    <br />
                                    <br />
                                    As the Managing Partner, Mable oversees the firm’s operations and ensures that our
                                    clients receive the highest level of legal service.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-x-10 mt-10'>
                            <div className='flex flex-col gap-3'>
                                <div className="w-40 h-40 md:w-80 md:h-80 overflow-hidden">
                                    <img
                                        src="https://framerusercontent.com/images/vGBlLkem8Mf3FiKCXU6F6w310.jpg?scale-down-to=1024"
                                        alt="Franklin Stone"
                                        className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center md:items-start gap-1 py-4'>
                                    <h1 className='text-xl font-medium'>Franklin Stone</h1>
                                    <p>Head of Litigation, Senior Partner</p>
                                </div>
                                <p>
                                    Franklin Stone is a seasoned litigator with a fierce reputation in the courtroom. With
                                    over 28 years of experience, he has successfully represented clients in high-stakes
                                    commercial disputes, criminal cases, and complex civil litigation. Franklin’s tenacity
                                    and deep understanding of the law have resulted in numerous landmark victories.
                                    <br />
                                    <br />
                                    As Head of Litigation, Franklin leads our team of litigators, ensuring that every case
                                    is meticulously prepared and aggressively argued in court.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam;
