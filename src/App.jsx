// DentalClinic.js
import React from "react";
import {
  GlobalStyle,
  Header,
  LogoWrapper,
  Logo,
  ClinicName,
  Nav,
  ContactButton,
  Main,
  BackgroundImage,
  ContentWrapper,
  Headline,
  BookButton,
  BrownSection,
  BrownContent,
  Divider,
  ServicesSection,
  SubHeading,
  MainHeading,
  ServiceFilter,
  FilterButton,
  ServicesGrid,
  ServiceCard,
  CardText,
  ActivitiesSection,
  ActivitiesHeading,
  ActivitiesGrid,
  ActivityCard,
  ActivityBar,
} from "./Design";
import CarouselSection from "./Carousel";
import Footer from "./Footer";
import logo from "./background.png";
import HeaderSection from "./Header";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 2rem;
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 24rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Label = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #4b2e0e;
  color: white;
  font-size: 0.75rem;
  font-family: "Montserrat", monospace;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
`;

const DentalClinic = () => {
  return (
    <>
      <HeaderSection />
      <GlobalStyle />
      <Main>
        <BackgroundImage src={logo} alt="Background heart logo" />
        <ContentWrapper>
          <Headline>
            Dedicated to Smiles,
            <br />
            Anchored in Care
          </Headline>
          <BookButton>Book Now!</BookButton>
        </ContentWrapper>
      </Main>

      <BrownSection>
        <BrownContent>
          <div>High Quality Services</div>
          <Divider />
          <div>Patient-Friendly Dental Care</div>
        </BrownContent>
      </BrownSection>
      <ServicesSection>
        <SubHeading>DAVAO'S BEST DENTAL CLINIC</SubHeading>
        <MainHeading>Services Offered</MainHeading>
        <Container>
          <Card>
            <Image
              src="https://storage.googleapis.com/a1aa/image/f283a9b7-cfe3-48eb-7a38-a67c37489817.jpg"
              alt="Dentist wearing blue gloves examining a female patient's open mouth with dental tools"
              width="400"
              height="250"
            />
            <Label>General Services</Label>
          </Card>
          <Card>
            <Image
              src="https://storage.googleapis.com/a1aa/image/8d6a7604-246c-4848-ce40-126efe0bd76a.jpg"
              alt="Dentist wearing white coat and mask working on a patient sitting in dental chair in a modern clinic"
              width="400"
              height="250"
            />
            <Label>Specialized</Label>
          </Card>
        </Container>
      </ServicesSection>
      <ActivitiesSection>
        <ActivitiesHeading>Recent Activities</ActivitiesHeading>
        <ActivitiesGrid>
          {[...Array(4)].map((_, i) => (
            <ActivityCard key={i}>
              <ActivityBar />
            </ActivityCard>
          ))}
        </ActivitiesGrid>
      </ActivitiesSection>
      <CarouselSection />
      <Footer />
    </>
  );
};

export default DentalClinic;
