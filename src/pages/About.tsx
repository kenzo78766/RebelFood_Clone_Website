import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const newsItems = [
  {
    title: 'Rebel Foods raises $175M in Series F funding',
    date: 'Dec 2024',
    source: 'TechCrunch',
  },
  {
    title: 'Expansion into 5 new countries announced',
    date: 'Nov 2024',
    source: 'Bloomberg',
  },
  {
    title: 'Rebel Foods hits 4000 cloud kitchens milestone',
    date: 'Oct 2024',
    source: 'Economic Times',
  },
  {
    title: 'New AI-powered menu optimization launched',
    date: 'Sep 2024',
    source: 'Forbes',
  },
];

const pressReleases = [
  {
    title: 'Rebel Foods Q3 2024 Financial Results',
    date: 'December 15, 2024',
  },
  {
    title: 'Launch of Rebel Launcher 2.0',
    date: 'November 20, 2024',
  },
  {
    title: 'Partnership with Major Delivery Platforms',
    date: 'October 10, 2024',
  },
];

const faqs = [
  {
    question: 'What is Rebel Foods?',
    answer: 'Rebel Foods is the world\'s largest internet restaurant company. We operate cloud kitchens across 10+ countries, serving millions of customers through our portfolio of 45+ food brands.',
  },
  {
    question: 'How can I order food from Rebel Foods brands?',
    answer: 'You can order from any of our brands through popular food delivery platforms like Swiggy, Zomato, UberEats, or directly through the brand\'s website/app in select markets.',
  },
  {
    question: 'How do I apply for a franchise?',
    answer: 'Visit our Franchise page and fill out the application form. Our team will review your application and get back to you within 5-7 business days.',
  },
  {
    question: 'Does Rebel Foods have job openings?',
    answer: 'Yes! We\'re always looking for talented individuals. Check out our Careers page for current openings across engineering, operations, marketing, and more.',
  },
  {
    question: 'Which countries does Rebel Foods operate in?',
    answer: 'We currently operate in India, Indonesia, UAE, UK, Singapore, Malaysia, Thailand, Philippines, Bangladesh, and Saudi Arabia, with plans to expand further.',
  },
];

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    About Rebel
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Get the latest news, press releases, and information about Rebel Foods - the world's largest internet restaurant company.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* News Section */}
          <section id="news" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                  In The News
                </h2>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-6">
                {newsItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-xl p-6 hover:bg-card/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{item.source}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <span className="text-foreground group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Press Releases */}
          <section id="press" className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                  Press Releases
                </h2>
              </SectionReveal>

              <div className="max-w-3xl space-y-4">
                {pressReleases.map((release, index) => (
                  <motion.div
                    key={release.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-center justify-between p-6 bg-card rounded-xl hover:bg-card/80 transition-colors cursor-pointer"
                  >
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                        {release.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{release.date}</span>
                    </div>
                    <span className="text-foreground group-hover:translate-x-1 transition-transform">→</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Find answers to common questions about Rebel Foods
                </p>
              </SectionReveal>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-bold text-foreground">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Have questions or want to learn more? We'd love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:info@rebelfoods.com"
                      className="px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
                    >
                      Email Us
                    </a>
                    <a
                      href="mailto:press@rebelfoods.com"
                      className="px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
                    >
                      Press Inquiries
                    </a>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Privacy Section */}
          <section id="privacy" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Privacy Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At Rebel Foods, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For full details about our privacy practices, please contact us at privacy@rebelfoods.com.
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

export default About;
