import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1abc9c, #16a085);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

function Home() {
    return (
        <Section id="home">
            <Heading>Hi, I'm Abhishek</Heading>
            <Subheading>Frontend Developer | React Enthusiast</Subheading>
        </Section>
    );
}

export default Home;
