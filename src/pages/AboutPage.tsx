import React from 'react';
import AnimatedElement from '../components/ui/AnimatedElement';
import { Crown, Users, Trophy, Target, Globe, Shield, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-royal-100/50 dark:bg-royal-800/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement animation="fade">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
                Our Story
              </span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Setting the Standard in <span className="gradient-text">Digital Excellence</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.4}>
              <p className="text-lg text-royal-700 dark:text-royal-300">
                Since 2023, we've been delivering innovative media and technology solutions, 
                focusing on quality and results for businesses in Real Estate, Construction, E-commerce, and Technology sectors.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slideIn">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 rounded-xl glass border border-gold-300/20 dark:border-gold-700/20">
                  <p className="font-heading text-xl"><span className="text-gold-500 font-bold">Growing</span> Impact</p>
                  <p className="text-royal-600 dark:text-royal-400 text-sm">5 Countries</p>
                </div>
              </div>
            </AnimatedElement>
            
            <div>
              <AnimatedElement animation="slideUp" delay={0.2}>
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <p className="text-royal-700 dark:text-royal-300 mb-8">
                  What started as a passion for creating authentic digital solutions has evolved into 
                  a comprehensive suite of premium media and technology services. Our journey is marked 
                  by continuous innovation and a deep understanding of the digital landscape.
                </p>
              </AnimatedElement>
              
              <div className="space-y-6">
                <AnimatedElement animation="slideUp" delay={0.3}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500">
                      <Crown size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Quality First</h3>
                      <p className="text-royal-700 dark:text-royal-300">
                        Every project is executed with meticulous attention to detail and commitment to excellence.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement animation="slideUp" delay={0.4}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                      <p className="text-royal-700 dark:text-royal-300">
                        Track record of delivering successful projects with measurable impact.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement animation="slideUp" delay={0.5}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Growing Reach</h3>
                      <p className="text-royal-700 dark:text-royal-300">
                        Expanding our presence across 5 countries with strategic partnerships.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section bg-royal-100/50 dark:bg-royal-800/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
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
                  <Award size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">2</div>
                <p className="text-royal-600 dark:text-royal-400">Years of Innovation</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedElement animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Core <span className="gradient-text">Values</span>
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                These principles guide our approach to delivering excellence and driving results for our clients.
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement animation="scale" delay={0.3}>
              <div className="p-8 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="w-14 h-14 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500 mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-royal-700 dark:text-royal-300">
                  Embracing cutting-edge solutions and creative approaches to solve complex challenges.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="scale" delay={0.4}>
              <div className="p-8 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="w-14 h-14 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500 mb-6">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-royal-700 dark:text-royal-300">
                  Maintaining the highest standards in everything we do, from strategy to execution.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="scale" delay={0.5}>
              <div className="p-8 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="w-14 h-14 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500 mb-6">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Client Success</h3>
                <p className="text-royal-700 dark:text-royal-300">
                  Your success is our success. We're committed to delivering results that exceed expectations.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
}