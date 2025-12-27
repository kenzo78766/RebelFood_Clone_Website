import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

// Press Release data (6 posts)
const pressReleases = [
  {
    id: 1,
    title: "CORPORATE SOCIAL RESPONSIBILITY POLICY FOR REBEL FOODS PRIVATE LIMITED",
    description: 'Rebel Foods Private Limited (the "Company") is carri...',
    date: "Aug 16, 2023",
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

// Recent Posts data (4 posts)
const recentPosts = [
  {
    id: 1,
    title: "The journey of highest rated health brands in Dubai - The 500 Calorie Project",
    description: "Starting The 500 Calorie Project is a Guinness record space of 500...",
    image: "",
    link: "https://spirit.rebelfoods.com/"
  },
  {
    id: 2,
    title: "Predicting your food delivery time: The Rebel Way",
    description: "Why is Rebel Foods prediction of food delivery so much more accurate?...",
    image: "/src/images/2nd post.png",
    link: "https://spirit.rebelfoods.com/"
  },
  {
    id: 3,
    title: "How to build 1000 Restaurants in 24 months — The REBEL method!",
    description: "The Rebel Foods Method of Building - The blueprint of a modern...",
    image: "/src/images/3rd post .png",
    link: "https://spirit.rebelfoods.com/"
  },
  {
    id: 4,
    title: "Why is Rebel Foods Hiring Super-talented Engineers?",
    description: "Why hiring the right candidate is critical for the legend of you...",
    image: "/src/images/4th post.png",
    link: "https://spirit.rebelfoods.com/"
  }
];

// Events data
const events = [
  {
    id: 1,
    title: "Shashank Mehta of The Whole Truth and the story of Brahma, Vishnu, Shiva.",
    description: "Oct 07, 2025, 15:19 PM",
    image: "https://www.rebelfoods.com/uploads/events/event_images/event1759917096yvI8JJxRFq.png",
    link: "#"
  }
];

const News = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex items-center justify-between">
                <h1 className="text-4xl lg:text-6xl font-bold ml-4 lg:ml-6" style={{ 
                  color: '#e8590c',
                  WebkitTextStroke: '2px #e8590c',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'inherit',
                  letterSpacing: '0.02em'
                }}>
                  Rebel News
                </h1>
                <img 
                  src="https://www.rebelfoods.com/images/newspaper.svg" 
                  alt="Newspaper Icon" 
                  className="w-48 h-48 mr-4 lg:mr-8"
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Press Release Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Press Release
                </h2>
                <Link to="/press-release" className="text-accent font-semibold hover:underline">
                  See More →
                </Link>
              </div>
            </SectionReveal>
            
            <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
              {pressReleases.map((release) => (
                <Link 
                  key={release.id}
                  to={release.link}
                  className="flex bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group w-full"
                >
                  <div className="w-72 h-72 flex-shrink-0 overflow-hidden bg-secondary">
                    <img 
                      src={release.image} 
                      alt={release.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/1a1a1a/e8590c?text=Rebel+Foods';
                      }}
                    />
                  </div>
                  <div className="p-8 flex-1">
                    <h3 className="text-xl font-bold text-accent mb-4 line-clamp-2 group-hover:text-accent/80 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-6 line-clamp-2">
                      {release.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-5 h-5" />
                      <span>{release.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Recent Posts
                </h2>
                <a 
                  href="https://spirit.rebelfoods.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  See More →
                </a>
              </div>
            </SectionReveal>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {recentPosts.map((post, index) => (
                <SectionReveal key={post.id} delay={index * 0.1}>
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group h-full"
                  >
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/600x400/1a1a1a/e8590c?text=Rebel+Spirit';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </a>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Events
                </h2>
                <Link to="/events" className="text-accent font-semibold hover:underline">
                  See More →
                </Link>
              </div>
            </SectionReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <SectionReveal key={event.id} delay={index * 0.1}>
                  <Link 
                    to={event.link}
                    className="block bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group h-full"
                  >
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/600x400/1a1a1a/e8590c?text=Event';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{event.description}</span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default News;
