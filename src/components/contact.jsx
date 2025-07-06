import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #3498db;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: #2c3e50;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #1abc9c;
  }
`;

function Contact() {
    return (
        <Section id="contact">
            <Heading>Contact Me</Heading>
            <Form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message!');
            }}>
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <TextArea rows="5" placeholder="Your Message" required />
                <Button type="submit">Send Message</Button>
            </Form>
        </Section>
    );
}

export default Contact;


