import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandsSection from '@/components/BrandsSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import BeARebelSection from '@/components/BeARebelSection';
import LauncherSection from '@/components/LauncherSection';
import RebelSpiritSection from '@/components/RebelSpiritSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <WhoWeAreSection />
        <BeARebelSection />
        <LauncherSection />
        <RebelSpiritSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
