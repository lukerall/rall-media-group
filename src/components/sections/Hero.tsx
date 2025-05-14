import React from 'react';
import { ChevronDown, Award, Shield, Users } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-50/30 to-royal-50/90 dark:from-royal-900/30 dark:to-royal-900/90 z-10"></div>
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34eb863&profile_id=165&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="fade" delay={0.2}>
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400">
              Premium Media & Technology Solutions
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Transforming Businesses</span>
              <span className="gradient-text">Through Innovation</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.6}>
            <p className="text-lg md:text-xl text-royal-700 dark:text-royal-300 mb-12 max-w-2xl mx-auto">
              A trusted partner in premium media solutions, cutting-edge technology, and strategic innovation. Serving clients across Real Estate, Construction, E-commerce, and Technology sectors.
            </p>
          </AnimatedElement>

          {/* Trust Indicators */}
          <AnimatedElement animation="slideUp" delay={0.7}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-4 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-3">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1">100+</h3>
                <p className="text-royal-600 dark:text-royal-400 text-sm">Projects Delivered</p>
              </div>
              <div className="p-4 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-3">
                  <Shield size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1">2 Years</h3>
                <p className="text-royal-600 dark:text-royal-400 text-sm">Industry Excellence</p>
              </div>
              <div className="p-4 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-3">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1">5</h3>
                <p className="text-royal-600 dark:text-royal-400 text-sm">Countries Served</p>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/launch" className="btn-primary">
                Launch Your Project
              </Link>
              <Link to="/about" className="btn-outline">
                Why Choose Us
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-royal-800/20 backdrop-blur-sm text-royal-900 dark:text-white hover:bg-white/40 dark:hover:bg-royal-700/40 transition-colors"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.a>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-20 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}