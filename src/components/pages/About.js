import React from "react";
import { Container } from "reactstrap";

export default function About() {
  const containerStyle = {
    backgroundColor: "#373f47",
    color: "#ffffff",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "100%",
    marginBottom: "4rem", // Add more marginBottom to create space above the footer
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  const imageContainerStyle = {
    width: "50%",
    padding: "10%",
    backgroundColor: "#373f47",
    borderRadius: "100%",
  };

  const textStyle = {
    marginTop: "1.5rem",
    textAlign: "center",
  };

  return (
    <Container className="container" style={containerStyle}>
      <h1>About Page</h1>
      <div style={imageContainerStyle}>
        <img
          src="./Images/user.png"
          alt="Justin Rossi"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "100%",
          }}
        />
      </div>
      <p style={textStyle}>
        Ambitious software developer, recent graduate of an intensive coding
        bootcamp, and equipped with diverse project experience in web and
        mobile development. Eager to apply newly acquired skills and
        technologies in real-world scenarios while embracing the excitement of
        this early stage in my journey. Passionate about utilizing technology
        to build creative and practical solutions.
      </p>
      {/* potential additions */}
      {/* Two inputs for name, email address, and text area for message */}
      {/* onBlur() / onFocus() / onChange() / onSubmit() */}
    </Container>
  );
}