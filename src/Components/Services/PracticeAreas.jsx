import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const PracticeAreas = () => {
    const practiceAreas = [
        {
            title: 'Corporate Law',
            description: 'Providing strategic counsel on corporate governance, mergers and acquisitions, and business restructuring.',
            details: 'We assist businesses in navigating complex corporate transactions, ensuring compliance with regulations, and protecting their interests during mergers and acquisitions.',
            image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Litigation & Dispute Resolution',
            description: 'Resolving disputes through litigation, arbitration, and mediation.',
            details: 'Our experienced litigators represent clients in court, arbitration, and mediation, handling everything from contract disputes to high-stakes commercial litigation.',
            image: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Environmental Law',
            description: 'Advising on compliance, sustainability, and environmental impact assessments.',
            details: 'We guide businesses through environmental regulations, assist with sustainability initiatives, and manage environmental impact assessments to ensure compliance.',
            image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Real Estate Law',
            description: 'Handling property transactions, development, and leasing.',
            details: 'Our team provides legal support for property acquisitions, development projects, leasing agreements, and real estate financing, ensuring smooth transactions.',
            image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Banking & Finance',
            description: 'Advising on regulatory compliance, financing, and financial transactions.',
            details: 'We provide legal counsel to banks and corporations on financial regulations, loan agreements, and complex financial transactions, ensuring all operations are legally sound.',
            image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Civil Litigation',
            description: 'Representing clients in civil disputes, including personal injury and contract cases.',
            details: 'Our civil litigation team handles a wide range of cases, from personal injury claims to complex contract disputes, providing aggressive representation to achieve the best outcomes.',
            image: 'https://images.pexels.com/photos/613508/pexels-photo-613508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];

    return (
        <div className='w-full bg-gray-100 py-10'>
            <div className='w-[90%] mx-auto font-custom'>
                <h1 className='text-4xl font-bold text-center mb-10'>Our Practice Areas</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {practiceAreas.map((area, index) => (
                        <div key={index} className='p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-full h-40 mb-4'>
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h2 className='text-2xl font-semibold mb-2'>{area.title}</h2>
                            <p className='text-gray-600 mb-4'>{area.description}</p>
                            <p className='text-gray-700'>{area.details}</p>
                        </div>
                    ))}
                </div>

                <Link to={'/contacts'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className='flex text-white bg-blue-950 p-3 mt-10 w-[100%] lg:w-[20%] gap-5 items-center justify-center'>
                        <button className='font-medium'>
                            CONTACT US TODAY
                        </button>
                        <GoArrowRight className='h-6 w-6' />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default PracticeAreas;
