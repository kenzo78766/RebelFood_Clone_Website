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
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    style={{ WebkitTextStroke: '2px #b6b6b6', WebkitTextFillColor: 'transparent' }}
                  >
                    Rebel Spirit
                  </h1>
                  <div className="text-lg md:text-xl text-[#b6b6b6] leading-relaxed">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>Join us in our journey as we explore</span>
                      <motion.span
                        key={activeTopic}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="font-normal text-[#b6b6b6]"
                      >
                        {heroTopics[activeTopic]}
                      </motion.span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img
                    src="https://www.rebelfoods.com/images/rebel_book.png"
                    alt="Rebel Spirit"
                    className="max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Section with Most Read on the side */}
          <section className="py-12 lg:py-16 bg-[#202020]">
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
                {/* Left: Featured */}
                <div>
                  <h2 className="text-lg font-medium mb-5 text-[#5fd4ba]">Featured</h2>

                  {/* Main featured card - Large with image and text side by side */}
                  <div className="mb-5 bg-[#2a2a2a] rounded overflow-hidden">
                    <div
                      className="bg-cover bg-center h-64"
                      style={{ backgroundImage: `url(${featuredPosts[0].image})` }}
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-white leading-tight mb-2">{featuredPosts[0].title}</h3>
                      <p className="text-[#aaa] text-sm leading-relaxed">{featuredPosts[0].excerpt}</p>
                    </div>
                  </div>

                  {/* Three medium cards in a row - Image on top, text below */}
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    {featuredPosts.slice(1).map((post) => (
                      <div key={post.title} className="group cursor-pointer">
                        <div
                          className="bg-cover bg-center h-36 rounded mb-3"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                        <h3 className="text-sm font-medium text-white leading-tight group-hover:text-[#5fd4ba] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-[#999] mt-1">{post.excerpt}</p>
                      </div>
                    ))}
                  </div>

                  {/* Subscribe Block */}
                  <div className="bg-[#2a2a2a] rounded p-5">
                    <h3 className="text-base font-semibold text-[#6db1ff] mb-3">Subscribe to our learnings</h3>
                    <form className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="flex-1 px-4 py-2 bg-[#1b1b1b] border border-[#3a3a3a] rounded text-white text-sm placeholder:text-[#666] focus:outline-none focus:border-[#6db1ff]"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2 bg-gradient-to-r from-[#61c3a8] to-[#3e9bff] text-white text-sm font-medium rounded hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        Subscribe →
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right: Most Read */}
                <div className="lg:block hidden">
                  <h2 className="text-lg font-medium mb-5 text-[#5fd4ba]">Most Read</h2>
                  <div className="space-y-3">
                    {mostReadPosts.map((post) => (
                      <div
                        key={post.title}
                        className="bg-[#2a2a2a] rounded p-3 hover:bg-[#303030] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 bg-[#333] text-[#999] rounded">{post.topic}</span>
                          <span className="text-xs text-[#666]">{post.author}</span>
                        </div>
                        <h3 className="text-sm text-white font-medium leading-snug mb-1">
                          {post.title}
                        </h3>
                        <p className="text-xs text-[#999] line-clamp-2">
                          How technology company is solving the biggest problems across food for the consumers
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Topics + Stories */}
          <section className="py-12 lg:py-16 border-t border-[#2f2f2f]">
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl space-y-8">
              {/* Topic Filter Tabs with Navigation Arrows */}
              <div className="flex items-center gap-4">
                <button className="text-[#999] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center gap-1 overflow-x-auto flex-1">
                  {topicFilters.map((filter, idx) => (
                    <button
                      key={filter}
                      className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                        idx === 0
                          ? 'text-[#e6b41a]'
                          : 'text-[#999] hover:text-[#ddd]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <button className="text-[#999] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Story Cards Grid - Irregular Layout matching screenshot */}
              <div className="space-y-6">
                {/* First row - 2 cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {storyCards.slice(0, 2).map((story) => (
                    <div
                      key={story.title}
                      className="bg-[#2a2a2a] rounded overflow-hidden hover:bg-[#303030] transition-colors cursor-pointer"
                    >
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${story.image})` }}
                      />
                      <div className="p-5 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 bg-[#333] text-[#999] rounded">{story.topic}</span>
                          <span className="text-xs text-[#666]">Jaydeep Barman</span>
                        </div>
                        <h3 className="text-base font-semibold text-white leading-snug">{story.title}</h3>
                        <p className="text-sm text-[#999] leading-relaxed line-clamp-2">{story.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row - 1 card centered */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className="bg-[#2a2a2a] rounded overflow-hidden hover:bg-[#303030] transition-colors cursor-pointer"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${storyCards[2].image})` }}
                    />
                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 bg-[#333] text-[#999] rounded">{storyCards[2].topic}</span>
                        <span className="text-xs text-[#666]">Ankur Sharma</span>
                      </div>
                      <h3 className="text-base font-semibold text-white leading-snug">{storyCards[2].title}</h3>
                      <p className="text-sm text-[#999] leading-relaxed line-clamp-2">{storyCards[2].description}</p>
                    </div>
                  </div>
                </div>

                {/* Third row - 2 cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {storyCards.slice(3, 5).map((story) => (
                    <div
                      key={story.title}
                      className="bg-[#2a2a2a] rounded overflow-hidden hover:bg-[#303030] transition-colors cursor-pointer"
                    >
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${story.image})` }}
                      />
                      <div className="p-5 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 bg-[#333] text-[#999] rounded">{story.topic}</span>
                          <span className="text-xs text-[#666]">Krishna Chaitanya</span>
                        </div>
                        <h3 className="text-base font-semibold text-white leading-snug">{story.title}</h3>
                        <p className="text-sm text-[#999] leading-relaxed line-clamp-2">{story.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fourth row - 2 cards */}
                {storyCards.length > 5 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="bg-[#2a2a2a] rounded overflow-hidden hover:bg-[#303030] transition-colors cursor-pointer"
                    >
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${storyCards[5].image})` }}
                      />
                      <div className="p-5 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 bg-[#333] text-[#999] rounded">{storyCards[5].topic}</span>
                          <span className="text-xs text-[#666]">Sarvistha Yadav</span>
                        </div>
                        <h3 className="text-base font-semibold text-white leading-snug">{storyCards[5].title}</h3>
                        <p className="text-sm text-[#999] leading-relaxed line-clamp-2">{storyCards[5].description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* See All Link */}
              <div className="text-center pt-4">
                <a href="/blogs/all-topics" className="text-[#e6b41a] font-medium hover:underline inline-flex items-center gap-1">
                  See all →
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
