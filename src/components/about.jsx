import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #ecf0f1;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Content = styled.p`
  max-width: 600px;
  line-height: 1.6;
`;

function About() {
    return (
        <Section id="about">
            <Heading>About Me</Heading>
            <Content>
                I'm a passionate frontend developer with experience in building
                responsive and interactive web applications using React.js. I love
                solving problems and creating beautiful user interfaces.
            </Content>
        </Section>
    );
}

export default About;
