import PracticeAreas from '../Components/Services/PracticeAreas'
import FAQAccordion from '../Components/Services/FAQAccordion'
import { GoArrowRight } from "react-icons/go";
import ServiceForm from '../Components/Services/ServiceForm';
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <div className='w-full'>
            {/* Hero */}
            <div className='w-full h-[50vh] bg-cover bg-center'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>

                <div className='flex justify-center items-center h-full font-custom'>
                    <h1 className='text-white text-5xl lg:text-[90px] font-bold shadow-xl'>Services</h1>
                </div>
            </div>
            {/* Services Section */}
            <div className='w-[90%] mx-auto'>
                <div className='py-10 flex flex-col gap-4'>
                    <h1 className='text-3xl md:text-5xl'>
                        Our Services
                    </h1>
                    <p className='leading-[4vh] md:leading-[3vh] md:w-[90%] md:text-xl'>
                        Our firm represents leading banks, Fortune JSE listed companies, and global enterprises,
                        handling high-profile mergers, complex corporate transactions, and significant
                        civil claims. We also provide expert legal counsel in environmental law, ensuring
                        compliance and sustainability for major projects. <br /> <br />Headquartered in Johannesburg,
                        we serve clients from across the globe, offering unmatched expertise in South African law.
                    </p>
                </div>
                <div className='flex flex-col gap-3 py-3 items-center'>
                    <PracticeAreas />
                </div>

                <div className='p-5 flex flex-col lg:flex-row-reverse lg:items-center gap-5 py-10'>
                    <div className='lg:w-1/2'>
                        <img src="https://images.pexels.com/photos/4427626/pexels-photo-4427626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='flex flex-col gap-4 lg:w-1/2'>
                        <h1 className='text-4xl md:text-[60px] leading-[6vh]'><span className='font-light'>Compassionate & Experienced </span><i className='font-serif text-blue-900'>Legal Team</i></h1>
                        <p className='leading-[4vh] md:leading-[3vh]'>
                            Our law firm brings together 57 years of combined experience in handling a wide
                            range of personal injury cases across South Africa, with a particular focus on
                            Gauteng and the Johannesburg area. We specialize in serious and catastrophic
                            injuries that often arise from accidents, ensuring that our clients receive the
                            justice and compensation they deserve.
                            <br /> <br />
                            Our extensive experience and dedication to serious injury cases are reflected in
                            our impressive track record of successful settlements. Our attorneys have been
                            involved in landmark cases, securing substantial settlements for our clients.
                            One of our notable achievements includes representing victims in a multi-million
                            rand settlement following a major industrial accident.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col bg-blue-900 text-white p-5 items-center gap-7 py-12 mb-10'>
                    <div className='text-3xl text-center md:text-start'>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className=' flex flex-col md:flex-row items-center gap-4'>
                        <div className='flex flex-col items-center md:items-start '>
                            <div className='flex flex-col items-center text-center md:items-start md:text-start gap-5'>
                                <h3 className='text-xl'>Legal questions? We&apos;ll take it from here. Contact our top-rated attorneys</h3>
                                <Link to={'/contacts'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <div className='flex gap-5 bg-white p-3 text-blue-900'>
                                        <button className='font-medium'>
                                            LETS WORK TOGETHER
                                        </button>
                                        <GoArrowRight className='h-6 w-6' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <FAQAccordion />
                    </div>
                </div>
                <div>
                    <ServiceForm />
                </div>
            </div>
        </div>
    )
}

export default Services