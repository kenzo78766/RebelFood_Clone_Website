import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Original site assets (hotlinked)
const whatWeDoHeroImg = "https://www.rebelfoods.com/uploads/top_content/9371126441640333832what_we_do.png";
const culinaryImg = "https://www.rebelfoods.com/uploads/site/4113815731639935495what_we_do1.png";
const foodTechImg = "https://www.rebelfoods.com/uploads/site/8135601621639935671what_we_do32x.png";

const statIcons = {
  countries: "https://www.rebelfoods.com/images/what_we_do/countries.svg",
  cities: "https://www.rebelfoods.com/images/what_we_do/city.svg",
  kitchens: "https://www.rebelfoods.com/images/what_we_do/kitchen.svg",
  restaurants: "https://www.rebelfoods.com/images/what_we_do/restaurant.svg",
};

type Brand = {
  name: string;
  logo: string;
  image?: string;
  description: string;
  website?: string;
};

// Content + logos/images extracted from https://www.rebelfoods.com/what-we-do
const brands: Brand[] = [
  {
    name: 'Faasos',
    logo: "https://www.rebelfoods.com/uploads/slider/8106707051639935886faasos.png",
    image: "https://www.rebelfoods.com/uploads/slider/5744828111648129790Faasos-min.png",
    description:
      'At Faasos, we challenge the norm to break the monotony of your daily eating habits. With fusions of exotic flavours in fulfilling wraps that melt boundaries, we constantly unwrap new possibilities and chase ideas that are still under wraps.',
    website: 'https://www.faasos.com/',
  },
  {
    name: 'Behrouz Biryani',
    logo: "https://www.rebelfoods.com/uploads/slider/2140601411639976805behrous_logo.png",
    image: "https://www.rebelfoods.com/uploads/slider/3090962651648129927BB-min%20(1).png",
    description:
      'Redefining biryani by creating a royal experience unlike any other. We imbibe the culinary heritage of the biryani cuisine to create a sumptuous recipe made with choicest of ingredients that makes it worthy of a special occasion.',
    website: 'https://www.behrouzbiryani.com/',
  },
  {
    name: 'Oven Story',
    logo: "https://www.rebelfoods.com/uploads/slider/7439409671639976948oven_story.png",
    image: "https://www.rebelfoods.com/uploads/slider/7210702101648129959OS-min.png",
    description:
      'At Ovenstory we challenge the ordinary & question the mundane to create something Standout with unique flavour offerings and four different cheese bases to suit every palate.',
    website: 'https://www.ovenstory.in/',
  },
  {
    name: 'Mandarin Oak',
    logo: "https://www.rebelfoods.com/uploads/slider/7738081211639977070mandarin_oak%20(1).png",
    image: "https://www.rebelfoods.com/uploads/slider/8645247341648129986MO-min.png",
    description:
      'Chinese food that is sincere with a robust flavour profile that will open up your palate to new experiences. Made with the freshest of ingredients and wok tossed to perfection.',
    website: 'https://www.mandarinoak.com/',
  },
  {
    name: 'Firangi Bake',
    logo: "https://www.rebelfoods.com/uploads/slider/6721655121639977164firangi_bake_logo.png",
    image: "https://www.rebelfoods.com/uploads/slider/8265588981648130012FB-min.png",
    description:
      "Say pasta la vista to your cheesy cravings with Firangi Bake's legendary pastas and global bakes with a Desi twist.",
    website: 'https://www.firangibake.com/',
  },
  {
    name: 'Lunch Box',
    logo: "https://www.rebelfoods.com/uploads/slider/9561659751639977474lunch-box_logo.png",
    image: "https://www.rebelfoods.com/uploads/slider/7832691671648219820LB-min.png",
    description:
      'Celebrating local cuisines that are typically eaten at lunchtime. We wish to evoke a sense of familiarity and nostalgia through every meal.',
  },
  {
    name: 'The Good Bowl',
    logo: "https://www.rebelfoods.com/uploads/slider/5888889171639977573good_bowl_logo.png",
    image: "https://www.rebelfoods.com/uploads/slider/5541994911648130130TGB-min.png",
    description:
      'Our specially curated menu celebrates the uniqueness of various world cuisines in a bowl. Be it fusion, Chinese, or Desi get the best of all worlds in your bowl.',
    website: 'https://www.thegoodbowl.co/',
  },
  {
    name: 'Sweet Truth',
    logo: "https://www.rebelfoods.com/uploads/slider/7638638771646214028st-logo-01.png",
    image: "https://www.rebelfoods.com/uploads/slider/1033749261648130205ST-min.png",
    description:
      'Delicious desserts made with the finest cream cheese and chocolate delivered across multiple Indian cities. You are never too far from your favourite desserts!',
    website: 'https://www.sweettruth.in/',
  },
  {
    name: 'The Biryani Life',
    logo: "https://www.rebelfoods.com/uploads/slider/5378165741639977705biryani_logo.png",
    image: "https://www.rebelfoods.com/uploads/slider/6525718411639977705biryani_life.png",
    description:
      'If Biryani is your bae and you see no other way, become a part of The Biryani life and secure this tasty bond today!',
  },
];

const stats = [
  { number: '10', label: 'Countries', icon: statIcons.countries },
  { number: '70', label: 'Cities', icon: statIcons.cities },
  { number: '450', label: 'Kitchens', icon: statIcons.kitchens },
  { number: '4000', label: 'Internet Restaurants', icon: statIcons.restaurants },
] as const;

const WhatWeDo = () => {
  const [currentBrand, setCurrentBrand] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0); // 1 for next, -1 for prev

  const nextBrand = () => {
    setSlideDirection(1);
    setCurrentBrand((prev) => (prev + 1) % brands.length);
  };

  const prevBrand = () => {
    setSlideDirection(-1);
    setCurrentBrand((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? -300 : 300,
      opacity: 0
    })
  };
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section (matches https://www.rebelfoods.com/what-we-do) */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <SectionReveal>
                  <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-coral to-accent-coral" style={{WebkitTextStroke: '2px #ff6a3d', WebkitTextFillColor: 'transparent'}}>One Kitchen</span>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-coral to-accent-coral" style={{WebkitTextStroke: '2px #ff6a3d', WebkitTextFillColor: 'transparent'}}>Multiple Brands</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      With a common goal to identify different food patterns of the consumer - lunch, dinner, snacks, weekend gatherings and all such food missions, our brands are born as an answer to these food missions.
                    </p>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.15}>
                  <div className="relative">
                    <img
                      src={whatWeDoHeroImg}
                      alt="What we do"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Culinary Innovation + Food Technology */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                <SectionReveal>
                  <img
                    src={culinaryImg}
                    alt="Culinary innovation"
                    className="w-full h-auto object-contain rounded-lg"
                    loading="lazy"
                  />
                </SectionReveal>

                <SectionReveal delay={0.15}>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-accent-coral text-white px-8 py-4 rounded-lg shadow-lg inline-block"
                    >
                      <h2 className="text-2xl lg:text-3xl font-bold">
                        Culinary Innovation
                      </h2>
                    </motion.div>
                    <p className="text-white leading-relaxed text-lg">
                      With our highly equipped innovation centers that allow everyone to explore their hidden culinary genius and deep-dive into the depths of cooking techniques, we let experimentation take the front seat to prepare only the best for foodies across the globe From understanding local preferences to making world-class dishes, our culinary maestros pay close attention to the quality of each ingredient.There is no substitute for good produce and thus we source only the best.
                    </p>
                  </div>
                </SectionReveal>
              </div>

              <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">
                <SectionReveal>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-accent-coral text-white px-8 py-4 rounded-lg shadow-lg inline-block"
                    >
                      <h2 className="text-2xl lg:text-3xl font-bold">
                        Food Technology
                      </h2>
                    </motion.div>
                    <p className="text-white leading-relaxed text-lg">
                      In a world where food and technology are now going hand in hand, we at Rebel had to take it a step further. With the introduction of patented machinery and a highly efficient operating system. We are here to disrupt the norm and change the world of Food Delivery Restaurants. Our systems and new equipment help not only in time management but in standardising the quality of food we serve across the globe.
                    </p>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.15}>
                  <img
                    src={foodTechImg}
                    alt="Food technology"
                    className="w-full h-auto object-contain rounded-lg"
                    loading="lazy"
                  />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                {stats.map((stat, index) => (
                  <SectionReveal key={stat.label} delay={index * 0.08}>
                    <div className="text-center">
                      <img
                        src={stat.icon}
                        alt={stat.label}
                        className="mx-auto mb-4 h-12 w-12"
                        loading="lazy"
                      />
                      <div className="text-5xl md:text-6xl font-bold text-foreground leading-none">
                        {stat.number}
                      </div>
                      <div className="mt-2 text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Brand Carousel with Split Slide Animation */}
          <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                  Our Brands
                </h2>
              </SectionReveal>

              <div className="relative min-h-[500px] overflow-hidden">
                <AnimatePresence initial={false} custom={slideDirection}>
                  <motion.div
                    key={currentBrand}
                    custom={slideDirection}
                    className="absolute inset-0 grid lg:grid-cols-2 gap-12 items-center px-8"
                  >
                    {/* Brand Info - Slides opposite to image */}
                    <motion.div
                      custom={slideDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.4 }
                      }}
                      className="space-y-6 text-white"
                    >
                      <div className="mb-8">
                        <img
                          src={brands[currentBrand].logo}
                          alt={`${brands[currentBrand].name} logo`}
                          className="h-16 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {brands[currentBrand].description}
                      </p>
                      {brands[currentBrand].website && (
                        <div className="mt-8">
                          <a
                            href={brands[currentBrand].website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 border border-accent-coral text-accent-coral hover:bg-accent-coral hover:text-white font-semibold rounded-full transition-colors"
                          >
                            Visit website &gt;
                          </a>
                        </div>
                      )}
                    </motion.div>

                    {/* Brand Food Image - Slides opposite to text */}
                    <motion.div
                      custom={slideDirection}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.4 }
                      }}
                      className="flex items-center justify-center"
                    >
                      {brands[currentBrand].image && (
                        <img
                          src={brands[currentBrand].image}
                          alt={brands[currentBrand].name}
                          className="max-h-96 w-auto object-contain"
                          loading="lazy"
                        />
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Custom styled arrows with Split Slide functionality */}
                <button
                  onClick={prevBrand}
                  className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 border-2 border-white/30 bg-transparent hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextBrand}
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 border-2 border-white/30 bg-transparent hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Brand indicator dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {brands.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSlideDirection(index > currentBrand ? 1 : -1);
                      setCurrentBrand(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentBrand ? 'bg-accent-coral' : 'bg-white/30'
                    }`}
                  />
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

export default WhatWeDo;