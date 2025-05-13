import React, { useState } from 'react';
import AnimatedElement from '../components/ui/AnimatedElement';
import { Play, Globe, Award, Shield, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Real Estate Digital Transformation',
    client: 'Leading Property Developer',
    category: 'Digital Solutions',
    description: 'Complete digital transformation initiative improving property showcase and client engagement by 150%.',
    thumbnail: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/video/684312165?h=81873dc883',
    stats: {
      roi: '150%',
      timeframe: '3 months',
      impact: 'Sales up 80%'
    }
  },
  {
    id: 2,
    title: 'E-commerce Growth Strategy',
    client: 'Online Retail Brand',
    category: 'Marketing',
    description: 'Comprehensive marketing transformation leading to 100% increase in online sales.',
    thumbnail: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/video/684312165?h=81873dc883',
    stats: {
      roi: '100%',
      timeframe: '2 months',
      impact: 'Traffic up 120%'
    }
  },
  {
    id: 3,
    title: 'Construction Management Platform',
    client: 'Regional Construction Firm',
    category: 'Technology',
    description: 'Custom project management solution improving efficiency by 60%.',
    thumbnail: 'https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/video/684312165?h=81873dc883',
    stats: {
      roi: '85%',
      timeframe: '4 months',
      impact: 'Efficiency up 60%'
    }
  }
];

const achievements = [
  {
    icon: Globe,
    title: 'Market Reach',
    value: '5',
    label: 'Countries Served'
  },
  {
    icon: Award,
    title: 'Project Success',
    value: '15+',
    label: 'Projects Completed'
  },
  {
    icon: Shield,
    title: 'Client Satisfaction',
    value: '95%',
    label: 'Success Rate'
  },
  {
    icon: Users,
    title: 'Client Growth',
    value: '50+',
    label: 'Satisfied Clients'
  }
];

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-royal-100/50 dark:bg-royal-800/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement animation="fade">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
                Success Stories
              </span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Delivering <span className="gradient-text">Real Results</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.4}>
              <p className="text-lg text-royal-700 dark:text-royal-300">
                Discover how we've helped businesses achieve digital excellence and drive unprecedented growth 
                across Real Estate, Construction, E-commerce, and Technology sectors.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 border-b border-royal-200/20 dark:border-royal-700/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedElement
                key={achievement.title}
                animation="slideUp"
                delay={0.2 + index * 0.1}
              >
                <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                    <achievement.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1">{achievement.value}</div>
                  <div className="text-royal-600 dark:text-royal-400 text-sm">{achievement.label}</div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedElement 
                key={project.id} 
                animation="scale" 
                delay={0.2 + index * 0.1}
              >
                <motion.div 
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 to-transparent opacity-80"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-royal-900 transform group-hover:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gold-500/20 text-gold-500 mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-royal-200 text-sm mb-4">{project.client}</p>
                      <div className="grid grid-cols-3 gap-2 text-sm text-royal-300">
                        <div>
                          <span className="block text-gold-500 font-bold">{project.stats.roi}</span>
                          ROI
                        </div>
                        <div>
                          <span className="block text-gold-500 font-bold">{project.stats.timeframe}</span>
                          Timeline
                        </div>
                        <div>
                          <span className="block text-gold-500 font-bold">{project.stats.impact}</span>
                          Impact
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>

          {/* CTA Section */}
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
      </section>

      {/* Video Modal */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-royal-900/90 z-50 flex items-center justify-center p-4" 
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <iframe 
              src={projects.find(p => p.id === selectedProject)?.videoUrl} 
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-royal-900/60 flex items-center justify-center text-white z-10"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}