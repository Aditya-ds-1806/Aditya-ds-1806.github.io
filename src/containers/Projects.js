import styled, { Box, css, keyframes, th } from '@xstyled/styled-components';
import { format } from 'date-fns';
import humanNumber from 'human-number';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Card, CardBody, CardText } from '../components/Card';
import { PageContainer } from '../components/Container';
import { ProjectShape } from '../components/Project';
import { SectionDescription, SectionTitle } from '../components/Section';
import { Seo } from './Seo';

const rotateRight = keyframes`
  from {
    transform: rotate(0deg)
               perspective(200px)
               translateZ(-8px)
               rotateY(2deg)
               translate(0px)
               rotate(0deg);
  }
  to {
    transform: rotate(360deg)
               perspective(200px)
               translateZ(-8px)
               rotateY(2deg)
               translate(0px) 
               rotate(-360deg);
  }
`;

const ProjectImageLink = styled.a`
  display: block;
  position: relative;
  width: 30%;
  padding-top: 3%;

  animation: ${rotateRight} 5s linear infinite;

  > svg {
    position: absolute;
    transition: base;
    top: 0;
    width: 118%;
    height: auto;
  }
`;

const ProjectLabel = styled.div`
  font-family: monospace;
  font-size: 13;
  color: accent;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 22;
  color: lighter;
  margin-bottom: 3;
  margin-right: 3;

  > a {
    transition: base;

    &:hover {
      color: accent;
    }
  }
`;

const ProjectBody = styled.div`
  position: relative;
  z-index: 1;
  max-width: 70%;
  flex: 0 0 70%;
`;

const ProjectTags = styled.ul`
  margin: 0;
  padding: 0;
  font-family: monospace;
`;

const Project = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: base;

  ${(p) => {
    switch (p.position) {
      case 'right':
        return css`
          text-align: left;
          flex-direction: row-reverse;

          ${ProjectLabel}, ${ProjectTitle} {
            margin-left: 3;
          }

          ${ProjectTags} {
            margin-left: 2;
          }

          ${ProjectImageLink} {
            padding-right: 6.5%;
            animation-direction: normal;

            > svg {
              right: 0;
            }
          }

          ${ProjectImageLink}:hover > svg {
            transform: scale(1.05);
          }
        `;
      case 'left':
      default:
        return css`
          text-align: right;
          flex-direction: row;

          ${ProjectLabel}, ${ProjectTitle} {
            margin-right: 3;
          }

          ${ProjectTags} {
            margin-right: 2;
          }

          ${ProjectImageLink} {
            padding-left: 6.5%;
            animation-direction: reverse;

            > svg {
              left: 0;
            }
          }

          ${ProjectImageLink}:hover > svg {
            transform: scale(1.05);
          }
        `;
    }
  }}
`;

const ProjectTag = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: inline-block;
  font-size: 12;
  color: light400;
  padding: 0 2;

  a {
    transition: base;
    color: lighter;

    > svg {
      font-size: 18;
      vertical-align: middle;
    }

    &:hover {
      color: accent;
    }
  }
`;

const shine = keyframes`
  0%, 20% { mask-position: -50%; }
  80%, 100% { mask-position: 150%; }
`;

const pulse = keyframes`
  0% {
    text-shadow: 0 0 2px ${th.color('accent')};
  }
  
  20%, 60% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  
  80% {
    text-shadow: 0 0 2px ${th.color('accent')};
  }
`;

export const ShineTag = styled(ProjectTag)`
  cursor: help;
  color: accent;
  mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.6) 70%
  );
  mask-size: 200%;
  animation: ${shine} 3s linear infinite, ${pulse} 3s infinite;
`;

function ProjectDescription({ children }) {
  return (
    <Card>
      <CardBody>
        <CardText>{children}</CardText>
      </CardBody>
    </Card>
  );
}

function ProjectTemplate({
  github,
  npm,
  position,
  label,
  title,
  url,
  description,
  tags,
  color,
  logo,
  isGithub,
  stats = true,
}) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    if (!stats) return;
    Promise.all([
      isGithub && github
        ? fetch(
            github.replace('https://github.com', 'https://api.github.com/repos')
          ).then((res) => res.json())
        : 0,
    ])
      .then(setData)
      .catch(() => {
        // ignore errors
      });
  }, [stats, npm, github, isGithub]);

  const stars = stats && isGithub && github && (
    <ShineTag key="stars" title="Number of stars on GitHub">
      ★ {data ? `${humanNumber(Math.floor(data[0].stargazers_count))}+` : '.'}
    </ShineTag>
  );

  const downloads = stats && isGithub && (
    <ShineTag key="downloads" title="No of Forks">
      ↓ {data ? `${humanNumber(Math.floor(data[0].forks))}+` : '.'}
    </ShineTag>
  );
  const createdDate = stats && isGithub && (
    <ShineTag key="createdAt" title="Date Project was created">
      {data && data[0].created_at
        ? `${format(
            new Date(data[0].created_at),
            "'Created at', do MMMM yyyy"
          )}`
        : '.'}
    </ShineTag>
  );

  const language = stats && isGithub && (
    <ShineTag key="language" title="Language">
      {data ? `${data[0].language}` : '.'}
    </ShineTag>
  );

  const ghTag = github ? (
    <ProjectTag key="github">
      <a href={github}>
        <FaGithub />
      </a>
    </ProjectTag>
  ) : null;

  return (
    <Project position={position}>
      <ProjectImageLink href={url}>
        <ProjectShape position={position} color={color} />
        <img src={logo} alt={logo} width="150em" />
      </ProjectImageLink>
      <ProjectBody>
        <ProjectLabel>{label}</ProjectLabel>
        <ProjectTitle>
          <a href={url}>{title}</a>
        </ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        {tags.map((tag, index) => (
          <ProjectTag
            key={index}
            style={{ marginTop: '1.25em', marginBottom: '1.25em' }}
          >
            {tag}
          </ProjectTag>
        ))}
        <ProjectTags>
          {position === 'right' && ghTag}
          {position === 'right' && createdDate}
          {position === 'right' && language}
          {position === 'right' && stars}
          {position === 'right' && downloads}
          {position === 'left' && downloads}
          {position === 'left' && stars}
          {position === 'left' && language}
          {position === 'left' && createdDate}
          {position === 'left' && ghTag}
        </ProjectTags>
      </ProjectBody>
    </Project>
  );
}

function Projects({ projects }) {
  const projectElements = [
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum1/500"
      label={projects.Skribblrs.label}
      title="Skribblrs.io"
      isGithub
      github="https://github.com/Aditya-ds-1806/Skribblrs.io"
      url="https://skribblrs.up.railway.app/"
      color="#667EEA"
      description={projects.Skribblrs.description}
      tags={['Node.js', 'Express', 'Socket.io', 'EJS', 'Bootstrap']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum2/500"
      label={projects.Pgn_Parser.label}
      title="Chess-PGN-Parser"
      isGithub
      github="https://github.com/Aditya-ds-1806/Chess-PGN-Parser"
      url="https://aditya-ds-1806.github.io/Chess-PGN-Parser/#/"
      color="#E50914"
      description={projects.Pgn_Parser.description}
      tags={['NPM', 'Node.js', 'JavaScript']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum6/500"
      label={projects.Raga.label}
      title="Carnatic Melakarta Raga Classifier"
      isGithub
      github="https://github.com/GaneshTS06/Raga-Classifier"
      url="https://mybinder.org/v2/gh/GaneshTS06/Raga-Classifier/HEAD?labpath=main.ipynb"
      color="#6C2478"
      description={projects.Raga.description}
      tags={['Python', 'Librosa', 'Numpy', 'Fisher-Jenks Clustering']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum7/500"
      label={projects.Dafi.label}
      title="Digital Audio Fingerprinting"
      isGithub
      github="https://github.com/Aditya-ds-1806/DAFi-python"
      url="https://mybinder.org/v2/gh/Aditya-ds-1806/DAFi-python/HEAD?labpath=index.ipynb"
      color="#00CDCD"
      description={projects.Dafi.description}
      tags={['Python', 'Numpy', 'Scipy', 'Pymongo', 'Matplotlib']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum11/500"
      label={projects.Microservice.label}
      title="Microservices"
      isGithub
      github="https://github.com/Aditya-ds-1806/microservices"
      url="https://github.com/Aditya-ds-1806/microservices"
      color="#F000B8"
      description={projects.Microservice.description}
      tags={['Node.js', 'Express', 'Mongoose', 'Docker']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum9/500"
      label={projects.Prsc.label}
      title="E-Prescription Management System"
      isGithub
      github="https://github.com/Aditya-ds-1806/E-Prescription-Management"
      url="https://e-prescription-management.up.railway.app/"
      color="#fff"
      description={projects.Prsc.description}
      tags={['Node.js', 'Express', 'Passport', 'JavaScript', 'FFT']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum8/500"
      label={projects.Pingg.label}
      title="Pingg.io"
      isGithub
      github="https://github.com/Aditya-ds-1806/whatsapp-clone"
      url="https://whatsappclone-dive.web.app/"
      color="#fff"
      description={projects.Pingg.description}
      tags={['JavaScript', 'Firebase', 'SCSS']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum10/500"
      label={projects.Blog.label}
      title="Blogging platform for college"
      isGithub
      github="https://github.com/Aditya-ds-1806/ece-blog"
      url="https://github.com/Aditya-ds-1806/ece-blog"
      color="#00CDCD"
      description={projects.Blog.description}
      tags={['Node.js', 'Express', 'Mongoose', 'Passport', 'Summernote']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum12/500"
      label={projects.ocr.label}
      title="OCR Web App"
      isGithub
      github="https://github.com/Aditya-ds-1806/OCR-backend"
      url="https://aditya-ds-1806.github.io/OCR/"
      color="#fff"
      description={projects.ocr.description}
      tags={['Python', 'Tesseract', 'Flask', 'Numpy']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum3/500"
      label={projects.CICT.label}
      title="CICT 2020"
      isGithub
      github="https://github.com/Aditya-ds-1806/CICT-2020"
      url="http://www.cict2020.iiitdm.ac.in"
      color="#0092EB"
      description={projects.CICT.description}
      tags={['Node.js', 'EJS', 'Bootstrap']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum4/500"
      label={projects.Madeit.label}
      title="MaDeIT Innovation Foundation"
      isGithub
      github="https://github.com/Aditya-ds-1806/MaDeIT-v2"
      url="https://github.com/Aditya-ds-1806/MaDeIT-v2"
      color="#000"
      description={projects.Madeit.description}
      tags={['PHP', 'Flight', 'CMS']}
    />,
    <ProjectTemplate
      logo="https://picsum.photos/seed/picsum5/500"
      label={projects.Samgatha.label}
      title="Samgatha 2020"
      isGithub
      github="https://github.com/Aditya-ds-1806/Samgatha-2020"
      url="https://samgatha-2020.up.railway.app/"
      color="#EF9B0F"
      description={projects.Samgatha.description}
      tags={['Node.js', 'EJS', 'Bootstrap']}
    />,
  ];
  return (
    <Box mt={5} row mb={{ xs: -4, md: -5 }}>
      {projectElements.map((project, index) => (
        <Box col={1} py={{ xs: 4, md: 5 }} key={index}>
          {React.cloneElement(project, {
            position: index % 2 === 0 ? 'left' : 'right',
          })}
        </Box>
      ))}
    </Box>
  );
}

export function ProjectsPageTemplate({ title, intro, projects }) {
  return (
    <>
      <Seo title={`Aditya DS - ${title}`} />
      <PageContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{intro}</SectionDescription>
        <Projects projects={projects} />
      </PageContainer>
    </>
  );
}
