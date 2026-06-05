import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import FeaturedProject from '@/components/FeaturedProject';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <FeaturedProject />
      <Skills />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
