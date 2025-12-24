import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import careerImage from '@/assets/career.jpg';
import { Briefcase, Users, Rocket, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Briefcase,
    title: 'Growth Opportunities',
    description: 'Fast-track your career with challenging projects and leadership opportunities.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented individuals who are passionate about transforming the food industry.',
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Be part of a team that constantly pushes boundaries and embraces new technologies.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We believe in flexible work arrangements and comprehensive wellness programs.',
  },
];

const openings = [
  { title: 'Senior Software Engineer', department: 'Engineering', location: 'Mumbai' },
  { title: 'Product Manager', department: 'Product', location: 'Bangalore' },
  { title: 'Data Scientist', department: 'Data & Analytics', location: 'Mumbai' },
  { title: 'Marketing Manager', department: 'Marketing', location: 'Delhi' },
  { title: 'Operations Lead', department: 'Operations', location: 'Hyderabad' },
  { title: 'UX Designer', department: 'Design', location: 'Mumbai' },
];

const BeARebel = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <SectionReveal>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Be a Rebel
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Come, be a Rebel and revolutionize the global food industry. Join a team of passionate individuals who are changing how the world eats.
                  </p>
                  <a
                    href="#openings"
                    className="inline-flex items-center px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    View Open Positions
                  </a>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <div className="relative overflow-hidden rounded-xl blue-tint-overlay">
                    <img
                      src={careerImage}
                      alt="Career at Rebel Foods"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Why Join Us?
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                  More than just a job - a chance to make a difference
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="openings" className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Open Positions
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                  Find your perfect role and start your journey with us
                </p>
              </SectionReveal>

              <div className="max-w-3xl mx-auto space-y-4">
                {openings.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-card/80 transition-colors cursor-pointer"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {job.department} • {job.location}
                      </p>
                    </div>
                    <span className="text-foreground font-medium group-hover:translate-x-2 transition-transform">
                      Apply →
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Culture Section */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Life at Rebel
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Rebel Foods, we foster a culture of innovation, collaboration, and continuous learning. Our diverse team of 5000+ employees across 10+ countries works together to create memorable food experiences for millions of customers.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BeARebel;
