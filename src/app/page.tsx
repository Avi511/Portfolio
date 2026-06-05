import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Avishka Medagamagodage',
    url: 'https://avishkaishan.vercel.app',
    jobTitle: 'Software Engineer',
    sameAs: [
      // Add any relevant social links here later (e.g., GitHub, LinkedIn)
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </>
  );
}
