import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';

const policies = [
  { title: "CSR Policy", link: "https://www.rebelfoods.com/uploads/csr_policy/csr-policy-rebel-foods-private-limited.pdf" },
  { title: "Whistle Blower Policy", link: "https://www.rebelfoods.com/uploads/csr_policy/whistle-blower-policy.pdf" },
];

const Policies = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-6xl lg:text-8xl font-bold mb-16" style={{
                color: '#e8590c',
                WebkitTextStroke: '2px #e8590c',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'inherit',
                letterSpacing: '0.02em'
              }}>
                Policies
              </h1>
              
              {/* Simple list of policies */}
              <div className="flex flex-col gap-6 ml-2">
                {policies.map((policy, index) => (
                  <SectionReveal key={index} delay={index * 0.1}>
                    <a 
                      href={policy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl lg:text-3xl text-foreground hover:text-accent underline transition-colors duration-200"
                    >
                      {policy.title}
                    </a>
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Policies;
