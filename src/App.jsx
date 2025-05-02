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

const DentalClinic = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <LogoWrapper>
          <Logo
            src="https://storage.googleapis.com/a1aa/image/d82a2b6b-a1a2-4fa4-d65c-f763e0747495.jpg"
            alt="Logo of Dr. A Dental Clinic"
          />
          <ClinicName>DR. A DENTAL CLINIC</ClinicName>
        </LogoWrapper>
        <Nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Know us</a>
          <a href="#">Recent Activities</a>
        </Nav>
        <ContactButton>Contact Us</ContactButton>
      </Header>

      <Main>
        <BackgroundImage
          src="https://storage.googleapis.com/a1aa/image/2c9c3f3d-aafa-4414-0744-7f7b65652c2d.jpg"
          alt="Background heart logo"
        />
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
