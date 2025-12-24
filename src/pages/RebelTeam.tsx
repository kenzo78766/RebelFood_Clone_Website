import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const STRIP_ROUNDED = 'rounded-[28px]';

const RebelTeam = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20 bg-background">
        {/* Landing / Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text" style={{WebkitTextStroke: '2px #3b82f6', WebkitTextFillColor: 'transparent'}}>
                  Team and Leadership
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                The people who know what it takes to create a revolution in the food industry.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Content Strips - Hidden initially, animate on scroll both ways */}
        <section className="bg-gray-900 py-20 mt-20">
          <div className="w-full overflow-hidden">
            {/* Strip 1 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-stretch mb-16"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileNotInView={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <motion.div 
                className="lg:w-7/12"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="relative h-[280px] sm:h-[380px] lg:h-[500px]">
                  <img
                    src="https://www.rebelfoods.com/uploads/site/4425132821639979137leadership_at_rebel.jpg"
                    alt="Leadership at Rebel"
                    className={`w-full h-full object-cover ${STRIP_ROUNDED}`}
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-accent font-extrabold text-2xl">1</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="lg:w-5/12 flex"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="flex-1 h-full flex flex-col justify-center px-6 py-10 lg:px-10">
                  <div className={`bg-blue-600 ${STRIP_ROUNDED} px-6 py-4 w-fit`}>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                      Leadership at Rebel
                    </h2>
                  </div>
                  <p className="mt-6 text-base lg:text-lg text-white leading-relaxed max-w-md">
                    Laying the path for us to reinvent the industry by inspiring us to make the #RebelSpirit stronger each day.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Strip 2 (alternate) */}
            <motion.div 
              className="flex flex-col lg:flex-row items-stretch"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileNotInView={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <motion.div 
                className="lg:w-7/12 order-1 lg:order-2"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="relative h-[280px] sm:h-[380px] lg:h-[500px]">
                  <img
                    src="https://www.rebelfoods.com/uploads/site/2965227731639979187team_rebel.jpg"
                    alt="Team Rebel"
                    className={`w-full h-full object-cover ${STRIP_ROUNDED}`}
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-accent font-extrabold text-2xl">2</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="lg:w-5/12 order-2 lg:order-1 flex"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileNotInView={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="flex-1 h-full flex flex-col justify-center px-6 py-10 lg:px-10">
                  <div className={`bg-blue-600 ${STRIP_ROUNDED} px-6 py-4 w-fit`}>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                      Team Rebel
                    </h2>
                  </div>
                  <p className="mt-6 text-base lg:text-lg text-white leading-relaxed max-w-md">
                    A well-knit group of go-getters who uphold the #TheRebelSpirit in everything we do.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Link / CTA Section (offset layout like original) */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <SectionReveal className="md:col-span-5">
                <div className="pt-2">
                  <Link to="/working-at-rebel" className="block group">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-[1.03] w-fit">
                      Rebel Culture &gt;
                    </h2>
                    <p className="text-white/90 text-base lg:text-lg">
                      We are REBEL. Never shy of redefining the norm, never shy of changes, just never shy.
                    </p>
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.15} className="md:col-span-5 md:col-start-8">
                <div className="pt-2">
                  <a
                    href="https://spirit.rebelfoods.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-3xl lg:text-4xl font-semibold text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-[1.03] w-fit">
                      Rebel Spirit : The Rebel Blog &gt;
                    </h3>
                    <p className="text-white/90 text-base lg:text-lg">
                      Know more about the thought process of being a true Rebel.
                    </p>
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default RebelTeam;
