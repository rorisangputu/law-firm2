

const People = () => {
    const teamMembers = [
        {
            name: 'Theresa Webb',
            img: "https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?scale-down-to=1024",
            position: 'Founder, Advocate',
            description: 'A veteran advocate with 30 years of experience, Mable has a reputation for excellence in civil law.',
            className: 'w-full h-full object-cover transform transition-transform duration-300 hover:scale-110'
        },
        {
            name: 'Mable Glenn',
            img: "https://framerusercontent.com/images/CfuRRl1Mx0mrVMAounyyBpmaMs.jpg?scale-down-to=1024",
            position: 'Managing Partner, Corporate Law Specialist',
            description: 'An expert in corporate law, Theresa has advised multinational corporations for over 25 years.',
        },

        {
            name: 'Franklin Stone',
            img: "https://framerusercontent.com/images/vGBlLkem8Mf3FiKCXU6F6w310.jpg?scale-down-to=1024",
            position: 'Head of Litigation, Senior Partner',
            description: 'A seasoned litigator known for landmark victories in high-stakes cases.',
        },
        {
            name: 'Amelia Rhodes',
            img: "https://framerusercontent.com/images/DX6au8vN6ShSTjQm52SIw6oWao.jpg?scale-down-to=512",
            position: 'Senior Counsel, Family Law',
            description: 'Amelia specializes in family law and has been a trusted advocate for families for over 20 years.',
        },
        {
            name: 'Edward Knight',
            img: "https://framerusercontent.com/images/vZW3QExeafY8ogiiWnlsg3Z00.jpg?scale-down-to=1024",
            position: 'Partner, Criminal Defense',
            description: 'With 18 years of experience in criminal defense, Edward is known for his tenacious representation.',
        },
        {
            name: 'Olivia Brooks',
            img: "https://framerusercontent.com/images/wrDvvAgBcAhWhgtZYz5Z7p4Cz0.jpg?scale-down-to=1024",
            position: 'Associate, Real Estate Law',
            description: 'Olivia has 10 years of experience in real estate law, handling complex transactions and disputes.',
        },
        {
            name: 'Henry Bennett',
            img: "https://framerusercontent.com/images/9W6cJpv13e1fpHL46F81vh714.jpg?scale-down-to=1024",
            position: 'Senior Partner, Employment Law',
            description: 'Henry is a leading expert in employment law, dedicated to protecting workers’ rights.',
        },
        {
            name: 'Charlotte Reed',
            img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            position: 'Partner, Intellectual Property',
            description: 'An IP specialist, Charlotte has a deep understanding of intellectual property law and innovation protection.',
        },
        {
            name: 'Samuel Green',
            img: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            position: 'Counsel, Commercial Litigation',
            description: 'Samuel has a sharp mind for commercial litigation, successfully representing clients in complex disputes.',
        }
    ];

    return (
        <div className='w-full'>
            {/* Hero Section */}
            <div className='w-full h-[50vh] bg-cover bg-center'
                style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
                }}>

                <div className='flex justify-center items-center h-full font-custom'>
                    <h1 className='text-white text-5xl font-bold'>People</h1>
                </div>
            </div>

            {/* Team Section */}
            <div className='w-[90%] mx-auto py-10 font-custom'>
                <div className="py-10 flex flex-col items-center ">
                    <h1 className='text-3xl md:text-5xl font-light'>
                        Our People
                    </h1>
                    <p className="p-5">Our team is a diverse group of highly skilled professionals, each bringing unique
                        expertise and a deep commitment to excellence. <br /> <br />From seasoned advocates with decades
                        of experience to innovative specialists in emerging fields, our people are united by
                        their dedication to delivering exceptional legal services. Their strong character,
                        integrity, and relentless pursuit of justice make them not only adept at handling
                        complex legal matters but also trusted advisors to our clients.
                    </p>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className='flex flex-col items-center text-center'>
                            <div className='w-40 h-40 md:w-80 md:h-80 overflow-hidden border border-black '>
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className={member.className ? member.className : 'w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-110'}
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
