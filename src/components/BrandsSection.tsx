import woodenTexture from '@/assets/brand-wooden-texture.png';
import faasos from '@/assets/brands/faasos.png';
import beherouz from '@/assets/brands/beherouz.png';
import ovenStory from '@/assets/brands/oven-story.png';
import lunchBox from '@/assets/brands/lunch-box.png';
import goodBowl from '@/assets/brands/good-bowl.png';
import sweetTruth from '@/assets/brands/sweet-truth.png';
import biryani from '@/assets/brands/biryani.png';
import firangiBake from '@/assets/brands/firangi-bake.png';
import mandarinOak from '@/assets/brands/oak.png';

const brands = [
  { name: 'Faasos', image: faasos },
  { name: 'Firangi Bake', image: firangiBake },
  { name: 'The Biryani Life', image: biryani },
  { name: 'Mandarin Oak', image: mandarinOak },
  { name: 'Sweet Truth', image: sweetTruth },
  { name: 'The Good Bowl', image: goodBowl },
  { name: 'Lunch Box', image: lunchBox },
  { name: 'Oven Story', image: ovenStory },
  { name: 'Behrouz', image: beherouz },
];

const BrandsSection = () => {
  return (
    <section id="what-we-do" className="py-20 relative">
      {/* Wooden texture background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${woodenTexture})` }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Food for every mood
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With a common goal to identify different food patterns of the consumer - lunch, dinner, snacks, weekend gatherings and all such food missions, our brands are born as an answer to these food missions.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto max-h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Visit All Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center text-foreground font-medium hover:text-muted-foreground transition-colors duration-200"
          >
            Visit all
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
