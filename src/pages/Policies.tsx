import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { FileText, Shield, Lock, Cookie } from 'lucide-react';

const policies = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "Learn how we collect, use, and protect your personal information.",
    link: "#privacy"
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Review the terms and conditions for using our services.",
    link: "#terms"
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Understand how we use cookies and similar technologies.",
    link: "#cookies"
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Our commitment to keeping your data safe and secure.",
    link: "#security"
  }
];

const Policies = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
                Our <span className="text-accent">Policies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Read our policies to understand how we operate and protect your rights.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <SectionReveal key={index} delay={index * 0.1}>
                  <a 
                    href={policy.link}
                    className="block bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group h-full"
                  >
                    <policy.icon className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {policy.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {policy.description}
                    </p>
                    <span className="text-accent font-semibold">
                      Read More →
                    </span>
                  </a>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Policies;
