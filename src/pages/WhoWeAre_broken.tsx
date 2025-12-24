import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Original site assets (hotlinked from rebelfoods.com)
const heroLogos = [
  "https://www.rebelfoods.com/uploads/top_content/7292445301640336091who_we_are_logo1.png",
  "https://www.rebelfoods.com/uploads/top_content/8143932841640336153who_we_are_logo3.png", 
  "https://www.rebelfoods.com/uploads/top_content/3035806281640336198who_we_are_logo4.png",
  "https://www.rebelfoods.com/uploads/top_content/7722041331640336220who_we_are_logo2.png"
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
    image: "https://www.rebelfoods.com/uploads/site/4873999401646215020creative-2.png"
  },
  {
    year: "2019",
    title: "Rebel Launcher",
    description: "Opened up our platform for other food and beverage brands to help them scale up and grow within our operating system.", 
    image: "https://www.rebelfoods.com/uploads/site/7759340141649749489Rebel banner revised.jpg"
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
    image: "https://www.rebelfoods.com/uploads/site/6018350181650434738Rebel website map banner.jpg"
  }
];

const ctaCards = [
  {
    title: "Meet Team Rebel",
    description: "Get to know the people behind the revolution",
    link: "/rebel-team",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Rebel Culture", 
    description: "Discover what makes us tick",
    link: "/working-at-rebel",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Franchise with Rebel",
    description: "Join our global network",
    link: "/franchise", 
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Join us as a disruptor",
    description: "Be part of the food revolution",
    link: "/careers",
    gradient: "from-purple-500 to-pink-600"
  }
];

const WhoWeAre = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section - matches original black bg design */}
          <section className="py-20 lg:py-32 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center">
                <SectionReveal>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-white">
                    Transform How Food is <br />
                    <span className="text-white">Experienced</span>
                  </h1>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 font-light">
                    We are a network of 4000+ Internet Restaurants across 450+ Kitchens spread through 70+ cities across 10 countries serving 2M+ customers.
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed max-w-4xl mx-auto mb-12 font-light">
                    Simplifying cooking process of complicated meals, removal of a skill set, simplification of ingredients, and automated dispensing. And that's just one part of the innovations at REBEL.
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed max-w-4xl mx-auto mb-12 font-light">
                    We believe that there is no substitute for good produce, so, all our sourcing happens with stringent parameters. It's either extraordinary or nothing at all.
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed max-w-4xl mx-auto mb-16 font-light">
                    A tech based on latest microservice solutions for managing multi-channel ordering. Our brand-wise polygon helps customise reach and scalability of brands independently without any constraint. Our patented machinery and automation allow uniformity and increased efficiency through all kitchens.
                  </p>
                </SectionReveal>

                {/* Hero Logos */}
                <SectionReveal delay={0.2}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {heroLogos.map((logo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-center p-4"
                      >
                        <img
                          src={logo}
                          alt={`Hero logo ${index + 1}`}
                          className="h-16 w-auto object-contain"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>


          {/* Timeline Section */}
          <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-white">
                  Our Journey
                </h2>
              </SectionReveal>
              
              <div className="space-y-16">
                {timelineData.map((item, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${
                        isEven ? '' : 'lg:[&>*:first-child]:order-2'
                      }`}
                    >
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="inline-block"
                        >
                          <span className="text-6xl font-bold text-accent-coral">
                            {item.year}
                          </span>
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-light text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg font-light">
                          {item.description}
                        </p>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto object-contain rounded-2xl"
                          loading="lazy"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Cards Section */}
          <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {ctaCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      to={card.link}
                      className={`block bg-gradient-to-br ${card.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300`}
                    >
                      <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform duration-200">
                        {card.title} &gt;
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {card.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
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