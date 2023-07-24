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
            <li style={listItemStyle}>
              <a href="https://stackoverflow.com/users/21005460/jrossi425" style={linkStyle}>
                stackoverflow
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="https://www.linkedin.com/in/justin-rossi-645412254/" style={linkStyle}>
                linkedin
              </a>
            </li>
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