import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const heroTopics = [
  'culinary innovations',
  'foodtech disruption',
  'marketing strategies',
  'entrepreneurial stories',
  'hungry aspirations',
];

// Featured posts: 1 main + 2 secondary
const featuredPosts = [
  {
    title: 'Finding Diverse Food Lovers',
    excerpt:
      'So many people around the world. It is very important to set the Target Group at initial level for a brand to become famous.',
    topic: 'Technology',
    author: 'Sarvistha Yadav',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/0-zxgezhjhbantbqjc.png',
  },
  {
    title: 'How to build 1000 Restaurants in 24 months — The REBEL method!',
    excerpt: 'Our journey of rapid expansion and the strategies that made it possible.',
    topic: 'Business',
    author: 'Jaydeep Barman',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/the-rebelway.png',
  },
  {
    title: 'The Slay Story',
    excerpt:
      'An inside peek into how Rebel opened its unique Operating System in Launcher Program. This is first hand account of Rebel and Dropkaffe team coming together to create SLAY.',
    topic: 'Launcher',
    author: 'Ankur Sharma',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/whatsapp-image-2021-01-07-at-120641.jpeg',
  },
];

// Most read posts
const mostReadPosts = [
  {
    title: 'Why is Rebel Foods Hiring Super-talented Engineers?',
    image: 'https://www.rebelfoods.com/uploads/blogs/thumbnails/tech-stack.png',
    topic: 'Technology',
    author: 'Jaydeep Barman',
  },
  {
    title: 'Introducing Rebel Launcher: Launchpad for Entrepreneurs',
    image: 'https://www.rebelfoods.com/uploads/blogs/thumbnails/rebel-launchpad.png',
    topic: 'Launcher',
    author: 'Vidyut Parashar',
  },
  {
    title: 'Limitations with Storage and Memory in iOS Devices',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/1-ar5erwssr7xhjlaa-7iova-1.jpeg',
    topic: 'Technology',
    author: 'Vishalkumar Chaudhari',
  },
  {
    title: 'Entrepreneurs Wanted — Part 2',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/0-zxgezhjhbantbqjc.png',
    topic: 'People',
    author: 'Founder',
  },
];

const topicFilters = ['All Topics', 'Brand', 'Business', 'Culinary', 'Design', 'Launcher', 'People', 'Technology'];

const storyCards = [
  {
    title: 'The Slay Story',
    topic: 'Launcher',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/whatsapp-image-2021-01-07-at-120641.jpeg',
    description:
      'An inside peek into how Rebel opened its unique Operating System in Launcher Program. This is first hand account of Rebel and Dropkaffe team coming together to create SLAY - India\'s third largest coffee delivery brand within 12 months of operation.',
  },
  {
    title: 'Introducing Rebel Launcher: Launchpad for Entrepreneurs with Delightful Food Brands',
    topic: 'Launcher',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/rocket-launcher.png',
    description:
      'Running Rebel Foods for 7+ years has taught us many lessons — from small realizations to big / company transforming epiphanies.',
  },
  {
    title: 'Limitations with Storage and Memory in iOS Devices',
    topic: 'Technology',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/1-ar5erwssr7xhjlaa-7iova-1.jpeg',
    description:
      'We often face memory problems in apps running on very low available memory devices. Even if you develop for one version of iOS, devices vary widely.',
  },
  {
    title: 'Entrepreneurs Wanted — Part 2',
    topic: 'People',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/entrepreneurs-part-2.png',
    description:
      'A long note (mostly because I can\'t stop once I start) — about 500 people in our company can vouch for that, but it is a must-read if you are...',
  },
  {
    title: 'The Last Frontier for Consumer Internet',
    topic: 'Technology',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/consumer-internet.png',
    description: 'The Last Frontier for Consumer Internet.',
  },
  {
    title: 'Finding Diverse Food Lovers',
    topic: 'Technology',
    image: 'https://www.rebelfoods.com/uploads/blogs/original_cover_images/0-zxgezhjhbantbqjc.png',
    description:
      'It is very important to set the Target Group at initial level for a brand to become famous.',
  },
];

const RebelSpirit = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveTopic((prev) => (prev + 1) % heroTopics.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#1b1b1b] text-white">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                <div className="space-y-4">
                  <h1
                    className="text-5xl md:text-6xl font-bold"
                    style={{ WebkitTextStroke: '2px #b6b6b6', WebkitTextFillColor: 'transparent' }}
                  >
                    Rebel Spirit
                  </h1>
                  <div className="text-xl md:text-2xl text-[#d1d1d1] leading-relaxed">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span>Join us in our journey as we explore</span>
                      <motion.span
                        key={activeTopic}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="font-semibold text-[#c9c9c9]"
                      >
                        {heroTopics[activeTopic]}
                      </motion.span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end lg:justify-center">
                  <img
                    src="https://www.rebelfoods.com/images/rebel_book.png"
                    alt="Rebel Spirit"
                    className="max-w-[220px] md:max-w-[260px] lg:max-w-[280px] h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Section - 1 main + 2 secondary in grid */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="text-2xl font-semibold text-[#61c3a8] mb-10">Featured</h2>

              {/* Main featured post - full width */}
              <div className="mb-10 bg-[#222222] rounded-lg overflow-hidden border border-[#2f2f2f]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div
                    className="bg-cover bg-center min-h-[320px] md:min-h-[420px]"
                    style={{ backgroundImage: `url(${featuredPosts[0].image})` }}
                  />
                  <div className="p-8 flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-[#333] text-[#61c3a8] font-semibold">
                        {featuredPosts[0].topic}
                      </span>
                      <span className="text-[#a0a0a0]">{featuredPosts[0].author}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white leading-tight">{featuredPosts[0].title}</h3>
                    <p className="text-[#c7c7c7] leading-relaxed text-lg">{featuredPosts[0].excerpt}</p>
                    <button className="text-[#61c3a8] font-semibold hover:text-[#7dd4b8] transition-colors w-fit mt-2">
                      Read More &gt;
                    </button>
                  </div>
                </div>
              </div>

              {/* Secondary featured posts - 2 column grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {featuredPosts.slice(1).map((post) => (
                  <div key={post.title} className="bg-[#222222] rounded-lg overflow-hidden border border-[#2f2f2f]">
                    <div
                      className="bg-cover bg-center h-56"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="px-3 py-1 rounded-full bg-[#333] text-[#61c3a8] font-semibold">
                          {post.topic}
                        </span>
                        <span className="text-[#a0a0a0] text-xs">{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight">{post.title}</h3>
                      <p className="text-[#bdbdbd] text-sm line-clamp-2">{post.excerpt}</p>
                      <button className="text-[#61c3a8] font-semibold text-sm hover:text-[#7dd4b8] transition-colors">
                        Read More &gt;
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subscribe Block */}
              <div className="bg-[#1f1f1f] border border-[#2f2f2f] rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-semibold text-[#6db1ff] mb-4">Subscribe to our learnings</h3>
                <form className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 items-center">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-4 py-3 bg-transparent border border-[#3a3a3a] rounded text-white placeholder:text-[#7a7a7a] focus:outline-none focus:ring-1 focus:ring-[#6db1ff]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-[#61c3a8] to-[#3e9bff] text-white font-semibold rounded hover:opacity-90 transition-opacity"
                  >
                    Subscribe &gt;
                  </button>
                </form>
              </div>

              {/* Most Read Section */}
              <h2 className="text-2xl font-semibold text-[#61c3a8] mb-6">Most Read</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {mostReadPosts.map((post) => (
                  <div
                    key={post.title}
                    className="flex flex-col bg-[#1f1f1f] border border-[#2f2f2f] rounded hover:border-[#3a3a3a] transition-colors overflow-hidden"
                  >
                    <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                    <div className="p-4 flex flex-col gap-2 flex-grow">
                      <div className="text-xs uppercase text-[#9c9c9c] font-semibold">{post.topic}</div>
                      <div className="text-sm text-white font-semibold leading-snug line-clamp-3 flex-grow">
                        {post.title}
                      </div>
                      <div className="text-[11px] text-[#9c9c9c]">{post.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Topics + Stories */}
          <section className="py-16 border-t border-[#2f2f2f]">
            <div className="container mx-auto px-6 lg:px-12 space-y-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#e6b41a]">
                {topicFilters.map((filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 rounded-full border border-transparent hover:border-[#e6b41a] transition-colors ${
                      filter === 'All Topics' ? 'text-[#e6b41a]' : 'text-[#c9c9c9]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {storyCards.map((story) => (
                  <div
                    key={story.title}
                    className="bg-[#1f1f1f] border border-[#2f2f2f] rounded overflow-hidden hover:border-[#3a3a3a] transition-colors"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${story.image})` }}
                    />
                    <div className="p-5 space-y-3">
                      <div className="text-xs uppercase text-[#8ec5ff] font-semibold">{story.topic}</div>
                      <h3 className="text-lg font-semibold text-white leading-snug line-clamp-2">{story.title}</h3>
                      <p className="text-sm text-[#bdbdbd] leading-relaxed line-clamp-2">{story.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href="/blogs/all-topics" className="text-[#e6b41a] font-semibold hover:underline">
                  See all &gt;
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default RebelSpirit;
