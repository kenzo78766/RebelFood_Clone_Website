import whoWeAreImage from '@/assets/who-we-are.jpg';

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Prioritizing customer experience above all
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To be the most loved, most ordered and most profitable food brand by enabling Unique, Memorable, Delightful & Sure experiences across all food missions.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-foreground font-medium hover:text-muted-foreground transition-colors duration-200"
            >
              Know More
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative overflow-hidden rounded-lg blue-tint-overlay">
              <img
                src={whoWeAreImage}
                alt="Who We Are"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
