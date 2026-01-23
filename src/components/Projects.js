import React, { useState } from 'react';

const Projects = () => {
    // Sample projects data
    const [projects] = useState([
        { id: 1, name: 'Project 1', description: 'Description of Project 1' },
        { id: 2, name: 'Project 2', description: 'Description of Project 2' },
        { id: 3, name: 'Project 3', description: 'Description of Project 3' },
    ]);

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <button onClick={() => setSelectedProject(project)}>
                            {project.name}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedProject && (
                <div>
                    <h3>{selectedProject.name}</h3>
                    <p>{selectedProject.description}</p>
                    <button onClick={() => setSelectedProject(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Projects;