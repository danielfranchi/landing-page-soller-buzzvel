import React, { Suspense } from "react";

const CallToAction = React.lazy(() => import("./CallToAction"));
const Feature = React.lazy(() => import("./Feature"));
const Hero = React.lazy(() => import("./Hero"));
const Meet = React.lazy(() => import("./Meet"));
const Services = React.lazy(() => import("./Services"));
const System = React.lazy(() => import("./System"));
const Header = React.lazy(() => import("../components/Header"));
const Footer = React.lazy(() => import("../components/Footer"));

const Home: React.FC = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <Feature />
      </Suspense>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <Suspense fallback={null}>
        <System />
      </Suspense>
      <Suspense fallback={null}>
        <Meet />
      </Suspense>
      <Suspense fallback={null}>
        <CallToAction />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
