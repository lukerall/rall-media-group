'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass",
        scrolled ? "py-2 shadow-md" : "py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold">
            <span className="text-royal-900 dark:text-white">RALL</span>
            <span className="text-gold-500">MEDIA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={cn(
                    "text-royal-800 dark:text-royal-100 hover:text-gold-500 dark:hover:text-gold-500 transition-colors font-medium",
                    currentPath === link.href && "text-gold-500"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Link 
            href="/launch" 
            className="btn-primary"
          >
            Launch Project
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="p-2 text-royal-900 dark:text-royal-100"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-4">
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className={cn(
                          "block py-2 text-royal-800 dark:text-royal-100 hover:text-gold-500 dark:hover:text-gold-500 transition-colors font-medium",
                          currentPath === link.href && "text-gold-500"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/launch" 
                  className="btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Launch Project
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}