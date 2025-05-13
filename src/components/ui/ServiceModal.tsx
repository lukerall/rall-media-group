import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    icon: React.ElementType;
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-royal-900/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 p-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-royal-200/20 dark:hover:bg-royal-700/20 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>

            <p className="text-royal-700 dark:text-royal-300 mb-8">
              {service.description}
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Key Features</h4>
              <ul className="grid gap-3">
                {service.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-royal-100/50 dark:bg-royal-800/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}