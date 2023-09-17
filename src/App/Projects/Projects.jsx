import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectList from './projectList';
import './styles.css';

function groupByTag(projects) {
  const grouped = {};

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      if (!grouped[tag]) {
        grouped[tag] = [];
      }
      grouped[tag].push(project);
    });
  });

  return grouped;
}

export function Projects() {
  const [displayTiles, setDisplayTiles] = useState(true);
  const groupedProjects = groupByTag(projectList);

  if (displayTiles) {
    return (
      <div className="projects__tiles">
        <div className="switch-tile" onClick={() => setDisplayTiles(false)}>
          Switch to List View
        </div>
        {projectList.map((project) => (
          <Link className="project-tile" key={project.path} to={project.path}>
            <div className="project-tile__content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tile__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <div className="projects__list">
        <div className="switch-tile" onClick={() => setDisplayTiles(true)}>
          Switch to Tiles View
        </div>
        {Object.entries(groupedProjects).map(([tag, projects]) => (
          <div key={tag}>
            <h2 className="tag-title">{tag}</h2>
            <ul>
              {projects.map((project) => (
                <li key={project.path}>
                  <Link to={project.path}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-list__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
