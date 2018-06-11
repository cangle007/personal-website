import React from 'react';
import HomeComponent from './HomeComponent';

export default function HomePage({ projects }) {
  return (
    <div>
      <HomeComponent projects={projects} />
    </div>
  );
}
