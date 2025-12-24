import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';

const RebelTeam = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Team and <span className="text-accent">Leadership</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                The people who know what it takes to create a revolution in the food industry.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="relative">
                  <img 
                    src="https://www.rebelfoods.com/uploads/site/4425132821639979137leadership_at_rebel.jpg" 
                    alt="Leadership at Rebel" 
                    className="rounded-2xl w-full"
                  />
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-accent font-bold text-2xl">1</span>
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Leadership at Rebel
                </h2>
                <p className="text-muted-foreground text-lg">
                  Laying the path for us to reinvent the industry by inspiring us to make the #RebelSpirit stronger each day.
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Team Rebel Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SectionReveal delay={0.2} className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Team Rebel
                </h2>
                <p className="text-muted-foreground text-lg">
                  A well-knit group of go-getters who uphold the #TheRebelSpirit in everything we do.
                </p>
              </SectionReveal>
              <SectionReveal className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="https://www.rebelfoods.com/uploads/site/2965227731639979187team_rebel.jpg" 
                    alt="Team Rebel" 
                    className="rounded-2xl w-full"
                  />
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-accent font-bold text-2xl">2</span>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <SectionReveal>
                <Link 
                  to="/working-at-rebel"
                  className="block p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Rebel Culture &gt;
                  </h3>
                  <p className="text-muted-foreground">
                    We are REBEL. Never shy of redefining the norm, never shy of changes, just never shy.
                  </p>
                </Link>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <a 
                  href="https://spirit.rebelfoods.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Rebel Spirit : The Rebel Blog &gt;
                  </h3>
                  <p className="text-muted-foreground">
                    Know more about the thought process of being a true Rebel.
                  </p>
                </a>
              </SectionReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default RebelTeam;
