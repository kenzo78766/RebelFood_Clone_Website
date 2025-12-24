import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const timeline = [
  {
    year: '2011',
    title: 'Single Brand QSR',
    description: 'Founded in the year 2011, we launched Faasos, a physical restaurant chain with online ordering facilities.',
  },
  {
    year: '2015',
    title: 'Single Brand Cloud Kitchen',
    description: 'Started our journey of adapting to the cloud kitchen format with Faasos being our first prototype.',
  },
  {
    year: '2016',
    title: 'Multi-brand cloud kitchen',
    description: 'After careful consideration and research, we launched our multi-brand cloud kitchen with our brands; Behrouz Biryani, Ovenstory, Firangi Bake, Mandarin Oak and Sweet Truth.',
  },
  {
    year: '2019',
    title: 'Rebel Launcher',
    description: 'Opened up our platform for other food and beverage brands to help them scale up and grow within our operating system.',
  },
  {
    year: '2020',
    title: 'EatSure',
    description: 'Launched Foodcourt on an App experience with EatSure. The app allows ordering from multiple trusted restaurants in a single order without paying any additional delivery charges.',
  },
  {
    year: '2021',
    title: 'Brand Investments and Expansion',
    description: 'We invested and partnered with brands like Biryani Blues and Zomoz to address more food missions and grow them on the Rebel Network. We also entered 6 new SEA countries through a unique association with foodpanda.',
  },
];

const testimonials = [
  {
    name: 'Vinayak Yadav',
    role: 'Executive - Human Resources',
    quote: 'Communication is the key. Since the time I have joined Rebel Foods, I see that the company has been moving to a more agile structure and communication between teams has been ever increasing.',
  },
  {
    name: 'Aashiya Khan',
    role: 'Social Media Manager - Global',
    quote: '"Life is not about the right opportunities, but it\'s about handling the opportunities right" So, if you have a dream, what\'s holding it back? Go live your dream and support someone else\'s dream as well.',
  },
  {
    name: 'Rohit Kasbe',
    role: 'General Manager - Audit',
    quote: 'I learnt to pay more attention to team work and evaluate the strength of a team rather than just an individual.',
  },
];

const WhoWeAre = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Transform How</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Food is</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Experienced</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    We are a network of 4000+ Internet Restaurants across 450+ Kitchens spread through 70+ cities across 10 countries serving 2M+ customers.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Key Points */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <SectionReveal delay={0}>
                  <div className="text-center p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Simplifying cooking process of complicated meals, removal of a skillset, simplification of ingredients, and automated dispensing. And that's just one part of the innovations at REBEL.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal delay={0.1}>
                  <div className="text-center p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We believe that there is no substitute for good produce, so, all our sourcing happens with stringent parameters. It's either extraordinary or nothing at all.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal delay={0.2}>
                  <div className="text-center p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      A tech based on latest microservice solutions for managing multi-channel ordering. Our brand-wise polygon helps customise reach and scalability of brands independently.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal delay={0.3}>
                  <div className="text-center p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Our patented machinery and automation allow uniformity and increased efficiency through all kitchens.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
                  Our Journey
                </h2>
              </SectionReveal>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative grid md:grid-cols-2 gap-8 ${
                        index % 2 === 0 ? '' : 'md:direction-rtl'
                      }`}
                    >
                      <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                        <div className="bg-card rounded-xl p-6">
                          <span className="text-accent-coral font-bold text-lg">{item.year}</span>
                          <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      <div className={`hidden md:block ${index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}`} />
                      
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-accent-coral rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-background" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Links */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 gap-8">
                <SectionReveal>
                  <Link to="/rebel-team" className="group block bg-card rounded-xl p-8 hover:bg-card/80 transition-colors">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      Meet Team Rebel →
                    </h3>
                    <p className="text-muted-foreground">
                      A well-knit group of go-getters who uphold the #TheRebelSpirit in everything we do.
                    </p>
                  </Link>
                </SectionReveal>
                <SectionReveal delay={0.1}>
                  <Link to="/working-at-rebel" className="group block bg-card rounded-xl p-8 hover:bg-card/80 transition-colors">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      Rebel Culture →
                    </h3>
                    <p className="text-muted-foreground">
                      We are REBEL. Never shy of redefining the norm, never shy of changes, just never shy.
                    </p>
                  </Link>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
                  What Rebels Say
                </h2>
              </SectionReveal>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-8"
                  >
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Franchise CTA */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <Link to="/franchise" className="group block bg-card rounded-xl p-8 max-w-2xl mx-auto text-center hover:bg-card/80 transition-colors">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Franchise with Rebel →
                  </h3>
                  <p className="text-muted-foreground">
                    Scale new heights of entrepreneurship with expert tech & culinary innovation and advanced software.
                  </p>
                </Link>
              </SectionReveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default WhoWeAre;
