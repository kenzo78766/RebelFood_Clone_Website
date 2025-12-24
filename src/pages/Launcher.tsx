import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';

const heroImage = 'https://www.rebelfoods.com/images/rebel_launcher/LauncherDesktop.png';
const processImage = 'https://www.rebelfoods.com/uploads/site/2512473961649749566Rebel%20banner%20revised.jpg';
const cultureImage = 'https://www.rebelfoods.com/uploads/site/6723479881640332366Careers.png';

const growthBenefits = [
  {
    title: 'Scale across India and globally',
    icon: 'https://www.rebelfoods.com/images/rebel_launcher/launcher_global.svg',
  },
  {
    title: 'Gain marketing intelligence',
    icon: 'https://www.rebelfoods.com/images/rebel_launcher/launcher_intelligence.svg',
  },
  {
    title: 'Learn from our culinary expertise',
    icon: 'https://www.rebelfoods.com/images/rebel_launcher/launcher_expertise.svg',
  },
  {
    title: 'All backed by our full-stack technology suite',
    icon: 'https://www.rebelfoods.com/images/rebel_launcher/launcher_techology.svg',
  },
];

const articles = [
  {
    title: 'Introducing Rebel Launcher: Launchpad for Entrepreneurs with Delightful Food Brands',
    excerpt:
      'Running Rebel Foods for 7+ years has taught us many lessons — from small realizations to massive operational wins.',
    image:
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=80',
    href: 'https://spirit.rebelfoods.com/topic/introducing-rebel-launcher-launchpad-for-entrepreneurs-with-delightful-food-brands',
  },
  {
    title: 'The Slay Story',
    excerpt:
      'An inside peek into how Rebel opened its unique operating system in Launcher Phase for Slay Coffee.',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80',
    href: 'https://spirit.rebelfoods.com/topic/the-slay-story',
  },
];

const ctaCards = [
  {
    title: 'Get in touch with us >',
    description: 'If you are looking to tackle some of the biggest challenges in the F&B industry.',
    href: 'https://www.rebelfoods.com/reach-out',
  },
  {
    title: 'Rebel Spirit: The Rebel Blog >',
    description: 'Know more about the thought process of a true Rebel.',
    href: 'https://spirit.rebelfoods.com/',
  },
];

const revealVariants = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -70 : 70 },
  visible: { opacity: 1, x: 0 },
});

const Launcher = () => {
  return (
    <PageTransition>
      <Header />
      <main className="bg-[#1a1a1a] text-white pt-20">
        {/* Hero */}
        <section className="bg-[#1a1a1a] py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div
                variants={revealVariants('left')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px #ff5a4f',
                    textShadow: '0 0 20px rgba(255, 90, 79, 0.3)'
                  }}
                >
                  Rebel
                  <br />
                  Launcher
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-xl">
                  Scale your brand globally with our operating system of culinary innovation, robust supply chain, and technology.
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-end"
                variants={revealVariants('right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <img
                  src={heroImage}
                  alt="Rebel Launcher rocket"
                  className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-[#1a1a1a]">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="overflow-hidden rounded-3xl"
                variants={revealVariants('left')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, ease: 'easeOut'}}
              >
                <img
                  src={processImage}
                  alt="Brand partners and kitchen"
                  className="w-full object-cover h-[300px] md:h-[380px] lg:h-[450px]"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                variants={revealVariants('right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-5 md:space-y-6"
              >
                <div className="inline-block bg-[#e85649] rounded-full px-8 py-3 md:px-10 md:py-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">The Process</h3>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  We provide our entire machinery for brand's to achieve their maximum potential. We invest our know-how,
                  systems, culinary knowledge, supply chain synergies & our kitchen network to put you on an accelerated
                  growth path.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Culture */}
        <section className="py-20 md:py-28 bg-[#1a1a1a]">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-5 md:space-y-6 order-2 lg:order-1"
                variants={revealVariants('left')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="inline-block bg-[#e85649] rounded-full px-8 py-3 md:px-10 md:py-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-[0.15em]">Partners Culture</h3>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  Success can only be achieved by aligning with individuals with the right entrepreneurial mindset. We are
                  continuously seeking brands that solve big pain points for consumers at every step of their food journey.
                  SLAY Coffee was born out of an entrepreneur's vision to get hot coffee delivered. After initial success, we
                  scaled the brand to +100 locations within India within 18 months.
                </p>
              </motion.div>

              <motion.div
                variants={revealVariants('right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="overflow-hidden rounded-3xl order-1 lg:order-2"
              >
                <img
                  src={cultureImage}
                  alt="Partners culture"
                  className="w-full object-cover h-[300px] md:h-[380px] lg:h-[450px]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-24 bg-[#1a1a1a]">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-4">
              {growthBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center mb-6">
                    <img src={benefit.icon} alt={benefit.title} className="h-full w-full object-contain" loading="lazy" />
                  </div>
                  <p className="text-base md:text-lg font-medium text-white leading-snug">{benefit.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn more */}
        <section className="py-20 md:py-28 bg-[#1a1a1a]">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[#ff5a4f] mb-12 md:mb-16">Learn more about us by reading</h2>
            </SectionReveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              {articles.map((article, index) => (
                <motion.a
                  key={article.title}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-[#1d1d1d] overflow-hidden hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 space-y-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#ff5a4f] transition-colors duration-300">{article.title}</h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">{article.excerpt}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA cards */}
        <section className="py-20 md:py-24 bg-[#1a1a1a]">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {ctaCards.map((cta, index) => (
                <motion.a
                  key={cta.title}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/15 bg-[#171717] p-8 md:p-10 lg:p-12 transition-all duration-300 hover:border-[#ff5a4f]/50 hover:bg-[#1a1a1a]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff5a4f] group-hover:text-[#ff7a6f] transition-colors duration-300">{cta.title}</h3>
                  <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 leading-relaxed">{cta.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Launcher;
