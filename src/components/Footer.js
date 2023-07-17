import React from 'react';
import { Container } from 'reactstrap';

export default function Footer() {
  const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '90px',
    backgroundColor: '#373f47',
    color: '#ffffff',
  };

  const contactListStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    margin: '10px',
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
  };

  return (
    <footer className="footer" style={footerStyle}>
      <Container>
        <h3>Contact Me</h3>
        <nav>
          <ul style={contactListStyle}>
            <li style={listItemStyle}>justin.rossi12@gmail.com</li>
            <li style={listItemStyle}>408.561.6334</li>
            <li style={listItemStyle}>
              <a href="https://github.com/Jrossi425" style={linkStyle}>
                github.com/Jrossi425
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}