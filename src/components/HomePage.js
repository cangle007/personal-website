import React from 'react';
import HomeComponent from './HomeComponent';

export default function HomePage({ logoImages }) {
  return (
    <div>
      <HomeComponent logoImages={logoImages} />
    </div>
  );
}
