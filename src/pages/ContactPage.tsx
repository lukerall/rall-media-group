import React from 'react';
import AnimatedElement from '../components/ui/AnimatedElement';
import { Mail, Phone, MapPin, Globe, Users, Shield, Award } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-royal-100/50 dark:bg-royal-800/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement animation="fade">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
                Let's Connect
              </span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Partner with <span className="gradient-text">Industry Experts</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.4}>
              <p className="text-lg text-royal-700 dark:text-royal-300">
                Connect with our team to transform your digital presence and drive growth.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 border-b border-royal-200/20 dark:border-royal-700/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <AnimatedElement animation="slideUp" delay={0.2}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Globe size={24} />
                </div>
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-royal-600 dark:text-royal-400 text-sm">Countries Served</div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.3}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Users size={24} />
                </div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-royal-600 dark:text-royal-400 text-sm">Satisfied Clients</div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.4}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Shield size={24} />
                </div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-royal-600 dark:text-royal-400 text-sm">Projects Completed</div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.5}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Award size={24} />
                </div>
                <div className="text-3xl font-bold mb-1">2</div>
                <div className="text-royal-600 dark:text-royal-400 text-sm">Years of Excellence</div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedElement animation="slideIn">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Let's Build Your <span className="gradient-text">Digital Success</span>
                </h2>
                <p className="text-royal-700 dark:text-royal-300 mb-8">
                  With a focus on quality and innovation, we help businesses across Real Estate, 
                  Construction, E-commerce, and Technology sectors achieve their digital goals.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <a href="mailto:info@rallmediagroup.com" className="text-royal-700 dark:text-royal-300 hover:text-gold-500">
                        info@rallmediagroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <a href="tel:+1234567890" className="text-royal-700 dark:text-royal-300 hover:text-gold-500">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <address className="text-royal-700 dark:text-royal-300 not-italic">
                        1234 Media Ave, Suite 500<br />
                        New York, NY 10001
                      </address>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-royal-100 dark:bg-royal-800/50">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-royal-700 dark:text-royal-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Weekend Support Available for Urgent Matters</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideIn" delay={0.2}>
              <div className="p-8 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <ContactForm />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
}