import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import VideoShowcase from '@/components/sections/VideoShowcase';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <VideoShowcase />
      <CTA />
    </>
  );
}