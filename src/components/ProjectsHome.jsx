import abstract_metal_background_close_up from '../assets/abstract_metal_background_close_up.svg';
import ProjectEach from './ProjectEach';

function ProjectsHome() {
    return (
        <>
            <h1>Projects</h1>
            <ProjectEach />
            <ProjectEach
                    title="Terminal Emulator Project Showcase"
                    description="This project showcases a terminal-like project developed in Unity. It provides a comprehensive guide on how to use the interface, highlighting its features and functionalities."
                    imageUrl="https://example.com/image.jpg" // Replace with an actual image URL
                    link="https://example.com"
                />

        </>
    );
}

export default ProjectsHome;