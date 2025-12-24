import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Search } from 'lucide-react';

const PressRelease = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
                Press <span className="text-accent">Release</span>
              </h1>
              
              {/* Search Bar */}
              <div className="max-w-md">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Search press releases..."
                    className="w-full px-6 py-4 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg mb-8">
                  Press releases will be displayed here.
                </p>
                <button className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors">
                  See More
                </button>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default PressRelease;
