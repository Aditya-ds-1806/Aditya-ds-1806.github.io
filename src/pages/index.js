/* eslint-disable no-console */
import { graphql } from 'gatsby';
import React from 'react';
import GitHubButton from 'react-github-btn';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/Section';
import { Hero, HeroIntro, HeroTeaser, HeroTitle } from '../containers/Hero';
import { LatestArticles } from '../containers/LatestArticles';
import { Seo } from '../containers/Seo';

export default class IndexPage extends React.Component {
  componentDidMount() {
    console.log(
      '%c Made By Aditya DS',
      'font-family:Comic Sans MS; font-size:50px; font-weight:bold; background: linear-gradient(#f00, yellow); border-radius: 5px; padding: 20px'
    );
  }

  render() {
    return (
      <>
        <Hero>
          <Seo />
          <HeroIntro>Hi, my name is</HeroIntro>
          <HeroTitle>
            <strong>Aditya DS</strong>
            <br />
          </HeroTitle>

          <HeroTeaser>
            I am a final year Engineering student at <strong>IIITDM Kancheepuram</strong>,
            aspiring to become a Full Stack Software Developer.
            <br />
            <br />
            <span role="img" aria-label='student'>♟️</span> Chess aficionado
            <br />
            <span role="img" aria-label='music'>🎶</span> Novice Carnatic Flutist
            <br />
            <span role="img" aria-label='telescope'>🔭</span> Astronomy Enthusiast
          </HeroTeaser>
          <GitHubButton
            href="https://github.com/aditya-ds-1806"
            data-color-scheme="light"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @aditya-ds-1806 on GitHub"
          >
            Follow @aditya-ds-1806
          </GitHubButton>
        </Hero>

        <Container forwardedAs="section" pb={5}>
          <SectionTitle forwardedAs="h2">Blog</SectionTitle>
          <LatestArticles edges={this.props.data.allMdx.edges} />
        </Container>
      </>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 7
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            link
          }
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
