import heroImage from '@/assets/food-technology.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              Excellent Food<br />
              Meets Great Tech
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The world's largest chain of internet restaurants powered by an operating system for building and scaling brands globally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in finding the right balance between exquisite culinary craftsmanship and technological infrastructure.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="relative overflow-hidden rounded-lg blue-tint-overlay">
              <img
                src={heroImage}
                alt="Food + Technology"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
