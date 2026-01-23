import React, { useState } from 'react';

const Projects = ({ searchTerm }) => {
    const [projects] = useState([
        { id: 1, name: 'Project 1', description: 'Description of Project 1' },
        { id: 2, name: 'Project 2', description: 'Description of Project 2' },
        { id: 3, name: 'Project 3', description: 'Description of Project 3' },
    ]);

    // Filter projects based on searchTerm
    const filteredProjects = projects.filter(project => 
        project.name.toLowerCase().includes((searchTerm || '').toLowerCase())
    );

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <li key={project.id}>
                            <button onClick={() => console.log(`Project clicked: ${project.name}`)}>
                                {project.name}
                            </button>
                        </li>
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </ul>
        </div>
    );
};

export default Projects;