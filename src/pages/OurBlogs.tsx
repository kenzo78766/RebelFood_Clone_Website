import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/blogs.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  slug: string;
}

const OurBlogs = () => {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [email, setEmail] = useState('');
  const [blogEmail, setBlogEmail] = useState('');

  // Exact blog data as in original
  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Finding Diverse Food Lovers',
      excerpt: 'So many people around the world. It is very important to set the target Group of ideal food for a feast to network',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/0-9by0fhu30e4x060c.jpg',
      category: 'Business',
      author: 'Jaydeep Barman',
      slug: 'finding-diverse-food-lovers',
    },
    {
      id: 2,
      title: 'The Slay Story',
      excerpt: 'An inside peek into how Rebel opened it\'s unique Operating System in Lucknow by leveraging on tech',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/whatsapp-image-2021-01-07-at-120641.jpeg',
      category: 'Culinary',
      author: 'Rebel Foods',
      slug: 'the-slay-story',
    },
    {
      id: 3,
      title: 'Limitations with Storage and Memory in iOS Devices',
      excerpt: 'We often face memory problem in app running on very low available memory week by week',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/0-zxgezhjhbantbqjc.png',
      category: 'Technology',
      author: 'Vishal Chandra',
      slug: 'limitations-ios-devices',
    },
  ];

  const mostReadPosts: BlogPost[] = [
    {
      id: 4,
      title: 'How to build 1000 Restaurants in 24 months — The REBEL method!',
      excerpt: 'Redefining food method of building into millions of restaurants across the country.',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/0-cny5dxgaw5ikzw9w.jpg',
      category: 'Business',
      author: 'Jaydeep Barman',
      slug: 'build-1000-restaurants',
    },
    {
      id: 5,
      title: 'Why is Rebel Foods Hiring Super-talented Engineers?',
      excerpt: 'How technology company is solving the biggest problem across the nation with amazing tech.',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/internet.jpg',
      category: 'Technology',
      author: 'Kallol Banerjee',
      slug: 'hiring-engineers',
    },
    {
      id: 6,
      title: 'Introducing Rebel Launcher: Launchpad for Entrepreneurs with Delightful Food Brands',
      excerpt: 'Winning Rebel Foods for 7+ years has taught us many lessons — from seed-stage to growth.',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/1-ar5erwssr7xhjlaa-7iova-1.jpeg',
      category: 'Launcher',
      author: 'Raghav Joshi',
      slug: 'rebel-launcher',
    },
    {
      id: 7,
      title: 'The Journey to Crafting Behrouz Biryani',
      excerpt: 'A sneak peek into the process of creating India\'s best loved biryani across nation.',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/whatsapp-image-2021-01-07-at-120641.jpeg',
      category: 'Culinary',
      author: 'Rebel Foods',
      slug: 'behrouz-biryani',
    },
    {
      id: 8,
      title: 'The Slay Story',
      excerpt: 'An inside peek into how Rebel opened it\'s unique Operating System in multiple cities.',
      image: '/www.rebelfoods.com/uploads/blogs/original_cover_images/whatsapp-image-2021-01-07-at-120641.jpeg',
      category: 'Business',
      author: 'Rebel Foods',
      slug: 'slay-story-2',
    },
  ];

  const allTopics = ['All Topics', 'Brand', 'Business', 'Culinary', 'Design', 'Launcher', 'People', 'Technology'];

  const handleSubscribeToLearnings = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe to learnings:', email);
    setEmail('');
  };

  const handleSubscribeToBlog = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe to blog:', blogEmail);
    setBlogEmail('');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div>
        <Header />
        
        {/* Landing Section - Exact copy from official HTML */}
        <section className="page-descriptor-section top-space black-bg">
          <div className="container">
            <div className="rebel-descriptor-container container-space">
              <div className="rebel-descriptor-wrapper">
                <h1 className="stroke-heading">Rebel Spirit</h1>
                <div className="dynamic-slider-container py-2">
                  <div className="dynamic-content-slider">
                    <p className="descriptor-content slight-gray-text py-0 pr-1 mb-0">
                      Join us in our journey as we explore{' '}
                    </p>
                    <div className="topic-slider-container">
                      <span className="descriptor-content slight-gray-text p-0">culinary innovations</span>
                      <span className="descriptor-content slight-gray-text p-0">foodtech disruption</span>
                      <span className="descriptor-content slight-gray-text p-0">marketing strategies</span>
                      <span className="descriptor-content slight-gray-text p-0">entrepreneurial stories</span>
                      <span className="descriptor-content slight-gray-text p-0">hungry aspirations</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rebel-spirit-container text-right">
                <img 
                  src="/www.rebelfoods.com/images/rebel_book.png" 
                  className="img-fluid rebel-envelope" 
                  alt="Rebel envelope"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured blog section - Exact copy from official HTML */}
        <section className="featured-blog-section black-bg">
          <div className="container rebel-container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="section-heading pecock-green-text container-space pb-2">
                  Featured
                </h2>
                <div className="row featured-blog-wrapper">
                  <div className="col-md-12">
                    <div className="recent-featured-blog">
                      <a href={`/blogs/topic/${featuredPosts[0].slug}`} className="text-decoration-none">
                        <div className="fill-display overflow-hidden">
                          <div 
                            className="blog-image zoom-in mb-2" 
                            style={{
                              background: `url('${featuredPosts[0].image}') center center no-repeat`,
                              backgroundSize: 'cover'
                            }}
                          ></div>
                        </div>
                        <div className="pt-3 container-space">
                          <div className="topic-and-author-container d-flex align-items-center justify-content-between">
                            <p className="topic-small-btn mb-0">{featuredPosts[0].category}</p>
                            <p className="topic-small-btn bg-transperent p-0 mb-0">{featuredPosts[0].author}</p>
                          </div>
                          <div className="topic-content">
                            <h3 className="blog-heading slight-gray-text pt-3">{featuredPosts[0].title}</h3>
                            <article className="blog-content slight-gray-text">{featuredPosts[0].excerpt}</article>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Other featured posts */}
                  {featuredPosts.slice(1).map((post) => (
                    <div key={post.id} className="col-md-6">
                      <a href={`/blogs/topic/${post.slug}`} className="text-decoration-none">
                        <div className="fill-display overflow-hidden">
                          <div 
                            className="blog-image related-blog-img zoom-in mb-2" 
                            style={{
                              background: `url('${post.image}') center center no-repeat`,
                              backgroundSize: 'cover'
                            }}
                          ></div>
                        </div>
                        <div className="pt-3 container-space">
                          <div className="topic-and-author-container d-flex align-items-center justify-content-between">
                            <p className="topic-small-btn mb-0">{post.category}</p>
                            <p className="topic-small-btn bg-transperent p-0 mb-0">{post.author}</p>
                          </div>
                          <div className="topic-content">
                            <h3 className="blog-heading slight-gray-text pt-3">{post.title}</h3>
                            <article className="blog-content slight-gray-text">{post.excerpt}</article>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Subscribe to learnings */}
                <div className="subscribe-wrapper fill-display">
                  <div className="subscribe-section light-black-bg">
                    <h2 className="section-heading blue-text">Subscribe to our learnings</h2>
                    <form className="subscribe-form subscribe-to-learning-form" onSubmit={handleSubscribeToLearnings}>
                      <div className="form-group mb-0 pr-4">
                        <input 
                          type="email" 
                          className="transperent-input dark-gray-text w-100" 
                          name="subscriber_email" 
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="text-right">
                        <button 
                          type="submit" 
                          className="btn transperent-btn blue-text subscribe-btn subscribe-to-learning-btn peacock-green-gradient hvr-sweep-to-right"
                        >
                          Subscribe &gt;
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Most Read Section */}
              <div className="col-md-4">
                <h2 className="section-heading pecock-green-text container-space pb-3">
                  Most Read
                </h2>
                <div className="most-read-blogs-container">
                  {mostReadPosts.map((post) => (
                    <a key={post.id} href={`/blogs/topic/${post.slug}`} className="text-decoration-none">
                      <div className="read-blog container-space">
                        <div className="topic-and-author-container d-flex align-items-center justify-content-between">
                          <p className="topic-small-btn mb-0">{post.category}</p>
                          <p className="topic-small-btn bg-transperent p-0 mb-0">{post.author}</p>
                        </div>
                        <div className="topic-content pt-3">
                          <h3 className="blog-heading slight-gray-text most-read-blog-heading zoom-in">{post.title}</h3>
                          <article className="blog-content slight-gray-text">{post.excerpt}</article>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent topics section */}
        <section className="recent-topic-section black-bg pt-4 pt-5" id="topic-list">
          <div className="container rebel-container">
            <div className="topic-navigation container-space">
              <div className="topic-list list-unstyled mb-3">
                {allTopics.map((topic) => (
                  <div
                    key={topic}
                    className={`slight-gray-text topic-btn text-center ${selectedTopic === topic ? 'active' : ''}`}
                    onClick={() => setSelectedTopic(topic)}
                    style={{ cursor: 'pointer' }}
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            <div className="recent-topic-wrapper">
              {[...featuredPosts, ...mostReadPosts.slice(0, 3)].map((post) => (
                <div key={`topic-${post.id}`} className="topic-container">
                  <a href={`/blogs/topic/${post.slug}`} className="text-decoration-none">
                    <div className="fill-display overflow-hidden">
                      <div 
                        className="blog-image zoom-in" 
                        style={{
                          background: `url('${post.image}') center center no-repeat`,
                          backgroundSize: 'cover'
                        }}
                      ></div>
                    </div>
                    <div className="container-space">
                      <div className="topic-and-author-container d-flex align-items-center justify-content-between mt-2">
                        <p className="topic-small-btn mb-0">{post.category}</p>
                        <p className="topic-small-btn bg-transperent p-0 mb-0">{post.author}</p>
                      </div>
                      <h3 className="blog-heading slight-gray-text pt-1">{post.title}</h3>
                      <article className="blog-content slight-gray-text line-clamp">{post.excerpt}</article>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="see-more-btn-container text-center">
              <a href="/blogs/all-topics" className="btn yellow-text bold-family zoom-in">See all &gt;</a>
            </div>
          </div>
        </section>

        {/* Subscribe section mobile */}
        <section className="subscribe-section dark-gray-bg d-lg-none">
          <div className="subscribe-wrapper p-0">
            <h4 className="font-12 bt-bold-family slight-gray-text">Subscribe to the Blog</h4>
            <form className="subscribe-form subscribe-to-blog-form" onSubmit={handleSubscribeToBlog}>
              <div className="form-group mb-0 flex-70 pr-4">
                <input 
                  type="email" 
                  className="transperent-input w-100 slight-gray-text" 
                  name="subscriber_email" 
                  placeholder="Email Address"
                  value={blogEmail}
                  onChange={(e) => setBlogEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex-30 text-center">
                <button 
                  type="submit" 
                  className="btn transperent-btn slight-gray-text subscribe-btn subscribe-to-blog-btn subscribe-btn-gradient hvr-sweep-to-right"
                >
                  Subscribe &gt;
                </button>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default OurBlogs;