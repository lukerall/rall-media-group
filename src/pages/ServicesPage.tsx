import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../components/ui/AnimatedElement';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-50/30 to-royal-50/90 dark:from-royal-900/30 dark:to-royal-900/90 z-0"></div>
        <div className="container relative z-10">
          <AnimatedElement animation="slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Our <span className="gradient-text">Premium Services</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.2}>
            <p className="text-xl text-royal-700 dark:text-royal-300 text-center max-w-3xl mx-auto">
              Comprehensive solutions tailored to elevate your brand and drive exceptional results
              in today's digital landscape.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section key={service.title} className={`py-20 ${index % 2 === 0 ? 'bg-royal-100/50 dark:bg-royal-800/30' : ''}`}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedElement animation="slideIn" delay={0.2} className={index % 2 === 0 ? '' : 'lg:order-2'}>
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 rounded-xl glass border border-gold-300/20 dark:border-gold-700/20">
                    <p className="font-heading text-xl">
                      <span className="text-gold-500 font-bold">{service.stats}</span>
                    </p>
                    <p className="text-royal-600 dark:text-royal-400 text-sm">{service.statsText}</p>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slideUp" delay={0.3} className={index % 2 === 0 ? '' : 'lg:order-1'}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-royal-700 dark:text-royal-300 mb-8">
                  {service.fullDescription}
                </p>

                <div className="space-y-6 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-500">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-royal-600 dark:text-royal-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-gold-gradient text-royal-900 hover:shadow-gold hover:scale-105 transition-all group"
                  whileHover={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </AnimatedElement>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}