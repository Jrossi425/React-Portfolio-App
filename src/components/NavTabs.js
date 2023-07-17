import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function NavTabs({ currentPage, handlePageChange }) {
  const [hoveredTab, setHoveredTab] = useState(null);

  const navItemStyle = {
    backgroundColor: '#373f47',
    color: '#ffffff',
  };

  const activeNavItemStyle = {
    backgroundColor: '#6B9AC4',
    color: '#ffffff',
  };

  const hoveredNavItemStyle = {
    backgroundColor: '#AB8476',
    color: '#ffffff',
  };

  const handleMouseEnter = (tab) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  const getNavItemStyle = (tab) => {
    if (currentPage === tab) {
      return activeNavItemStyle;
    }
    if (hoveredTab === tab) {
      return hoveredNavItemStyle;
    }
    return navItemStyle;
  };

  const handleHoverEnter = (tab) => {
    handleMouseEnter(tab);
  };

  const handleHoverLeave = () => {
    handleMouseLeave();
  };

  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          style={getNavItemStyle('Resume')}
          className={currentPage === 'Resume' ? 'active' : ''}
          onMouseEnter={() => handleHoverEnter('Resume')}
          onMouseLeave={handleHoverLeave}
        >
          Resume
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#about"
          onClick={() => handlePageChange('About')}
          style={getNavItemStyle('About')}
          className={currentPage === 'About' ? 'active' : ''}
          onMouseEnter={() => handleHoverEnter('About')}
          onMouseLeave={handleHoverLeave}
        >
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          style={getNavItemStyle('Projects')}
          className={currentPage === 'Projects' ? 'active' : ''}
          onMouseEnter={() => handleHoverEnter('Projects')}
          onMouseLeave={handleHoverLeave}
        >
          Projects
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          style={getNavItemStyle('Contact')}
          className={currentPage === 'Contact' ? 'active' : ''}
          onMouseEnter={() => handleHoverEnter('Contact')}
          onMouseLeave={handleHoverLeave}
        >
          Contact
        </NavLink>
      </NavItem>
    </Nav>
  );
}