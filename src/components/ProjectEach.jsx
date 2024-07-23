import React from 'react';
import PropTypes from 'prop-types';

function ProjectEach({ title, description, imageUrl, link }) {
    return (
        <div className='bg-[#beff3333] rounded-lg py-2 px-2 mx-2 '>
            <div className="bg-[#1F3337] p-3 rounded-lg shadow-lg" style={{ border: '2px solid #a3a35d', color: '#d4d4c8' }}>
                <div className="text-2xl font-bold mb-2 bg-transparent text-[#d4d4c8]">
                    {title}
                </div>
                <div className="w-full h-[165px] bg-gray-500 mb-4" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="mb-4 bg-transparent text-[#d4d4c8] ">
                    {description}
                </div>
                <a href={link} className="text-yellow-500 bg-transparent hover:text-yellow-700 cursor-pointer" style={{ color: '#e7e714' }}>
                    See More
                </a>
            </div>
        </div>
    );
}

ProjectEach.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    link: PropTypes.string
};

ProjectEach.defaultProps = {
    title: 'Terminal Emulator Project Showcase',
    description: 'This project showcases a terminal-like project developed in Unity. It provides a comprehensive guide on how to use the interface, highlighting its features and functionalities.',
    imageUrl: '',
    link: '#'
};

export default ProjectEach;
