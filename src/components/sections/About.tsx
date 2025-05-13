import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Crown, Users, Trophy, Target, Globe, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section bg-royal-100/50 dark:bg-royal-800/30">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedElement animation="fade">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
                Our Story
              </span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Setting the Standard in <span className="gradient-text">Digital Excellence</span>
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.4}>
              <p className="text-lg text-royal-700 dark:text-royal-300 max-w-3xl mx-auto">
                Since 2023, Rall Media Group has been delivering innovative media and technology solutions, 
                focusing on quality and results for businesses in Real Estate, Construction, E-commerce, and Technology sectors.
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slideIn" delay={0.2}>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Rall Media Group team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 rounded-xl glass border border-gold-300/20 dark:border-gold-700/20 shadow-lg">
                  <p className="font-heading text-xl"><span className="text-gold-500 font-bold">Growing</span> Impact</p>
                  <p className="text-royal-600 dark:text-royal-400 text-sm">5 Countries</p>
                </div>
              </div>
            </AnimatedElement>

            <div className="space-y-8">
              <AnimatedElement animation="slideUp" delay={0.3}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Innovation & Excellence
                </h3>
                <p className="text-royal-700 dark:text-royal-300 mb-6">
                  As a dynamic force in digital transformation, we combine innovative solutions with 
                  strategic insights to deliver exceptional results. Our approach integrates modern 
                  technology with proven strategies to drive growth for our clients.
                </p>
              </AnimatedElement>

              <div className="space-y-6">
                <AnimatedElement animation="slideUp" delay={0.4}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Growing Reach</h4>
                      <p className="text-royal-700 dark:text-royal-300">
                        Expanding our presence across 5 countries with strategic partnerships.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement animation="slideUp" delay={0.5}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Quality Assurance</h4>
                      <p className="text-royal-700 dark:text-royal-300">
                        Rigorous quality standards and best practices in every project we deliver.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement animation="slideUp" delay={0.6}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Client Success</h4>
                      <p className="text-royal-700 dark:text-royal-300">
                        Proven track record of delivering successful projects and driving results.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <AnimatedElement animation="slideUp" delay={0.3}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Users size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <p className="text-royal-600 dark:text-royal-400">Satisfied Clients</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.4}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Globe size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">5</div>
                <p className="text-royal-600 dark:text-royal-400">Countries Served</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.5}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Trophy size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <p className="text-royal-600 dark:text-royal-400">Projects Completed</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.6}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Crown size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">2</div>
                <p className="text-royal-600 dark:text-royal-400">Years of Innovation</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}