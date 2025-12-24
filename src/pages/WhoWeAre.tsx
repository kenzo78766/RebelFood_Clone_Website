import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Dynamic content arrays for hero section
const heroParagraphs = [
  "We are a network of 4000+ Internet Restaurants across 450+ Kitchens spread through 70+ cities across 10 countries serving 2M+ customers.",
  "Simplifying cooking process of complicated meals, removal of a skill set, simplification of ingredients, and automated dispensing. And that's just one part of the innovations at REBEL.",
  "We believe that there is no substitute for good produce, so, all our sourcing happens with stringent parameters. It's either extraordinary or nothing at all.",
  "A tech based on latest microservice solutions for managing multi-channel ordering. Our brand-wise polygon helps customise reach and scalability of brands independently without any constraint."
];

const brainIcons = [
  { 
    dots: [
      { x: 50, y: 20, size: 'large', color: '#6366f1' },
      { x: 80, y: 40, size: 'medium', color: '#8b5cf6' },
      { x: 30, y: 60, size: 'small', color: '#a855f7' },
      { x: 70, y: 75, size: 'small', color: '#6366f1' }
    ]
  },
  {
    dots: [
      { x: 45, y: 25, size: 'medium', color: '#8b5cf6' },
      { x: 75, y: 35, size: 'large', color: '#6366f1' },
      { x: 25, y: 55, size: 'small', color: '#a855f7' },
      { x: 65, y: 70, size: 'medium', color: '#6366f1' }
    ]
  },
  {
    dots: [
      { x: 40, y: 30, size: 'small', color: '#a855f7' },
      { x: 70, y: 25, size: 'medium', color: '#8b5cf6' },
      { x: 35, y: 65, size: 'large', color: '#6366f1' },
      { x: 80, y: 60, size: 'small', color: '#6366f1' }
    ]
  }
];

// Hero section logos (4 different brand logos)
const heroLogos = [
  "https://www.rebelfoods.com/uploads/top_content/7292445301640336091who_we_are_logo1.png",
  "https://www.rebelfoods.com/uploads/top_content/7722041331640336220who_we_are_logo2.png",
  "https://www.rebelfoods.com/uploads/top_content/8143932841640336153who_we_are_logo3.png",
  "https://www.rebelfoods.com/uploads/top_content/3035806281640336198who_we_are_logo4.png"
];

const timelineData = [
  {
    year: "2011",
    title: "Single Brand QSR", 
    description: "Founded in the year 2011, we launched Faasos, a physical restaurant chain with online ordering facilities.",
    image: "https://www.rebelfoods.com/uploads/site/7169578981639978598single_brand_QSR_desk.png"
  },
  {
    year: "2015",
    title: "Single Brand Cloud Kitchen",
    description: "Started our journey of adapting to the cloud kitchen format with Faasos being our first prototype.",
    image: "https://www.rebelfoods.com/uploads/site/3988622361639978702single_brand_cloud_kitchen_desk.png"
  },
  {
    year: "2016", 
    title: "Multi-brand cloud kitchen",
    description: "After careful consideration and research, we launched our multi-brand cloud kitchen with our brands; Behrouz Biryani, Ovenstory, Firangi Bake, Mandarin Oak and Sweet Truth.",
    image: "https://www.rebelfoods.com/uploads/site/4873999401646215020creative-2.png",
    logos: [
      "https://www.rebelfoods.com/uploads/slider/8106707051639935886faasos.png",
      "https://www.rebelfoods.com/uploads/slider/2140601411639976805behrous_logo.png", 
      "https://www.rebelfoods.com/uploads/slider/7439409671639976948oven_story.png",
      "https://www.rebelfoods.com/uploads/slider/7638638771646214028st-logo-01.png",
      "https://www.rebelfoods.com/uploads/slider/5888889171639977573good_bowl_logo.png",
      "https://www.rebelfoods.com/uploads/slider/9561659751639977474lunch-box_logo.png",
      "https://www.rebelfoods.com/uploads/slider/6721655121639977164firangi_bake_logo.png",
      "https://www.rebelfoods.com/uploads/slider/5378165741639977705biryani_logo.png"
    ]
  },
  {
    year: "2019",
    title: "Rebel Launcher", 
    description: "Opened up our platform for other food and beverage brands to help them scale up and grow within our operating system.",
    image: "https://www.rebelfoods.com/uploads/site/7759340141649749489Rebel banner revised.jpg",
    logos: [
      "https://www.rebelfoods.com/uploads/slider/6378506231648219911Wendys-logo.png",
      "https://www.rebelfoods.com/uploads/slider/8531445821648220080Nude-Bowls-Logo.png",
      "https://www.rebelfoods.com/uploads/slider/7475939501648220191500CP-logo%20(1).png",
      "https://www.rebelfoods.com/uploads/slider/9543642781648568459Bros-Fried-Chicken.png",
      "https://www.rebelfoods.com/uploads/slider/5378165741639977705biryani_logo.png",
      "https://www.rebelfoods.com/uploads/slider/8045835141649749093FB%20-%20White%20Logo.png"
    ]
  },
  {
    year: "2020",
    title: "EatSure",
    description: "Launched Foodcourt on an App experience with EatSure. The app allows ordering from multiple trusted restaurants in a single order without paying any additional delivery charges or compromising on ordering preferences.",
    image: "https://www.rebelfoods.com/uploads/site/1209394601649839623creative-2 copy.jpg"
  },
  {
    year: "2021", 
    title: "Brand Investments and Expansion",
    description: "We invested and partnered with brands like Biryani Blues and Zomoz to address more food missions and grow them on the Rebel Network. We also entered 6 new SEA countries through a unique association with foodpanda.",
    image: "https://www.rebelfoods.com/uploads/site/6018350181650434738Rebel website map banner.jpg",
    logos: [
      "https://www.rebelfoods.com/uploads/slider/2148823581652083201Smoor-Logo%20(1).png",
      "https://www.rebelfoods.com/uploads/slider/1108513951650434344Zomoz%20logo%20150x150.png"
    ]
  }
];

const teamTestimonials = [
  {
    name: "Vinayak Yadav",
    role: "Executive - Human Resources", 
    quote: "Communication is the key. Since the time I have joined Rebel Foods, I see that the company has been moving to a more agile structure and communication between teams team has been ever increasing.",
    image: "https://www.rebelfoods.com/uploads/slider/7585253501639978243VinayakYadav.png"
  },
  {
    name: "Aashiya Khan",
    role: "Social Media Manager - Global",
    quote: "Life is not about the right opportunities, but it's about handling the opportunities right. So, if you have a dream, what's holding it back? Go live your dream and support someone else's dream as well.",
    image: "https://www.rebelfoods.com/uploads/slider/9587054111639978392AashiyaKhan.png"
  },
  {
    name: "Rohit Kasbe", 
    role: "General Manager - Audit",
    quote: "I learnt to pay more attention to team work and evaluate the strength of a team rather than just an individual.",
    image: "https://www.rebelfoods.com/uploads/slider/4229417271639978458RohitKasbe.png"
  }
];

const WhoWeAre = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typewriterRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentText = heroParagraphs[currentContentIndex];
    setDisplayedText('');
    setIsTyping(true);
    
    let charIndex = 0;
    const typeWriter = () => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
        typewriterRef.current = setTimeout(typeWriter, 30); // 30ms per character
      } else {
        setIsTyping(false);
        // Wait 2 seconds then start next paragraph
        setTimeout(() => {
          setCurrentContentIndex((prev) => (prev + 1) % heroParagraphs.length);
        }, 2000);
      }
    };
    
    typeWriter();
    
    return () => {
      if (typewriterRef.current) clearTimeout(typewriterRef.current);
    };
  }, [currentContentIndex]);
  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#2a2a2a' }}>
        <Header />
        <main className="pt-20">
          {/* Hero Section - Purple outline text + stats + brain icon */}
          <section className="py-20 lg:py-32" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <SectionReveal>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
                    <span 
                      className="text-transparent"
                      style={{
                        WebkitTextStroke: '2px #6366f1',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Transform How<br />
                      Food is<br />
                      Experienced
                    </span>
                  </h1>
                  <div className="text-lg text-white font-light mb-8 max-w-lg min-h-[120px]">
                    {displayedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <div className="flex justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, type: "spring", stiffness: 100 }}
                      className="relative w-96 h-96"
                    >
                      {/* Main circle outline */}
                      <div className="w-96 h-96 border-2 border-gray-500 rounded-full flex items-center justify-center relative">
                        
                        {/* Head outline */}
                        <div className="relative w-48 h-36">
                          {/* Head shape outline */}
                          <svg className="w-full h-full" viewBox="0 0 192 144" fill="none">
                            <path 
                              d="M96 10 C130 10, 150 40, 150 80 C150 120, 130 130, 96 130 C62 130, 42 120, 42 80 C42 40, 62 10, 96 10 Z" 
                              stroke="#9ca3af" 
                              strokeWidth="2" 
                              fill="none"
                            />
                            {/* Neck */}
                            <path 
                              d="M80 130 L80 140 L112 140 L112 130" 
                              stroke="#9ca3af" 
                              strokeWidth="2" 
                              fill="none"
                            />
                          </svg>
                        </div>

                        {/* Purple location pin */}
                        <motion.div
                          initial={{ scale: 0, y: -20 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                          className="absolute -top-6 right-16"
                        >
                          <div className="relative">
                            {/* Location pin */}
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                              <path 
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
                                fill="#6366f1"
                                stroke="#6366f1"
                                strokeWidth="1"
                              />
                              <circle cx="12" cy="9" r="3" fill="white" />
                            </svg>
                            
                            {/* Pulse effect */}
                            <motion.div 
                              className="absolute inset-0 rounded-full bg-indigo-500"
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0, 0.3]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                        </motion.div>

                        {/* Connection lines from pin to head */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            d="M280 140 Q320 180 200 200"
                            stroke="#6366f1"
                            strokeWidth="1"
                            strokeDasharray="3,3"
                            fill="none"
                            opacity="0.6"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className="space-y-20">
                {timelineData.map((item, index) => {
                  const isLeft = index % 2 === 1; // Start from RIGHT (2011 on right)
                  
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${
                        !isLeft ? 'lg:[&>*:first-child]:order-2' : ''
                      }`}
                    >
                      {/* Text Content */}
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg"
                        >
                          <h3 className="text-2xl font-semibold">
                            {item.year}: {item.title}
                          </h3>
                        </motion.div>
                        <p className="text-white font-light leading-relaxed text-lg">
                          {item.description}
                        </p>
                        
                        {/* Brand Logos Grid */}
                        {item.logos && (
                          <div className="grid grid-cols-4 gap-4 mt-8">
                            {item.logos.map((logo, logoIndex) => (
                              <motion.div
                                key={logoIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: logoIndex * 0.1 }}
                                className="bg-white rounded-lg p-4 flex items-center justify-center"
                              >
                                <img
                                  src={logo}
                                  alt={`Brand logo ${logoIndex + 1}`}
                                  className="h-12 w-auto object-contain"
                                  loading="lazy"
                                />
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto object-cover rounded-lg"
                          loading="lazy"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Team Section - Simple 2 column CTA */}
          <section className="py-20" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link to="/rebel-team" className="block group">
                    <h2 
                      className="text-4xl lg:text-5xl font-light mb-4 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        WebkitTextStroke: '2px #6366f1',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Meet Team Rebel &gt;
                    </h2>
                    <p className="text-white font-light text-lg">
                      A well-knit group of go-getters who uphold the #TheRebelSpirit in everything we do.
                    </p>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link to="/working-at-rebel" className="block group">
                    <h2 
                      className="text-4xl lg:text-5xl font-light mb-4 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        WebkitTextStroke: '2px #6366f1',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Rebel Culture &gt;
                    </h2>
                    <p className="text-white font-light text-lg">
                      We are REBEL. Never shy of redefining the norm, never shy of changes, just never shy.
                    </p>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Team Testimonials Carousel */}
          <section className="py-20" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-6xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {teamTestimonials.map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] px-4">
                          <div className="flex justify-center">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-80 h-80 object-cover rounded-lg"
                              loading="lazy"
                            />
                          </div>
                          <div className="space-y-6">
                            <p className="text-white text-lg font-light leading-relaxed">
                              "{testimonial.quote}"
                            </p>
                            <div>
                              <p 
                                className="text-xl font-semibold"
                                style={{ color: '#6366f1' }}
                              >
                                {testimonial.name}
                              </p>
                              <p 
                                className="text-lg"
                                style={{ color: '#6366f1' }}
                              >
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Custom styled arrows matching screenshot */}
                  <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 border-2 border-white/30 bg-transparent hover:bg-white/10 text-white rounded-full" />
                  <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 border-2 border-white/30 bg-transparent hover:bg-white/10 text-white rounded-full" />
                </Carousel>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link to="/franchise" className="block group">
                    <h2 
                      className="text-4xl lg:text-5xl font-light mb-4 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        WebkitTextStroke: '2px #6366f1', 
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Franchise with Rebel &gt;
                    </h2>
                    <p className="text-white font-light text-lg">
                      Scale new heights of entrepreneurship with expert tech & culinary innovation and advanced software.
                    </p>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link to="/careers" className="block group">
                    <h2 
                      className="text-4xl lg:text-5xl font-light mb-4 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        WebkitTextStroke: '2px #6366f1',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Join us as a disruptor &gt;
                    </h2>
                    <p className="text-white font-light text-lg">
                      Come, be a Rebel and revolutionize the global food industry, today!
                    </p>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default WhoWeAre;