import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import HeroSection from '../components/homepage/HeroSection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import SDKs from '../components/homepage/SDKs';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>

      <HeroSection />

      <SDKs />

      <div className="z-0">
        <ResourcesSection />
      </div>

      <HomeFooter />
    </Layout>
  );
}
