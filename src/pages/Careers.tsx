import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Users, Rocket, Heart, Zap } from 'lucide-react';

const benefits = [
  { icon: Rocket, title: "Growth Opportunities", description: "Fast-track your career with rapid growth paths" },
  { icon: Users, title: "Collaborative Culture", description: "Work with passionate rebels from diverse backgrounds" },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible policies that respect your personal time" },
  { icon: Zap, title: "Innovation First", description: "Be part of cutting-edge food technology innovations" },
];

const Careers = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Join the <span className="text-accent">Revolution</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Be a part of the world's largest internet restaurant company. We're looking for rebels who want to transform the food industry.
              </p>
              <a 
                href="https://www.rebelfoods.com/join-our-team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                View Open Positions
              </a>
            </SectionReveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Why Join Rebel Foods?
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <SectionReveal key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300">
                    <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  The Rebel Spirit
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Rebel Foods, we believe in challenging the status quo. Our culture is built on innovation, ownership, and a relentless focus on customer satisfaction.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We're not just building a company – we're revolutionizing how the world eats. Join us and be part of something extraordinary.
                </p>
                <Link 
                  to="/working-at-rebel"
                  className="inline-flex items-center gap-2 text-accent hover:underline font-semibold"
                >
                  Learn more about our culture →
                </Link>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <img 
                  src="https://www.rebelfoods.com/uploads/site/2965227731639979187team_rebel.jpg"
                  alt="Team Rebel"
                  className="rounded-2xl w-full"
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent/10">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <SectionReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to be a Rebel?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our open positions and find your place in the revolution.
              </p>
              <a 
                href="https://www.rebelfoods.com/join-our-team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Explore Opportunities
              </a>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Careers;
