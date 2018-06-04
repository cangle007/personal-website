import React from 'react';
import ProjectsComponent from './ProjectsComponent';

export default function ProjectsPage({ projects }) {
  return (
    <div>
      <ProjectsComponent projects={projects} />
    </div>
  );
}
