import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Scaling Driver Fleet with Minimum Cost With Great Efficiency',
    excerpt: 'Learn how we optimized our delivery operations to serve millions of customers efficiently.',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/0-zxgezhjhbantbqjc-1.png',
    category: 'Operations',
    date: 'Dec 15, 2024',
  },
  {
    title: 'How to build 1000 Restaurants in 24 months — The REBEL method!',
    excerpt: 'Our journey of rapid expansion and the strategies that made it possible.',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/the-rebelway.png',
    category: 'Growth',
    date: 'Dec 10, 2024',
  },
  {
    title: 'My journey to build a platform for the next million internet restaurants',
    excerpt: 'The vision and technology behind Rebel Foods\' operating system.',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/0-2oftshgffqfgnqe.png',
    category: 'Technology',
    date: 'Dec 5, 2024',
  },
  {
    title: 'The Future of Cloud Kitchens in Southeast Asia',
    excerpt: 'Exploring the massive opportunity in the region\'s food delivery market.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    category: 'Market Insights',
    date: 'Nov 28, 2024',
  },
  {
    title: 'Building a Brand Portfolio: Lessons from Rebel Foods',
    excerpt: 'How we created and scaled 45+ brands from a single platform.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
    category: 'Strategy',
    date: 'Nov 20, 2024',
  },
  {
    title: 'Data-Driven Menu Engineering',
    excerpt: 'Using analytics to create dishes that customers love.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
    category: 'Data Science',
    date: 'Nov 15, 2024',
  },
];

const categories = ['All', 'Technology', 'Operations', 'Growth', 'Strategy', 'Market Insights'];

const RebelSpirit = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Rebel Spirit
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Stories, insights, and learnings from our journey of building the world's largest internet restaurant company.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? 'bg-foreground text-background'
                        : 'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-4">
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>{blogPosts[0].date}</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-foreground font-medium hover:text-muted-foreground transition-colors"
                    >
                      Read More
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl font-bold text-foreground mb-12">
                  Latest Articles
                </h2>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-xl overflow-hidden hover:bg-card/80 transition-colors cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 border border-border rounded-lg text-foreground font-medium hover:bg-card transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Subscribe to our newsletter for the latest insights from Rebel Foods
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default RebelSpirit;
