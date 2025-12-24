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
      <main className="bg-[#0e0e0e] text-white pt-20">
        {/* Hero */}
        <section className="bg-[#161616] py-24 md:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={revealVariants('left')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <p className="text-sm uppercase tracking-[0.4em] text-white/60 mb-5">Rebel Launcher</p>
                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-tight text-[#ff5a4f]">
                  Rebel
                  <br />
                  Launcher
                </h1>
                <p className="mt-6 text-xl text-white/80 max-w-xl">
                  Scale your brand globally with our operating system of culinary innovation, robust supply chain, and technology.
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center"
                variants={revealVariants('right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <img
                  src={heroImage}
                  alt="Rebel Launcher rocket"
                  className="w-full max-w-[180px] md:max-w-[220px]"
                  loading="lazy"
                />
              </motion.div>
            </div>

          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-[#0f0f0f]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div
                className="overflow-hidden rounded-[2.5rem] border border-white/10"
                variants={revealVariants('left')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <img
                  src={processImage}
                  alt="Brand partners and kitchen"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                variants={revealVariants('right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="rounded-[2.25rem] bg-[#e85649] px-10 py-12 text-white shadow-[0_25px_60px_rgba(232,86,73,0.35)]">
                  <p className="text-xs uppercase tracking-[0.6em] text-white/80">The Process</p>
                  <h3 className="mt-4 text-3xl font-semibold">We bring the full Rebel operating system</h3>
                  <p className="mt-6 text-lg leading-relaxed text-white/90">
                    We provide our entire machinery for brand's to achieve their maximum potential. We invest our know-how,
                    systems, culinary knowledge, supply chain synergies & our kitchen network to put you on an accelerated
                    growth path.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Culture */}
        <section className="py-24 bg-[#161616]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                className="space-y-6"
                variants={revealVariants('left')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <span className="inline-flex rounded-full bg-[#ff5a4f]/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff5a4f]">
                  Partners Culture
                </span>
                <p className="text-lg text-white/85 leading-relaxed">
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
                className="justify-self-end"
              >
                <img
                  src={cultureImage}
                  alt="Partners culture"
                  className="w-full rounded-[2.5rem] border border-white/10 object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {growthBenefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5a4f]/15">
                    <img src={benefit.icon} alt={benefit.title} className="h-10 w-10" loading="lazy" />
                  </div>
                  <p className="mt-5 text-base font-medium text-white/85">{benefit.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn more */}
        <section className="py-24 bg-[#161616]">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h2 className="text-3xl font-semibold text-[#ff5a4f] mb-10">Learn more about us by reading</h2>
            </SectionReveal>
            <div className="grid gap-8 lg:grid-cols-2">
              {articles.map((article) => (
                <motion.a
                  key={article.title}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-[#1d1d1d] overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{article.title}</h3>
                    <p className="text-white/70 text-base">{article.excerpt}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA cards */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-8 md:grid-cols-2">
              {ctaCards.map((cta) => (
                <motion.a
                  key={cta.title}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white/15 bg-[#171717] p-10 transition-colors duration-300 hover:border-[#e85649]/60"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-[#ff5a4f]">{cta.title}</h3>
                  <p className="mt-4 text-lg text-white/80">{cta.description}</p>
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
