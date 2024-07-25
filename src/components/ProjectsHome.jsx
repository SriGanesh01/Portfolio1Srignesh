import React from 'react';
import ProjectEach from './ProjectEach';
import PageLine1 from '../assets/PageLine1.svg';

function ProjectsHome() {
    return (
        <>
            <div className="text-white text-[50px] font-normal font-['Monospac821 BT'] text-center">PROJECTS</div>

            <div className="flex flex-col items-center justify-center">
                <ProjectEach />
                <ProjectEach
                    title="Terminal Emulator Project Showcase"
                    description="This project showcases a terminal-like project developed in Unity. It provides a comprehensive guide on how to use the interface, highlighting its features and functionalities."
                    imageUrl="https://example.com/image.jpg"
                    link="https://example.com"
                />
                <ProjectEach
                    title="Project Title A"
                    description="This is a description of Project A. It is a project that does something. It is a project that does something. It is a project that does something."
                />
            </div>
            <a href="#" className='text-xl text-[#FAFF00] hover:text-yellow-700 px-7 mt-5 flex justify-end bg-transparent'>See More</a>
            <img src={PageLine1} alt="" className='pt-2 pb-2 w-full h-auto' />
        </>
    );
}

export default ProjectsHome;
