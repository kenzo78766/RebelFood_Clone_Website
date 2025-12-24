import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const heroIcons = [
  { src: 'https://www.rebelfoods.com/images/career/career1D.svg', alt: 'Rebel hero illustration 1' },
  { src: 'https://www.rebelfoods.com/images/career/career2D.svg', alt: 'Rebel hero illustration 2' },
  { src: 'https://www.rebelfoods.com/images/career/career3D.svg', alt: 'Rebel hero illustration 3' },
  { src: 'https://www.rebelfoods.com/images/career/career4D.svg', alt: 'Rebel hero illustration 4' },
  { src: 'https://www.rebelfoods.com/images/career/career5D.svg', alt: 'Rebel hero illustration 5' },
  { src: 'https://www.rebelfoods.com/images/career/career6D.svg', alt: 'Rebel hero illustration 6' }
];

const BeARebel = () => {
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % heroIcons.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const { src, alt } = heroIcons[iconIndex];

  return (
    <PageTransition>
      <Header />
      <main className="bg-[#0f0f0f] text-white">
        <section className="border-b border-[#1c1c1c] bg-[#191919] py-24 md:py-28">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-24">
            <SectionReveal className="flex-1">
              <div className="space-y-8">
                <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                  <span
                    className="block text-transparent"
                    style={{ WebkitTextStroke: '3px #f6ad0f', WebkitTextFillColor: 'transparent' }}
                  >
                    Join the
                  </span>
                  <span
                    className="block text-transparent"
                    style={{ WebkitTextStroke: '3px #f6ad0f', WebkitTextFillColor: 'transparent' }}
                  >
                    Rebel team
                  </span>
                </h1>
                <p className="text-lg leading-relaxed text-white">
                  To apply for jobs at Rebel Foods, kindly email us at{' '}
                  <a
                    href="mailto:careers@rebelfoods.com"
                    className="text-[#4ea6ff] underline-offset-4 hover:text-[#7bc3ff]"
                  >
                    careers@rebelfoods.com
                  </a>
                </p>
              </div>
            </SectionReveal>

            <SectionReveal className="flex-1" delay={0.1}>
              <div className="flex items-center justify-center">
                <div className="relative h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={src}
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default BeARebel;