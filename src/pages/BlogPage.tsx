import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/ui/AnimatedElement';
import { ArrowRight, Calendar, Clock, User, Tag, ChevronRight } from 'lucide-react';

const featuredPost = {
  id: 1,
  title: 'The Future of Digital Marketing in 2025',
  excerpt: 'Explore emerging trends and technologies shaping the future of digital marketing strategies. Learn how AI, personalization, and immersive experiences are transforming the way brands connect with their audiences.',
  image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  author: 'Sarah Johnson',
  date: 'March 15, 2025',
  readTime: '5 min read',
  category: 'Digital Marketing',
  tags: ['Marketing', 'AI', 'Technology']
};

const blogPosts = [
  {
    id: 2,
    title: 'Maximizing ROI with AI-Powered Analytics',
    excerpt: 'Learn how businesses are leveraging artificial intelligence to optimize their marketing ROI and drive better results through data-driven decisions.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Chen',
    date: 'March 12, 2025',
    readTime: '4 min read',
    category: 'Analytics',
    tags: ['Analytics', 'AI', 'ROI']
  },
  {
    id: 3,
    title: 'Building Effective Content Strategies',
    excerpt: 'Discover key principles for creating content that engages and converts in today\'s digital landscape. Master the art of storytelling and audience engagement.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Emily Rodriguez',
    date: 'March 10, 2025',
    readTime: '6 min read',
    category: 'Content Strategy',
    tags: ['Content', 'Strategy', 'Marketing']
  },
  {
    id: 4,
    title: 'The Rise of Video Marketing',
    excerpt: 'Explore how video content is becoming the dominant force in digital marketing and learn strategies to create engaging video campaigns.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'David Kim',
    date: 'March 8, 2025',
    readTime: '4 min read',
    category: 'Video Marketing',
    tags: ['Video', 'Content', 'Marketing']
  }
];

const categories = [
  'All Posts',
  'Digital Marketing',
  'Analytics',
  'Content Strategy',
  'Video Marketing',
  'Social Media',
  'SEO'
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-royal-100/50 dark:bg-royal-800/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement animation="fade">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
                Industry Insights
              </span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Latest <span className="gradient-text">Insights</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.4}>
              <p className="text-lg text-royal-700 dark:text-royal-300">
                Expert perspectives on digital marketing, technology, and business growth. 
                Stay ahead with our latest insights and industry analysis.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-royal-200/20 dark:border-royal-700/20">
        <div className="container">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? 'bg-gold-500 text-royal-900'
                    : 'bg-royal-100 dark:bg-royal-800 text-royal-700 dark:text-royal-300 hover:bg-gold-500 hover:text-royal-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section pb-8">
        <div className="container">
          <AnimatedElement animation="scale">
            <Link to={`/blog/${featuredPost.id}`} className="block group">
              <div className="rounded-2xl overflow-hidden glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gold-500 text-royal-900">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:pr-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gold-500/20 text-gold-500">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-gold-500 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-royal-600 dark:text-royal-400 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-royal-600 dark:text-royal-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="section pt-8">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <button className="text-gold-500 hover:text-gold-600 font-medium flex items-center gap-1 group">
              View All 
              <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedElement 
                key={post.id} 
                animation="scale" 
                delay={0.2 + index * 0.1}
              >
                <article className="group h-full">
                  <Link to={`/blog/${post.id}`} className="block h-full">
                    <div className="rounded-xl overflow-hidden glass border border-royal-200/20 dark:border-royal-700/20 h-full">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gold-500/20 text-gold-500 backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-royal-600 dark:text-royal-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full bg-royal-100 dark:bg-royal-800 text-royal-600 dark:text-royal-400"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-royal-600 dark:text-royal-400">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-2xl glass border border-royal-200/20 dark:border-royal-700/20 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-royal-600 dark:text-royal-400">
                Get the latest insights and trends delivered straight to your inbox
              </p>
            </div>
            
            <form className="flex gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gold-500 text-royal-900 font-medium hover:bg-gold-600 transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}