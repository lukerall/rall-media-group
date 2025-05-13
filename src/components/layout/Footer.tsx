import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin
} from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import { Link } from 'react-router-dom';
import ContactForm from '../ui/ContactForm';

export default function Footer() {
  return (
    <footer id="contact" className="bg-royal-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <AnimatedElement animation="slideUp">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Get in Touch</span>
              </h2>
              <p className="text-royal-300 mb-8 max-w-lg">
                Have a project in mind or want to learn more about our services?
                Fill out the form, and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:info@rallmediagroup.com" className="text-royal-200 hover:text-gold-500 transition-colors">
                    info@rallmediagroup.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                    <Phone size={18} />
                  </div>
                  <a href="tel:+1234567890" className="text-royal-200 hover:text-gold-500 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                    <MapPin size={18} />
                  </div>
                  <address className="text-royal-200 not-italic">
                    1234 Media Ave, Suite 500, New York, NY 10001
                  </address>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-royal-800 hover:bg-gold-500 flex items-center justify-center text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-royal-800 hover:bg-gold-500 flex items-center justify-center text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-royal-800 hover:bg-gold-500 flex items-center justify-center text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-royal-800 hover:bg-gold-500 flex items-center justify-center text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.2}>
            <div className="p-6 md:p-8 rounded-xl bg-royal-800/60 backdrop-blur-sm border border-royal-700/60">
              <ContactForm />
            </div>
          </AnimatedElement>
        </div>
        
        {/* Disclaimers */}
        <div className="border-t border-royal-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm text-royal-400">
            <div>
              <h5 className="font-bold text-royal-300 mb-2">ROI Disclaimer</h5>
              <p>All examples of ROI or client growth are based on previous results and are not guaranteed. Each project may vary based on multiple factors including industry, market conditions, and implementation.</p>
            </div>
            <div>
              <h5 className="font-bold text-royal-300 mb-2">Quote Disclaimer</h5>
              <p>Quotes provided are estimates. For an exact cost, please contact us for a tailored proposal based on your specific requirements and project scope.</p>
            </div>
          </div>
          
          <div className="text-center text-royal-400 text-sm">
            <p className="mb-4">Trusted by over 100 clients across 5 countries, serving industries including Real Estate, Construction, E-Commerce, and Technology.</p>
            <p>&copy; {new Date().getFullYear()} Rall Media Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}