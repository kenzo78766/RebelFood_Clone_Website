import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextValue = () => {
    setCurrentValue((prev) => (prev + 1) % rebelValues.length);
  };

  const prevValue = () => {
    setCurrentValue((prev) => (prev - 1 + rebelValues.length) % rebelValues.length);
  };

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

        {/* The Rebel Culture Video Section - Video LEFT, Content RIGHT */}
        <section className="py-20 bg-gray-900 mt-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
              {/* Video - LEFT side */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
              >
                <div className="bg-black rounded-2xl overflow-hidden">
                  <video
                    className="w-full aspect-video"
                    controls
                    autoPlay
                    muted
                    loop
                    poster="/placeholder.svg"
                    preload="metadata"
                  >
                    <source src="https://www.rebelfoods.com/videos/Linkedin-Finalrender.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              {/* Content - RIGHT side */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="bg-blue-600 rounded-[28px] px-6 py-4 w-fit">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">
                      The Rebel Culture
                    </h2>
                  </div>
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
                    className="inline-block px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-full transition-colors"
                  >
                    Click here to Understand the Culture at Rebel Foods
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rebel Values Section - Centered image with navigation arrows */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="bg-blue-600 rounded-[28px] px-8 py-4 w-fit mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Rebel Values
                </h2>
              </div>
            </SectionReveal>

            <div className="relative max-w-5xl mx-auto">
              {/* Main Value Image - Centered with overlay text */}
              <motion.div
                key={currentValue}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={rebelValues[currentValue].image}
                  alt={rebelValues[currentValue].title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                  loading="lazy"
                />
                
                {/* Overlay text on image - like screenshot */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-yellow-500/90 rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center text-white max-w-2xl">
                    <h3 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
                      {rebelValues[currentValue].title}
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows - like screenshot */}
              <button
                onClick={prevValue}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextValue}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicator dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {rebelValues.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValue(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentValue ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Value description below image */}
              <motion.div
                key={`desc-${currentValue}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-8 text-center"
              >
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {rebelValues[currentValue].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Blogs Section - Single testimonial with navigation */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="bg-blue-600 rounded-[28px] px-8 py-4 w-fit mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Related Blogs
                </h2>
              </div>
            </SectionReveal>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Single testimonial card with image left, content right */}
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image - LEFT */}
                <div className="flex justify-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-80 h-80 rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content - RIGHT */}
                <div className="space-y-6 text-white">
                  <p className="text-xl leading-relaxed">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div>
                    <h4 className="text-blue-400 font-bold text-xl">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-blue-300 text-lg">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicator dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
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