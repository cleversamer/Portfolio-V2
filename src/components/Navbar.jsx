import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Link to="/" className="click-animation-2">
        <Logo>samer</Logo>
      </Link>

      <input
        checked={showMenu}
        onChange={() => {}}
        type="checkbox"
        id="click"
      />
      <label
        htmlFor="click"
        className="menu-btn"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <IoMdClose /> : <TbMenu />}
      </label>

      <NavItems>
        <NavItem
          className="click-animation-1"
          onClick={() => setShowMenu(false)}
        >
          <Link to="/skills">skills</Link>
        </NavItem>

        <NavItem
          className="click-animation-1"
          onClick={() => setShowMenu(false)}
        >
          <Link to="/portfolio">portfolio</Link>
        </NavItem>

        <NavItem
          className="click-animation-1"
          onClick={() => setShowMenu(false)}
        >
          <Link to="/events">events</Link>
        </NavItem>
      </NavItems>
    </Container>
  );
};

const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input[type="checkbox"] {
    display: none;

    @media screen and (max-width: 767px) {
      :checked ~ ul {
        left: 0;
      }

      :checked ~ ul li a {
        margin-left: 0px;
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      display: none;
      font-size: 26px;

      @media screen and (max-width: 767px) {
        display: block;
      }
    }

    :active svg {
      font-size: 22px;
    }
  }
`;

const Logo = styled.h1`
  font-size: 40px;
  font-family: "Kavoon", cursive;
  color: #000;
  cursor: pointer;
`;

const NavItems = styled.ul`
  list-style: none;
  align-self: stretch;
  margin: auto 0;
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 999;

  @media screen and (max-width: 767px) {
    position: fixed;
    top: 64px;
    left: -100%;
    background: #111;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
  }
`;

const NavItem = styled.li`
  padding: 8px;
  transition-duration: 167ms;

  a {
    font-size: 20px;
    font-family: "Inter", sans-serif;
    text-transform: capitalize;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin-left: -100%;
      display: block;
      font-size: 20px;
      transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      color: #fff;

      :active,
      :hover {
        background: none;
      }
    }
  }

  :hover,
  :active {
    background-color: #303030;
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 40px 0;
  }
`;

export default Navbar;
