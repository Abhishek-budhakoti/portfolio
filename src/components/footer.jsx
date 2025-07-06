import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  padding: 1rem 2rem;
  background: #222;
  color: #fff;
  text-align: center;
`;

function Footer() {
    return (
        <Foot>
            &copy; {new Date().getFullYear()} Abhishek | All rights reserved.
        </Foot>
    );
}

export default Footer;
