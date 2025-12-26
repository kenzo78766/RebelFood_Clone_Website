import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Download } from 'lucide-react';

const AnnualReturn = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
                Annual <span className="text-accent">Return</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                View and download our annual returns and financial documents.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Rebel Foods Annual Return
                    </h3>
                    <p className="text-muted-foreground">
                      Click here to view the annual return document
                    </p>
                  </div>
                  <Download className="w-8 h-8 text-accent" />
                </div>
                <button className="w-full px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors">
                  Click here
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

export default AnnualReturn;
