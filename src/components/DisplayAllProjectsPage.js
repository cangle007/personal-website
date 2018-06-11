import React from 'react';
import DisplayAllProjectsComponent from './DisplayAllProjectsComponent';

export default function DisplayAllProjectsPage({ projects }) {
  return (
    <div>
      <DisplayAllProjectsComponent projects={projects} />
    </div>
  );
}
