import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from '../components/Container';
import { SectionDescription, SectionTitle } from '../components/Section';
import CustomChrono from '../components/Chrono';
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

  const items = [
    {
      title: 'May 2016',
      cardSubtitle: '10th Grade',
      cardTitle: 'Mirambika School For New Age, 📌Bengaluru',
      cardDetailedText: 'Completed 10th grade with a CGPA of 10.0',
    },
    {
      title: 'May 2018',
      cardSubtitle: '12th Grade',
      cardTitle:
        "Sri Kumaran Children's Home Composite Junior College, 📌Bengaluru",
      cardDetailedText:
        'Studied Physics, Chemistry, Mathematics and Electronics; Completed 12th grade with percentage of 90.16%',
    },
    {
      title: 'Jul 2018',
      cardSubtitle:
        'B.Tech + M.Tech, Electronics and Communication Engineering',
      cardTitle: 'IIITDM Kancheepuram, 📌Chennai',
      cardDetailedText:
        'Began pursuing a dual degree in Electronics and Communication Engineering',
    },
    {
      title: 'Dec 2020',
      cardSubtitle: 'Full Stack Developer Intern',
      url: 'https://www.4climate.in/',
      cardTitle: '4Climate, 📌Chennai',
      timelineContent: (
        <ul style={{ paddingInlineStart: '1rem' }}>
          <li>
            Worked on a web dashboard for clients to remotely monitor and
            control their hydroponics kits
          </li>
          <li>Created internal tooling to test hardware</li>
          <li>Worked on generating user reports</li>
          <li>
            Explored various AWS services like Beanstalk, Lightsail, EC2 to
            deploy the application
          </li>
        </ul>
      ),
    },
    {
      title: 'May 2021',
      cardSubtitle: 'Desktop App Developer Intern',
      cardTitle: 'Dr. Vineet K. Srivastav, ISRO, 📌Bengaluru',
      timelineContent: (
        <ul style={{ paddingInlineStart: '1rem' }}>
          <li>
            Worked on a cross-platform desktop application called{' '}
            <strong>Orbital Toolkit(OTK)</strong>
          </li>
          <li>
            Made use of <strong>ElectronJS</strong> framework and other tools
            like Electron Forge
          </li>
          <li>Primarily intended for RHEL 7.6 and Windows 8 systems</li>
          <li>
            Wrote a GitHub workflow to publish binaries - <code>.deb</code>,{' '}
            <code>.rpm</code>, <code>.flatpak</code> and <code>.exe</code>
          </li>
        </ul>
      ),
    },
    {
      title: 'May 2022',
      cardSubtitle: 'Software Developer Intern',
      cardTitle: 'Powerplay, 📌Bengaluru',
      timelineContent: (
        <ul style={{ paddingInlineStart: '1rem' }}>
          <li>
            Worked mainly in the Backend and Web team to develop serveral user
            facing features such as Guest Login, Indenting/Outdenting tasks etc
          </li>
          <li>PoC from the Backend team for the Internationalization pod</li>
          <li>Wrote stress tests with Artillery to test key user journeys</li>
          <li>
            Got exposed to the SDLC process and various tools such as Jira,
            Smartlook, Mixpanel, Sentry, New Relic, etc
          </li>
        </ul>
      ),
    },
  ];

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
        <AboutText>
          <CustomChrono items={items} />
        </AboutText>
      </AboutContainer>
    </>
  );
}
