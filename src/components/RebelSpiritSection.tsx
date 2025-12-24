const blogPosts = [
  {
    title: 'Scaling Driver Fleet with Minimum Cost With Great Efficiency',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/0-zxgezhjhbantbqjc-1.png',
    link: '#',
  },
  {
    title: 'How to build 1000 Restaurants in 24 months — The REBEL method!',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/the-rebelway.png',
    link: '#',
  },
  {
    title: 'My journey to build a platform for the next million internet restaurants to come online.',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/0-2oftshgffqfgnqe.png',
    link: '#',
  },
];

const RebelSpiritSection = () => {
  return (
    <section id="rebel-spirit" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-0 animate-fade-in">
            Rebel Spirit
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-foreground font-medium hover:text-muted-foreground transition-colors duration-200"
          >
            Go to blog
            <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="group block bg-card rounded-xl overflow-hidden hover:bg-card/80 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-muted-foreground transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RebelSpiritSection;
