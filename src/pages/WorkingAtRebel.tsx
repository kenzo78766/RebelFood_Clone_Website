import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { useState } from 'react';

const rebelValues = [
  {
    title: "We Always Think 'Customer First'",
    description: "Being crazy about customer experience. Keeping the customer's needs and aspirations in mind we deploy new products, innovations and developments in the company.",
    image: "https://www.rebelfoods.com/uploads/slider/2119306781672814931We Always Think 'Customer First'.jpg"
  },
  {
    title: "We Take Ownership And Put The Enterprise First", 
    description: "Care for people comes over everything else, in Rebel Foods, we love our people. If you are reading this, we totally love you too.",
    image: "https://www.rebelfoods.com/uploads/slider/4697355011672815014We Take Ownership And Put The Enterprise First.jpg"
  },
  {
    title: "We Challenge The Status Quo And Simplify",
    description: "Taking responsibility for and resolving problems with a creative approach to invent and discover new ways of doing things.",
    image: "https://www.rebelfoods.com/uploads/slider/6687905211672815046We Challenge The Status Quo And Simplify.jpg"
  },
  {
    title: "We Make Every Penny Count",
    description: "With a free hand to experiment, both in technology and culinary arts, we never let innovation take a back seat.",
    image: "https://www.rebelfoods.com/uploads/slider/5336046861672815066We Make Every Penny Count.jpg"
  },
  {
    title: "We Are Transparent And Build Trust",
    description: "Thriving on the ability to maximise our potential and deliver promising results.",
    image: "https://www.rebelfoods.com/uploads/slider/95426664016728159143 (3).jpg"
  },
  {
    title: "We Aim For The Highest Standards And Keep Raising The Bar",
    description: "Unfazed by traditional belief and style of doing things, we deliver solutions that stand the test of time.",
    image: "https://www.rebelfoods.com/uploads/slider/4726066151672815104We Aim For The Highest Standards And Keep Raising The Bar.jpg"
  },
  {
    title: "We Think Big And Long Term",
    description: "Thinking ahead and planning strategically to build a sustainable future for our customers and teams.",
    image: "https://www.rebelfoods.com/uploads/slider/1104601561672815130We Think Big And Long Term.jpg"
  }
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
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text" style={{WebkitTextStroke: '2px #3b82f6', WebkitTextFillColor: 'transparent'}}>
                  Working At Rebel
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl">
                We garner an open, transparent and encouragement led culture where everyone is actively trying to stand true to the Rebel Values.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* The Rebel Culture Video Section - Hidden initially, Split Slide on scroll */}
        <section className="py-20 bg-gray-900 mt-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileNotInView={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                The Rebel Culture
              </h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="bg-black rounded-2xl overflow-hidden mb-8">
                  <video
                    className="w-full aspect-video"
                    controls
                    poster="/placeholder.svg"
                    preload="metadata"
                  >
                    <source src="https://www.rebelfoods.com/videos/Linkedin-Finalrender.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="text-center space-y-6">
                  <p className="text-lg text-white/90 leading-relaxed">
                    We are REBEL. Never shy of redefining the norm, never shy of changes, just never shy. We are a bunch of highly motivated people who share a common goal. Everyone is empowered to experiment with the way they choose to work.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    We garner an open, transparent and encouragement led culture where everyone is actively trying to stand true to the five Rebel Values. Our organizational culture attracts customers and qualified employees, and we enjoy an interesting mix of people.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1f8BsKluXEu_Ey04iFoFtG1ktoBs1-YRD/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border border-accent-coral text-accent-coral hover:bg-accent-coral hover:text-white font-semibold rounded-full transition-colors"
                  >
                    Click here to Understand the Culture at Rebel Foods →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rebel Values Section - Interactive carousel */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Rebel Values
              </h2>
            </SectionReveal>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Value Content */}
                <motion.div
                  key={currentValue}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-blue-600 rounded-full px-8 py-4 w-fit">
                    <span className="text-white font-bold text-lg">{currentValue + 1}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {rebelValues[currentValue].title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {rebelValues[currentValue].description}
                  </p>
                </motion.div>

                {/* Value Image */}
                <motion.div
                  key={`image-${currentValue}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img
                    src={rebelValues[currentValue].image}
                    alt={rebelValues[currentValue].title}
                    className="w-full h-96 object-cover rounded-2xl"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Value Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {rebelValues.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValue(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === currentValue 
                        ? 'bg-accent-coral text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Blogs / Testimonials Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Related Blogs
              </h2>
            </SectionReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <SectionReveal key={index} delay={index * 0.2}>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                      loading="lazy"
                    />
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <h4 className="text-gray-900 font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-accent-coral text-sm font-medium">{testimonial.role}</p>
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
                <a 
                  href="/franchise"
                  className="block p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-blue-500 mb-3 transition-colors">
                    Franchise with Rebel &gt;
                  </h3>
                  <p className="text-muted-foreground">
                    Scale new heights of entrepreneurship with expert tech & culinary innovation and advanced software.
                  </p>
                </a>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <a 
                  href="https://www.rebelfoods.com/join-our-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-blue-500 mb-3 transition-colors">
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