import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';

// Events data
const events = [
  {
    id: 1,
    title: "Shashank Mehta of The Whole Truth and the story of Brahma, Vishnu, Shiva",
    image: "https://www.rebelfoods.com/uploads/events/event_images/event1759917096yvI8JJxRFq.png",
    link: "#"
  },
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredEvents(events);
      return;
    }
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <PageTransition>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
              <SectionReveal>
                <h1 className="text-6xl lg:text-8xl font-bold" style={{
                  color: '#e8590c',
                  WebkitTextStroke: '2px #e8590c',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'inherit',
                  letterSpacing: '0.02em'
                }}>
                  Events
                </h1>
              </SectionReveal>
            </div>

            {/* Search Bar */}
            <SectionReveal delay={0.2}>
              <div className="flex gap-4 max-w-4xl">
                <input
                  type="text"
                  placeholder="Know what you're looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 px-8 py-4 bg-secondary/50 border border-border/30 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  onClick={handleSearch}
                  className="px-10 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-all duration-300"
                >
                  Search &gt;
                </button>
              </div>
            </SectionReveal>

            {/* Clear Search */}
            {searchQuery && (
              <SectionReveal delay={0.3}>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilteredEvents(events);
                  }}
                  className="mt-4 text-accent hover:underline"
                >
                  Clear Search
                </button>
              </SectionReveal>
            )}
          </div>
        </section>

        {/* Events Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            {filteredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <SectionReveal key={event.id} delay={index * 0.1}>
                    <a
                      href={event.link}
                      className="group block bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-accent mb-2 line-clamp-3 group-hover:text-accent/80 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                    </a>
                  </SectionReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No events found matching your search.
                </p>
              </div>
            )}

            {/* See More Button */}
            {filteredEvents.length > 0 && !searchQuery && (
              <div className="text-center mt-12">
                <button className="text-accent font-semibold text-lg underline hover:scale-110 transition-transform duration-300 flex items-center gap-2 mx-auto">
                  See More →
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Events;
