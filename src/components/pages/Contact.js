import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      if (event.target.name === 'name') {
        setNameError(true);
      } else if (event.target.name === 'email') {
        setEmailError(true);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '') {
      setNameError(true);
    }

    if (email === '') {
      setEmailError(true);
    } else if (!isValidEmail(email)) {
      setEmailInvalid(true);
    }

    // Handle form submission logic here
  };

  const isValidEmail = (email) => {
    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const inputStyle = {
    backgroundColor: '#373f47',
    borderColor: '#373f47',
    color: '#ffffff',
  };

  return (
    <div className="contact-container">
      <h1>Contact Page</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            style={inputStyle}
          />
          {nameError && <span className="error">Name is required</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            style={inputStyle}
          />
          {emailError && <span className="error">Email is required</span>}
          {emailInvalid && <span className="error">Invalid email address</span>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Input
            type="textarea"
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            style={inputStyle}
          />
        </FormGroup>

        <Button type="submit" style={inputStyle}>
          Submit
        </Button>
      </Form>
    </div>
  );
}