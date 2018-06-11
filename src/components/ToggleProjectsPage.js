import React from 'react';
import ToggleProjectsComponent from './ToggleProjectsComponent';

export default function ToggleProjectsPage({ projects }) {
  return (
    <div>
      <ToggleProjectsComponent projects={projects} />
    </div>
  );
}
