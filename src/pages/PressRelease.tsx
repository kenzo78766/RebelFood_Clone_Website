import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';

// Press Release data (same 6 posts from News page)
const pressReleases = [
  {
    id: 1,
    title: "CORPORATE SOCIAL RESPONSIBILITY POLICY FOR REBEL FOODS PRIVATE LIMITED",
    description: 'Rebel Foods Private Limited (the "Company") is com...',
    date: "Aug 18, 2023",
    image: "https://www.rebelfoods.com/uploads/PressCMS/press-detail-image/press1692361786TDUf30eqVO.png",
    link: "#"
  },
  {
    id: 2,
    title: "Annual Return",
    description: "Rebel Foods Annual Return",
    date: "Aug 16, 2023",
    image: "https://www.rebelfoods.com/uploads/PressCMS/press-detail-image/press1692365793nw0vMpbXuM.png",
    link: "/annual-return"
  },
  {
    id: 3,
    title: "Rebel Foods becomes the first food-tech company in India to offer ESOPs to 5000+ kitchen and corporate employees across multiple geographies",
    description: "In order to make every employee an owner of the bu...",
    date: "Jun 06, 2023",
    image: "https://www.rebelfoods.com/uploads/PressCMS/press-detail-image/press1692253299mgTRrih5C9.png",
    link: "#"
  },
  {
    id: 4,
    title: "Meet GQ's Most Influential Young Indians of 2023",
    description: "Presenting GQ's youth power, featuring p...",
    date: "Apr 26, 2023",
    image: "https://www.rebelfoods.com/uploads/PressCMS/press-detail-image/press1692254440DOwacl8uw0.png",
    link: "#"
  },
  {
    id: 5,
    title: "EatSure partners with Royal Challengers Bangalore this T20 season; first food-tech to take multiple brands to stadium",
    description: "EatSure becomes the first food-tech company to bri...",
    date: "Mar 27, 2023",
    image: "https://www.rebelfoods.com/uploads/PressCMS/press-detail-image/press1679983282tFPBDM2DwQ.png",
    link: "#"
  },
  {
    id: 6,
    title: "Rebel Foods becomes the master franchisee in India to hyper-scale Wendy's® presence across the country through traditional restaurants and cloud kitchens",
    description: "Rebel Foods introduces its warehouses in growing W...",
    date: "Feb 28, 2023",
    image: "https://www.rebelfoods.com/uploads/PressCMS/press-detail-image/press1679982966j3IxzjS2em.png",
    link: "#"
  }
];

const PressRelease = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredReleases, setFilteredReleases] = useState(pressReleases);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredReleases(pressReleases);
      return;
    }

    const filtered = pressReleases.filter(release => 
      release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredReleases(filtered);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex flex-col items-start">
                <h1 className="text-5xl lg:text-6xl font-bold mb-12 ml-12" style={{ 
                  color: '#e8590c',
                  WebkitTextStroke: '2px #e8590c',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'inherit',
                  letterSpacing: '0.02em'
                }}>
                  Press Release
                </h1>
                
                {/* Search Bar */}
                <div className="w-full max-w-4xl ml-12">
                  <div className="relative flex items-center gap-4">
                    <input 
                      type="text"
                      placeholder="Know what you're looking for?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 px-8 py-3 bg-secondary/50 border border-border/50 rounded-full text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-accent text-base"
                    />
                    <button 
                      onClick={handleSearch}
                      className="px-8 py-3 bg-gradient-to-r from-accent to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-accent transition-all duration-300"
                    >
                      Search &gt;
                    </button>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Press Releases List */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
              {filteredReleases.length > 0 ? (
                filteredReleases.map((release) => (
                <Link 
                  key={release.id}
                  to={release.link}
                  className="flex bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group w-full"
                >
                  <div className="w-80 h-80 flex-shrink-0 overflow-hidden bg-secondary">
                    <img 
                      src={release.image} 
                      alt={release.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/1a1a1a/e8590c?text=Rebel+Foods';
                      }}
                    />
                  </div>
                  <div className="p-10 flex-1 flex flex-col justify-center">
                    <h3 className="press-release-heading orange-text mb-0 zoom-in line-clamp-2">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-6 line-clamp-2">
                      {release.description}
                    </p>
                    <p className="text-accent font-semibold mb-4">
                      Click Here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {release.date}
                    </p>
                  </div>
                </Link>
              ))
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-xl mb-4">
                    No press releases found for "{searchQuery}"
                  </p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setFilteredReleases(pressReleases);
                    }}
                    className="text-accent font-semibold underline hover:scale-110 transition-transform duration-300"
                  >
                    Clear Search
                  </button>
                </div>
              )}
              
              {/* See More Button */}
              {filteredReleases.length > 0 && (
                <button className="mt-8 text-accent font-semibold text-lg underline hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                  See More →
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default PressRelease;
