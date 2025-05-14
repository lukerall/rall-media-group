import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import ServiceModal from '../ui/ServiceModal';
import { 
  Video, 
  Megaphone, 
  Globe, 
  Sparkles, 
  BarChart4,
  ChevronRight,
  CheckCircle2,
  Shield,
  Award,
  Users
} from 'lucide-react';

const services = [
  {
    title: 'Content Creation & Strategy',
    description: 'Transform your brand with authentic, engaging content that resonates with your target audience.',
    icon: Video,
    features: [
      'Strategic content planning and calendar',
      'Multi-platform optimization',
      'Performance tracking and analytics',
      'Brand voice development',
      'Content distribution strategy'
    ],
    color: 'bg-gold-500/10 text-gold-500',
    stats: '85%',
    statsText: 'Engagement Increase',
    delay: 0.2,
  },
  {
    title: 'Digital Marketing Solutions',
    description: 'Comprehensive marketing solutions delivering measurable results across key digital channels.',
    icon: Megaphone,
    features: [
      'Multi-channel campaign management',
      'Data-driven optimization',
      'Marketing automation',
      'Lead generation',
      'ROI tracking'
    ],
    color: 'bg-gold-500/10 text-gold-500',
    stats: '65%',
    statsText: 'Average ROI',
    delay: 0.3,
  },
  {
    title: 'Web Development',
    description: 'Create stunning, conversion-focused websites that deliver exceptional user experiences.',
    icon: Globe,
    features: [
      'Custom design & development',
      'Mobile optimization',
      'Performance tuning',
      'SEO integration',
      'Analytics setup'
    ],
    color: 'bg-gold-500/10 text-gold-500',
    stats: '40%',
    statsText: 'Conversion Improvement',
    delay: 0.4,
  },
  {
    title: 'AI Integration',
    description: 'Leverage artificial intelligence to automate processes and gain valuable insights.',
    icon: Sparkles,
    features: [
      'Process automation',
      'Data analysis',
      'AI-powered chatbots',
      'Predictive analytics',
      'Custom AI solutions'
    ],
    color: 'bg-gold-500/10 text-gold-500',
    stats: '50%',
    statsText: 'Efficiency Gain',
    delay: 0.5,
  },
  {
    title: 'Business Tools',
    description: 'Custom tools and dashboards that streamline operations and boost productivity.',
    icon: BarChart4,
    features: [
      'Custom dashboards',
      'Team collaboration tools',
      'Process automation',
      'Data visualization',
      'Integration services'
    ],
    color: 'bg-gold-500/10 text-gold-500',
    stats: '30%',
    statsText: 'Cost Reduction',
    delay: 0.6,
  },
];

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Expert support across time zones',
  },
  {
    icon: Award,
    title: 'Industry Experience',
    description: 'Proven track record of success',
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-10 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimatedElement animation="fade">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
              Our Services
            </span>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transforming Businesses with <span className="gradient-text">Premium Solutions</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.4}>
            <p className="text-lg text-royal-700 dark:text-royal-300">
              Delivering innovative solutions that drive digital transformation and sustainable growth
              for businesses across industries.
            </p>
          </AnimatedElement>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedElement
              key={feature.title}
              animation="slideUp"
              delay={0.2 + index * 0.1}
            >
              <div className="flex items-center gap-4 p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                  <p className="text-royal-600 dark:text-royal-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement 
              key={service.title} 
              animation="scale" 
              delay={service.delay}
              className="h-full"
            >
              <motion.div 
                className="h-full p-8 rounded-2xl glass border border-royal-200/20 dark:border-royal-700/20 hover:border-gold-300/50 dark:hover:border-gold-700/50 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                onClick={() => setSelectedService(service)}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-royal-700 dark:text-royal-300 mb-6">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="mb-6 p-4 rounded-lg bg-gold-500/5 border border-gold-500/10">
                  <div className="text-2xl font-bold text-gold-500 mb-1">
                    {service.stats}
                  </div>
                  <div className="text-sm text-royal-600 dark:text-royal-400">
                    {service.statsText}
                  </div>
                </div>

                <button 
                  className="inline-flex items-center text-gold-500 hover:text-gold-600 font-medium group"
                  onClick={() => setSelectedService(service)}
                >
                  Learn more 
                  <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="mt-16 text-center">
            <a 
              href="/launch"
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium bg-gold-gradient text-royal-900 hover:shadow-gold hover:scale-105 transition-all group"
            >
              Start Your Project
              <ChevronRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedElement>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}