// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        I'm making this by following the {" "}
        <a href="https://www.gatsbyjs.com/docs/tutorial/" title="_blank">
          Gatsby Tutorial
        </a>.
      </p>
      <StaticImage 
        alt="Clifford, a reddish-brown pitbull lounging on a couch."
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" 
      />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;