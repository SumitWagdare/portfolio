import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"] },
        { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs"] },
        { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Figma"] },
        { category: "Soft Skills", items: ["Problem Solving", "Communication", "Team Leadership", "Agile"] }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-category">{skillGroup.category}</h3>
                            <ul className="skill-list">
                                {skillGroup.items.map((item, idx) => (
                                    <li key={idx} className="skill-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
