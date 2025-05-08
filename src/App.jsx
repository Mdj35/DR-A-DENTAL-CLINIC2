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
import logo from "./1 (1).png";
import HeaderSection from "./Header";

const DentalClinic = () => {
  return (
    <>
      <GlobalStyle />

      <HeaderSection />
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
        <ServiceFilter>
          <FilterButton type="button">All Services</FilterButton>
        </ServiceFilter>
        <ServicesGrid>
          {[...Array(3)].map((_, i) => (
            <ServiceCard key={i}>
              <CardText>
                DAVAO’S BEST <br />
                DENTAL CLINIC
              </CardText>
            </ServiceCard>
          ))}
        </ServicesGrid>
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
