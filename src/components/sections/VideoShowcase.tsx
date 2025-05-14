import React, { useState } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videoProjects = [
  {
    id: 1,
    title: 'Brand Story Campaign',
    description: 'Emotional storytelling that connects audiences with the brand mission.',
    thumbnail: 'https://images.pexels.com/photos/2346017/pexels-photo-2346017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/video/684312165?h=81873dc883',
    category: 'Marketing',
  },
  {
    id: 2,
    title: 'Product Launch',
    description: 'Dynamic showcase of new product features and benefits.',
    thumbnail: 'https://images.pexels.com/photos/3944306/pexels-photo-3944306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/video/684312165?h=81873dc883',
    category: 'Product',
  },
  {
    id: 3,
    title: 'Client Success Story',
    description: 'Real testimonials from clients showcasing the impact of our work.',
    thumbnail: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/video/684312165?h=81873dc883',
    category: 'Testimonial',
  },
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const openVideo = (id: number) => {
    setSelectedVideo(id);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="showcase" className="section bg-royal-100/50 dark:bg-royal-800/30">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimatedElement animation="fade">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
              Our Work
            </span>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Video Projects</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.4}>
            <p className="text-lg text-royal-700 dark:text-royal-300">
              Explore our portfolio of captivating video content created for brands across various industries.
              Each project showcases our commitment to quality and creativity.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoProjects.map((project, index) => (
            <AnimatedElement 
              key={project.id} 
              animation="slideUp" 
              delay={0.2 + index * 0.1}
            >
              <motion.div 
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openVideo(project.id)}
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
                    <p className="text-royal-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>

        {selectedVideo !== null && (
          <div className="fixed inset-0 bg-royal-900/90 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <iframe 
                src={videoProjects.find(p => p.id === selectedVideo)?.videoUrl} 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-royal-900/60 flex items-center justify-center text-white z-10"
                onClick={closeVideo}
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}