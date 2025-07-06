import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #222;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: ${({ open }) => (open ? '0' : '-100%')};
    background: #333;
    width: 200px;
    padding: 1rem;
    transition: right 0.3s ease;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #1abc9c;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background: #fff;
`;

function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <Nav>
            <Logo>MyPortfolio</Logo>
            <Burger onClick={() => setOpen(!open)}>
                <Bar />
                <Bar />
                <Bar />
            </Burger>
            <NavLinks open={open}>
                <NavLink href="#home" onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
                <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
            </NavLinks>
        </Nav>
    );
}

export default Navbar;
