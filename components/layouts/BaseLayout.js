import React from 'react';
import Header from '../shared/Header';

const BaseLayout = ({ children, headerType, className }) => {
  const getHeader = headerType || 'default';
  return (
    <div className="layout-container">
      <Header className={`port-nav-${getHeader}`} />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
};

export default BaseLayout
