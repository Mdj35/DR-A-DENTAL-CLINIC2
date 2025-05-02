// DentalClinicStyles.js
import styled, { createGlobalStyle } from "styled-components";

// Global styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom, white, #f3e9e3);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  max-width: 1120px;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const ClinicName = styled.span`
  color: #6b4a2e;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  user-select: none;
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    font-size: 0.625rem;
    font-weight: 600;
    color: #6b4a2e;
    letter-spacing: 0.05em;

    a {
      color: #6b4a2e;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ContactButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background-color: #6b4a2e;
    color: white;
    font-size: 0.625rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1.5rem;
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
  max-width: 600px;
  max-height: 400px;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

export const Headline = styled.h1`
  color: #4a2e0b;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.25;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const BookButton = styled.button`
  margin-top: 1.5rem;
  background-color: #6b4a2e;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
`;

export const BrownSection = styled.section`
  background-color: #6b4423;
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1;
  user-select: none;
`;

export const BrownContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.div`
  height: 3.5rem;
  border-right: 1px solid #8b7b6b;
`;
export const ServicesSection = styled.section`
  background-color: white;
  font-family: 'Poppins', sans-serif;
  padding: 2.5rem 1rem;
  max-width: 1120px;
  margin: 0 auto;
`;

export const SubHeading = styled.p`
  font-size: 10px;
  font-weight: 800;
  color: #5B3A0A;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const MainHeading = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  color: #5B3A0A;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ServiceFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const FilterButton = styled.button`
  background-color: #5B3A0A;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

export const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ServiceCard = styled.div`
  width: 10rem;
  height: 12rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 10px;
  font-weight: 800;
  color: #5B3A0A;
  text-transform: uppercase;
  line-height: 1.2;
`;
export const ActivitiesSection = styled.section`
  background-color: white;
  padding: 3rem 1rem;
  max-width: 96rem;
  margin: 0 auto;
`;

export const ActivitiesHeading = styled.h2`
  text-align: center;
  color: #4b2e0e;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const ActivitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ActivityCard = styled.div`
  width: 10rem;
  height: 7rem;
  background-color: #d1d5db; /* Tailwind's gray-300 */
  position: relative;
`;

export const ActivityBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  background-color: #4b2e0e;
`;