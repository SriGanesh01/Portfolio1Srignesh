import React from 'react';
import PropTypes from 'prop-types';

function ProjectEach({ title, description, imageUrl, link }) {
    return (
        <div className="bg-[#beff3333] rounded-lg py-2 px-2 mx-5 my-7 inline-block min-w-[300px] max-w-[450px] h-[550px]">
            <div className="bg-[#1F3337] p-3 rounded-lg shadow-lg w-full h-full flex flex-col border-2 border-[#a3a35d] text-[#d4d4c8]">
                <div className="text-2xl font-bold mb-2 min-h-20 bg-transparent">
                    {title}
                </div>
                <div 
                    className="w-full h-[220px] bg-gray-500 mt-6 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${imageUrl || 'default-image-url.jpg'})` }}
                ></div>
                <div className="flex-grow mt-5 bg-transparent ">
                    {description}
                </div>
                <div className="flex justify-end mt-auto bg-transparent">
                    <a href={link} className="text-[#FAFF00] hover:text-yellow-700 self-end bg-transparent" target='_blank'>
                        See More
                    </a>
                </div>
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
