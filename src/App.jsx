import React, { Suspense } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Spinner } from '@nextui-org/react';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load sections for better performance
const HeroSection = React.lazy(() => import('./components/sections/HeroSection'));
const AboutSection = React.lazy(() => import('./components/sections/AboutSection'));
const SkillsSection = React.lazy(() => import('./components/sections/SkillsSection'));
const PortfolioSection = React.lazy(() => import('./components/sections/PortfolioSection'));
const ContactSection = React.lazy(() => import('./components/sections/ContactSection'));

// Loading component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <Spinner size="lg" color="primary" />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <NextUIProvider>
        <Layout>
          <Suspense fallback={<SectionLoader />}>
            <HeroSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <PortfolioSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </Layout>
      </NextUIProvider>
    </ErrorBoundary>
  );
}

export default App;
