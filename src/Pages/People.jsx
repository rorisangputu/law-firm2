import React from 'react';

const People = () => {
    const teamMembers = [
        {
            name: 'Mable Glenn',
            position: 'Founder, Advocate',
            description: 'A veteran advocate with 30 years of experience, Mable has a reputation for excellence in civil law.',
        },
        {
            name: 'Theresa Webb',
            position: 'Managing Partner, Corporate Law Specialist',
            description: 'An expert in corporate law, Theresa has advised multinational corporations for over 25 years.',
        },
        {
            name: 'Franklin Stone',
            position: 'Head of Litigation, Senior Partner',
            description: 'A seasoned litigator known for landmark victories in high-stakes cases.',
        },
        {
            name: 'Amelia Rhodes',
            position: 'Senior Counsel, Family Law',
            description: 'Amelia specializes in family law and has been a trusted advocate for families for over 20 years.',
        },
        {
            name: 'Edward Knight',
            position: 'Partner, Criminal Defense',
            description: 'With 18 years of experience in criminal defense, Edward is known for his tenacious representation.',
        },
        {
            name: 'Olivia Brooks',
            position: 'Associate, Real Estate Law',
            description: 'Olivia has 10 years of experience in real estate law, handling complex transactions and disputes.',
        },
        {
            name: 'Henry Bennett',
            position: 'Senior Partner, Employment Law',
            description: 'Henry is a leading expert in employment law, dedicated to protecting workers’ rights.',
        },
        {
            name: 'Charlotte Reed',
            position: 'Partner, Intellectual Property',
            description: 'An IP specialist, Charlotte has a deep understanding of intellectual property law and innovation protection.',
        },
        {
            name: 'Samuel Green',
            position: 'Counsel, Commercial Litigation',
            description: 'Samuel has a sharp mind for commercial litigation, successfully representing clients in complex disputes.',
        },
        {
            name: 'Isabella Scott',
            position: 'Associate, Environmental Law',
            description: 'Isabella is passionate about environmental law, advocating for sustainable practices and environmental justice.',
        },
        {
            name: 'James Turner',
            position: 'Senior Associate, Tax Law',
            description: 'James has a strong background in tax law, offering strategic advice on tax planning and compliance.',
        },
        {
            name: 'Grace Morgan',
            position: 'Partner, International Law',
            description: 'Grace has extensive experience in international law, guiding clients through cross-border legal challenges.',
        },
    ];

    return (
        <div className='w-full'>
            {/* Hero Section */}
            <div className='relative w-full h-[50vh] bg-cover bg-center' style={{ backgroundImage: 'url(https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024)' }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-5xl font-bold'>People</h1>
                </div>
            </div>

            {/* Team Section */}
            <div className='w-[90%] mx-auto py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className='flex flex-col items-center text-center'>
                            <div className='w-40 h-40 md:w-80 md:h-80 overflow-hidden rounded-full'>
                                <img
                                    src='https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024'
                                    alt={member.name}
                                    className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-110'
                                />
                            </div>
                            <div className='mt-4'>
                                <h2 className='text-xl font-medium'>{member.name}</h2>
                                <p className='text-gray-600'>{member.position}</p>
                                <p className='mt-2 text-gray-500'>{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default People;
