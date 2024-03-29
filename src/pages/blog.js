import React from 'react';
import { graphql } from 'gatsby';
import { SectionTitle, SectionDescription } from '../components/Section';
import { PageContainer } from '../components/Container';
import { LatestArticles } from '../containers/LatestArticles';
import { Seo } from '../containers/Seo';

export default function Blog({ data }) {
  return (
    <>
      <Seo title="Aditya DS - Blog" />
      <PageContainer>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>
          I write about anything and everything tech that I come across. Hope
          you enjoy them and find them insightful!
        </SectionDescription>
        <LatestArticles edges={data.allMdx.edges} />
      </PageContainer>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        # fields: { langKey: { eq: "en" } }
      }
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
