'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface ContactFormProps {
  className?: string;
}

interface ContactData {
  name: string;
  email: string;
  company: string;
  subject: string;
  source: 'Website Form';
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Strictly structured contact data
      const contactData: ContactData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        subject: formData.subject || '',
        source: 'Website Form'
      };

      // Log the exact payload being sent
      console.log('Contact data payload:', contactData);

      // Check if contact already exists
      const { data: existingContact } = await supabase
        .from("contacts")
        .select("id")
        .eq("email", contactData.email)
        .limit(1)
        .maybeSingle();

      let contactId: string;

      if (existingContact) {
        contactId = existingContact.id;
      } else {
        const { data: newContact, error: insertError } = await supabase
          .from("contacts")
          .insert([contactData])
          .select()
          .single();

        if (insertError) throw insertError;

        contactId = newContact.id;
      }

      // Create submission with message
      const { error: submissionError } = await supabase
        .from('submissions')
        .insert({
          contact_id: contactId,
          message: formData.message
        });

      if (submissionError) throw submissionError;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('There was an error submitting your message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
            placeholder="Your email"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="company" className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
          placeholder="Your company (optional)"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
          placeholder="Subject (optional)"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
          placeholder="Your message"
        ></textarea>
      </div>

      {status === 'error' && (
        <div className="mt-4 p-4 rounded-lg bg-error-100 dark:bg-error-900/30 text-error-600 dark:text-error-400">
          {errorMessage}
        </div>
      )}

      {status === 'success' && (
        <div className="mt-4 p-4 rounded-lg bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400">
          Your message has been sent successfully! We'll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full py-3 px-6 rounded-lg bg-gold-500 text-royal-900 font-medium hover:bg-gold-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            Send Message <Send size={18} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
}