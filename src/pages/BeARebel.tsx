import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { useState, useEffect } from 'react';

const careerSvgs = [
  'https://www.rebelfoods.com/images/career/career6D.svg',
  'https://www.rebelfoods.com/images/career/career6D.svg',
  'https://www.rebelfoods.com/images/career/career6D.svg',
  'https://www.rebelfoods.com/images/career/career6D.svg',
  'https://www.rebelfoods.com/images/career/career6D.svg',
  'https://www.rebelfoods.com/images/career/career6D.svg'
];

const BeARebel = () => {
  const [currentSvg, setCurrentSvg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSvg((prev) => (prev + 1) % careerSvgs.length);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <Header />
      <main className="pt-20 bg-background">
        {/* Hero Section - Text left-offset, phone right with symbols */}
        <section className="py-32 lg:py-48 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text (slightly offset from corner) */}
              <SectionReveal>
                <div className="space-y-8 lg:pl-8">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span 
                      className="text-transparent bg-clip-text block" 
                      style={{
                        WebkitTextStroke: '3px #f59e0b',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Join the
                    </span>
                    <span 
                      className="text-transparent bg-clip-text block" 
                      style={{
                        WebkitTextStroke: '3px #f59e0b',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Rebel team
                    </span>
                  </h1>
                  
                  <div className="text-xl lg:text-2xl text-white space-y-3">
                    <p>To apply for jobs at Rebel Foods, kindly email</p>
                    <p>
                      us at{' '}
                      <a 
                        href="mailto:careers@rebelfoods.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline"
                      >
                        careers@rebelfoods.com
                      </a>
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Right side - Phone with symbols INSIDE the screen */}
              <SectionReveal delay={0.2}>
                <div className="flex justify-center lg:justify-end">
                  {/* Phone mockup */}
                  <div className="w-64 h-96 bg-gray-800 rounded-[3rem] p-6 border-8 border-gray-700">
                    <div className="w-full h-full bg-gray-900 rounded-[2rem] relative overflow-hidden">
                      {/* Career symbols using CSS - matching screenshots */}
                      
                      {/* Symbol 1: Person with chat bubble */}
                      <div className={`absolute top-6 left-6 w-12 h-12 transition-all duration-1000 ${currentSvg % 4 === 0 ? 'opacity-70' : 'opacity-30'}`}>
                        <div className="relative">
                          {/* Person head */}
                          <div className="w-6 h-6 bg-gray-400 rounded-full absolute bottom-2 left-1"></div>
                          {/* Person body */}
                          <div className="w-8 h-4 bg-gray-400 rounded-t-lg absolute bottom-0"></div>
                          {/* Chat bubble */}
                          <div className="w-6 h-4 bg-yellow-600 rounded-lg absolute top-0 right-0 flex items-center justify-center">
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Symbol 2: Location pin */}
                      <div className={`absolute top-8 right-6 w-10 h-12 transition-all duration-1000 ${currentSvg % 4 === 1 ? 'opacity-70' : 'opacity-30'}`}>
                        <div className="relative">
                          {/* Pin head */}
                          <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-gray-300 absolute top-0 left-2"></div>
                          {/* Pin center */}
                          <div className="w-3 h-3 bg-yellow-600 rounded-full absolute top-1.5 left-3.5"></div>
                          {/* Pin tail */}
                          <div className="w-1 h-4 bg-gray-400 absolute bottom-0 left-4.5 transform rotate-45"></div>
                        </div>
                      </div>

                      {/* Symbol 3: Crossed tools */}
                      <div className={`absolute bottom-16 left-6 w-12 h-12 transition-all duration-1000 ${currentSvg % 4 === 2 ? 'opacity-70' : 'opacity-30'}`}>
                        <div className="relative">
                          {/* Tool 1 - Whisk */}
                          <div className="w-1 h-8 bg-yellow-600 absolute top-2 left-2 transform rotate-45"></div>
                          <div className="w-3 h-4 border border-gray-400 rounded-t-full absolute top-0 left-0.5 transform rotate-45"></div>
                          {/* Tool 2 - Spatula */}
                          <div className="w-1 h-8 bg-gray-400 absolute top-2 right-2 transform -rotate-45"></div>
                          <div className="w-3 h-2 bg-gray-400 rounded absolute top-0 right-0.5 transform -rotate-45"></div>
                        </div>
                      </div>

                      {/* Symbol 4: Phone with finger */}
                      <div className={`absolute bottom-6 right-6 w-10 h-12 transition-all duration-1000 ${currentSvg % 4 === 3 ? 'opacity-70' : 'opacity-30'}`}>
                        <div className="relative">
                          {/* Phone */}
                          <div className="w-6 h-10 bg-gray-400 rounded-lg border border-gray-300 absolute top-0 left-2"></div>
                          <div className="w-4 h-8 bg-gray-800 rounded absolute top-1 left-3"></div>
                          {/* Finger */}
                          <div className="w-3 h-6 bg-yellow-600 rounded-full absolute bottom-0 left-0 transform rotate-12"></div>
                        </div>
                      </div>
                      
                      {/* Center hand/finger illustration */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-20 h-32 bg-yellow-600 rounded-full transform rotate-12 opacity-80"></div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-12 bg-yellow-700 rounded-full transform rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default BeARebel;