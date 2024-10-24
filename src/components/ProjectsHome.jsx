import React from 'react';
import ProjectEach from './ProjectEach';
import PageLine1 from '../assets/PageLine1.svg';
import TerminalInnovixity1 from '../assets/TerminalInnovixity1.png';
import TerminalApp from '../assets/TerminalApp.svg';

function ProjectsHome() {
    return (
        <>
            <div className="text-white text-[50px] sm:text-[85px] lg:text-[120px] font-normal font-['Monospac821 BT'] text-center">PROJECTS</div>

            <div className="flex flex-col xl:flex-row items-center justify-center">
                <ProjectEach
                    title="Terminal Emulator Project Showcase"
                    description="This project showcases a terminal-like project developed in Unity. It provides a comprehensive guide on how to use the interface, highlighting its features and functionalities."
                    imageUrl={TerminalInnovixity1}
                    link="https://terminal.innovixity.com"
                />
                <ProjectEach
                    title="Terminal Emulator In Unity"
                    description="This Project focuses on creating a terminal-like interface with working commands. It focuses on being used as a command-line during runtime."
                    imageUrl={TerminalApp}
                    link="https://assetstore.unity.com/packages/tools/gui/terminal-for-games-289879"
                />
                <ProjectEach 
                    title="Proteficial"
                    description="This Project focuses on finding a solution to the Protein Folding Problem using AI and Machine Learning."
                    // imageUrl={TerminalApp}
                    link="https://proteficial.synnux.com"
                />
            </div>
            <a href="/projects" className='text-xl text-[#FAFF00] hover:text-yellow-700 px-7 mt-5 flex justify-end bg-transparent'>See More</a>
            <img src={PageLine1} alt="" className='pt-2 pb-2 w-full h-auto' />
        </>
    );
}

export default ProjectsHome;
