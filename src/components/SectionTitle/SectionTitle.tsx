import React from 'react';
import Dots from './Dots';

import './_sectiontitle.scss';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <Dots className="svg" />
      <h1>{children}</h1>
    </div>
  );
};

export default SectionTitle;