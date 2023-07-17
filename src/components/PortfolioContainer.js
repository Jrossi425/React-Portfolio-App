import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return (
        <div style={{ marginBottom: '70px' }}>
          <Projects />;
        </div>
      );
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const containerStyle = {
    backgroundColor: '#F5F5DC',
    minHeight: '100vh',
    paddingTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {Footer()}
    </div>
  );
}