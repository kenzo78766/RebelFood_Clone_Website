import launcherImage from '@/assets/launcher.png';

const LauncherSection = () => {
  return (
    <section id="launcher" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative animate-fade-in-left order-2 lg:order-1">
            <img
              src={launcherImage}
              alt="Rebel Launcher"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="animate-fade-in-right order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Rebel Launcher
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Scale your brand globally with our operating system of culinary innovation, robust supply chain, and technology.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-foreground font-medium hover:text-muted-foreground transition-colors duration-200"
            >
              Know More
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LauncherSection;
