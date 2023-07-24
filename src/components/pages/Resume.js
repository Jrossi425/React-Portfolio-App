import React from 'react';
import { Container, Button } from 'reactstrap';

export default function Resume() {
  const containerStyle = {
    backgroundColor: '#373f47',
    color: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#6B9AC4',
    borderColor: '#6B9AC4',
    color: '#ffffff',
    marginTop: '1rem',
  };

  return (
    <Container style={containerStyle}>
      <h1>Resume Page</h1>
      <Button href="./Images/JPR_Resume.pdf" download style={buttonStyle}>
        Download Resume
      </Button>
    </Container>
  );
}