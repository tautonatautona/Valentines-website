import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Letter from '@/components/Letter';
import Reasons from '@/components/Reasons';
import Countdown from '@/components/Countdown';
import Poetry from '@/components/Poetry';
import Dreams from '@/components/Dreams';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />
      <Countdown />
      <Timeline />
      <Gallery />
      <Letter />
      <Reasons />
      <Poetry />
      {/* <Dreams /> */}
      <Footer />
    </main>
  );
}

