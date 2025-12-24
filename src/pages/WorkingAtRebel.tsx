import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';

const rebelValues = [
  "We Always Think 'Customer First'",
  "We Take Ownership And Put The Enterprise First",
  "We Challenge The Status Quo And Simplify",
  "We Make Every Penny Count",
  "We Are Transparent And Build Trust",
  "We Aim For The Highest Standards And Keep Raising The Bar",
  "We Think Big And Long Term"
];

const testimonials = [
  {
    name: "Vinayak Yadav",
    role: "Executive - Human Resources",
    image: "https://www.rebelfoods.com/uploads/slider/7585253501639978243VinayakYadav.png",
    quote: "Communication is the key. Since the time I have joined Rebel Foods, I see that the company has been moving to a more agile structure and communication between teams team has been ever increasing."
  },
  {
    name: "Aashiya Khan",
    role: "Social Media Manager - Global",
    image: "https://www.rebelfoods.com/uploads/slider/9587054111639978392AashiyaKhan.png",
    quote: "\"Life is not about the right opportunities, but it's about handling the opportunities right\" So, if you have a dream, what's holding it back? Go live your dream and support someone else's dream as well."
  },
  {
    name: "Rohit Kasbe",
    role: "General Manager - Audit",
    image: "https://www.rebelfoods.com/uploads/slider/4229417271639978458RohitKasbe.png",
    quote: "I learnt to pay more attention to team work and evaluate the strength of a team rather than just an individual."
  }
];

const WorkingAtRebel = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Working At <span className="text-accent">Rebel</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                We garner an open, transparent and encouragement led culture where everyone is actively trying to stand true to the Rebel Values.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Rebel Culture Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                The Rebel Culture
              </h2>
              <div className="max-w-4xl">
                <p className="text-lg text-muted-foreground mb-6">
                  We are REBEL. Never shy of redefining the norm, never shy of changes, just never shy. We are a bunch of highly motivated people who share a common goal. Everyone is empowered to experiment with the way they choose to work.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We garner an open, transparent and encouragement led culture where everyone is actively trying to stand true to the five Rebel Values. Our organizational culture attracts customers and qualified employees, and we enjoy an interesting mix of people.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1f8BsKluXEu_Ey04iFoFtG1ktoBs1-YRD/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline font-semibold"
                >
                  Click here to Understand the Culture at Rebel Foods →
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Rebel Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Rebel Values
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rebelValues.map((value, index) => (
                <SectionReveal key={index} delay={index * 0.1}>
                  <motion.div 
                    className="p-6 bg-card border border-border rounded-xl"
                    whileHover={{ scale: 1.02, borderColor: 'hsl(var(--accent))' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent font-bold text-lg mr-3">{index + 1}.</span>
                    <span className="text-foreground font-medium">{value}</span>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Related Blogs
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <SectionReveal key={index} delay={index * 0.2}>
                  <div className="bg-card border border-border rounded-2xl p-6 text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                    />
                    <p className="text-muted-foreground mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <h4 className="text-foreground font-bold">{testimonial.name}</h4>
                    <p className="text-accent text-sm">{testimonial.role}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <SectionReveal>
                <Link 
                  to="/franchise"
                  className="block p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Franchise with Rebel &gt;
                  </h3>
                  <p className="text-muted-foreground">
                    Scale new heights of entrepreneurship with expert tech & culinary innovation and advanced software.
                  </p>
                </Link>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <a 
                  href="https://www.rebelfoods.com/join-our-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Join us as a disruptor &gt;
                  </h3>
                  <p className="text-muted-foreground">
                    Come, be a Rebel and revolutionize the global food industry, today!
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

export default WorkingAtRebel;
