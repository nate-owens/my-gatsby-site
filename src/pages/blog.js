import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
          {
            data.allFile.nodes.map(node => {
                if (node.ext === '.mdx') {
                    return (<li key={node.name}>{node.name}</li>)
                } else {
                    return ''
                }
            })
          }
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        ext
      }
    }
  }
`

export default BlogPage;