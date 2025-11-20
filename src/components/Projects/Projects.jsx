import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking.",
            tech: ["React", "Node.js", "MongoDB", "Chart.js"],
            links: { demo: "#", github: "#" }
        },
        {
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
            tech: ["TypeScript", "Next.js", "Firebase", "Tailwind"],
            links: { demo: "#", github: "#" }
        },
        {
            title: "Weather Visualization",
            description: "Interactive weather application visualizing global climate data with WebGL and predictive modeling.",
            tech: ["Vue.js", "Three.js", "OpenWeatherMap API"],
            links: { demo: "#", github: "#" }
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-links">
                                        <a href={project.links.github} className="project-link" aria-label="GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                        <a href={project.links.demo} className="project-link" aria-label="External Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    </div>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, idx) => (
                                        <li key={idx} className="project-tech-item">{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
