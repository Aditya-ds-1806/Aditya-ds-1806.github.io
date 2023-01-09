import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from '../components/Container';
import { SectionDescription, SectionTitle } from '../components/Section';
import { AboutContainer, AboutImage, AboutText } from '../containers/About';
import { Seo } from '../containers/Seo';

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "aditya.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Aditya DS - About" />
      <AboutContainer>
        <Container>
          <SectionTitle>Hi I&#39;m Aditya!</SectionTitle>
          <SectionDescription>
            I&#39;m an aspiring software developer based in India. I have been
            developing full stack web, mobile and desktop applications in
            Node.js, React, MongoDB, Electron and other cool frameworks since
            the past 3 years.
            <br />
            <br />I developed a deep interest in <strong>Chess</strong> during
            the lockdown of 2020 and since then I have been playing and
            following the game very closely. I am also an amateur{' '}
            <strong>Carnatic Flutist</strong> and was first introduced to the
            instrument back in 2014. Recently, I rediscovered my interest in{' '}
            <strong>Astronomy</strong> and very soon I will begin stargazing!
          </SectionDescription>
        </Container>
        <AboutImage img={data.photo.childImageSharp} />
        <AboutText>Work Experience and Education coming soon!</AboutText>
      </AboutContainer>
    </>
  );
}
