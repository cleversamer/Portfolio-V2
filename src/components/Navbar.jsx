import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ page }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Link to="/">
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
          className={page === "skills" && "selected"}
          onClick={() => setShowMenu(false)}
        >
          <Link to="/skills">skills</Link>
        </NavItem>

        <NavItem
          className={page === "portfolio" && "selected"}
          onClick={() => setShowMenu(false)}
        >
          <Link to="/portfolio">portfolio</Link>
        </NavItem>

        <NavItem
          className={page === "events" && "selected"}
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

  > a {
    height: 64px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .selected {
      color: #9747ff;
    }
  }

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
  }
`;

const NavItem = styled.li`
  height: 100%;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #000;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 40px 0;
    color: #fff;
    height: fit-content;
  }

  a {
    font-size: 20px;
    font-family: "Inter", sans-serif;
    text-transform: capitalize;
    padding: 8px;

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
`;

export default Navbar;
