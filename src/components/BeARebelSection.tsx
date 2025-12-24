import franchiseImage from '@/assets/franchise.jpg';
import careerImage from '@/assets/career.jpg';

const BeARebelSection = () => {
  return (
    <section id="be-a-rebel" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center animate-fade-in">
          Be a part of Rebel
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Franchise Card */}
          <div className="group relative overflow-hidden rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[4/3] overflow-hidden blue-tint-overlay">
              <img
                src={franchiseImage}
                alt="Franchise"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Franchise
              </h3>
              <p className="text-muted-foreground mb-4">
                Scale new heights of entrepreneurship with tech & culinary innovation, and advanced software.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-foreground font-medium hover:text-muted-foreground transition-colors duration-200"
              >
                See More
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Career Card */}
          <div className="group relative overflow-hidden rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative aspect-[4/3] overflow-hidden blue-tint-overlay">
              <img
                src={careerImage}
                alt="Career"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Career
              </h3>
              <p className="text-muted-foreground mb-4">
                Come, be a Rebel and revolutionize the global food industry, today!
              </p>
              <a
                href="#"
                className="inline-flex items-center text-foreground font-medium hover:text-muted-foreground transition-colors duration-200"
              >
                Join Us
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeARebelSection;
