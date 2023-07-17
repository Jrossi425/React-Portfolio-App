import React from 'react';
import { Container } from 'reactstrap';

export default function About() {
  const containerStyle = {
    backgroundColor: '#373f47',
    color: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '100%',
  };

  const imageContainerStyle = {
    width: '30%',
    padding: '10%',
    backgroundColor: '#6B9AC4',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    marginTop: '2rem',
  };

  return (
    <Container className="container" style={containerStyle}>
      <h1>About Page</h1>
      <Container className="container">
        <div style={imageContainerStyle}>
          <img src="./Assets/Images/justinrossi.jpg" alt="Justin Rossi" />
        </div>
        <p style={textStyle}>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </p>
        {/* Two inputs for name, email address, and text area for message */}
        {/* onBlur() / onFocus() / onChange() / onSubmit() */}
      </Container>
    </Container>
  );
}