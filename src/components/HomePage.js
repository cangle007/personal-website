import React from 'react';
import HomeComponent from './HomeComponent';

export default function HomePage({ logoImages, projects }) {
  return (
    <div>
      <HomeComponent logoImages={logoImages} projects={projects} />
    </div>
  );
}
