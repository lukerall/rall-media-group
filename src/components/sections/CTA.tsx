import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto rounded-2xl glass border border-royal-200/20 dark:border-royal-700/20 overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <AnimatedElement animation="slideUp">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to <span className="gradient-text">Elevate Your Brand?</span>
                  </h2>
                </AnimatedElement>
                <AnimatedElement animation="slideUp" delay={0.2}>
                  <p className="text-lg text-royal-700 dark:text-royal-300 mb-8">
                    Partner with Rall Media Group for premium media solutions that drive results
                    and position your business for long-term success.
                  </p>
                </AnimatedElement>
                <AnimatedElement animation="slideUp" delay={0.4}>
                  <motion.a 
                    href="#contact"
                    className="inline-block px-8 py-4 rounded-lg font-medium bg-gold-gradient text-royal-900 hover:shadow-gold hover:scale-105 transition-all active:scale-95"
                    whileHover={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
                  >
                    <span className="flex items-center">
                      Start Your Project <ArrowRight size={18} className="ml-2" />
                    </span>
                  </motion.a>
                </AnimatedElement>
              </div>
              <div className="md:col-span-2">
                <AnimatedElement animation="scale" delay={0.3}>
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-500/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-500/10 rounded-full blur-xl"></div>
                    <img 
                      src="https://images.pexels.com/photos/5989924/pexels-photo-5989924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Team collaboration" 
                      className="relative z-10 rounded-xl"
                    />
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}