import React, { useState } from "react";
import {
  Header,
  LogoWrapper,
  Logo,
  ClinicName,
  Nav,
  NavLink,
  ContactButton,
  MenuIcon,
  MobileNav,
  
} from "./Design";
import logo from "./1 (1).png";
import { FiMenu, FiX } from "react-icons/fi";

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>
      <LogoWrapper>
        <Logo src={logo} alt="Logo of Dr. A Dental Clinic" />
        <ClinicName>DR. A DENTAL CLINIC</ClinicName>
      </LogoWrapper>

      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </MenuIcon>

      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Know us</NavLink>
        <NavLink href="#">Recent Activities</NavLink>
      </Nav>

      <MobileNav open={menuOpen}>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Know us</NavLink>
        <NavLink href="#">Recent Activities</NavLink>
        <ContactButton>Contact Us</ContactButton>
      </MobileNav>

      <ContactButton className="desktop-only">Contact Us</ContactButton>
    </Header>
  );
};

export default HeaderSection;
