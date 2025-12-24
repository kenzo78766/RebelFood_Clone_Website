import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, FileText } from 'lucide-react';

const newsCategories = [
  {
    icon: FileText,
    title: "Press Release",
    description: "Official announcements and press releases from Rebel Foods",
    link: "/press-release"
  },
  {
    icon: Newspaper,
    title: "Recent Posts",
    description: "Latest updates and stories from the Rebel Spirit blog",
    link: "https://spirit.rebelfoods.com/",
    external: true
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Upcoming events and conferences featuring Rebel Foods",
    link: "/events"
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
              <div className="flex items-center gap-6 mb-8">
                <img 
                  src="https://www.rebelfoods.com/images/newspaper.svg" 
                  alt="Rebel News" 
                  className="w-24 h-24"
                />
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Rebel <span className="text-accent">News</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Stay updated with the latest news, press releases, and events from Rebel Foods.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              {newsCategories.map((category, index) => (
                <SectionReveal key={index} delay={index * 0.2}>
                  {category.external ? (
                    <a 
                      href={category.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group h-full"
                    >
                      <category.icon className="w-12 h-12 text-accent mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {category.description}
                      </p>
                      <span className="text-accent font-semibold">
                        See More &gt;
                      </span>
                    </a>
                  ) : (
                    <Link 
                      to={category.link}
                      className="block bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group h-full"
                    >
                      <category.icon className="w-12 h-12 text-accent mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {category.description}
                      </p>
                      <span className="text-accent font-semibold">
                        See More &gt;
                      </span>
                    </Link>
                  )}
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
