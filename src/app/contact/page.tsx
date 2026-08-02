'use client';

import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? 'mnjrrqoa';

export default function ContactPage() {
  const [state, handleSubmit] = useForm(formspreeFormId);

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <p className="text-sm text-[#808080]">
            <Link href="/" className="hover:text-[#8B3A62] transition-colors">Home</Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <span>Contact</span>
          </p>
        </div>

        {/* Full Height Contact Section */}
        <section className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-6 py-20">
          <div className="w-full max-w-2xl">
            <h1 className="font-display text-5xl md:text-6xl mb-12 text-center">Say something.</h1>

            {/* Form */}
            {state.succeeded ? (
              <div className="bg-[#1a3a2a] border border-[#2a6a4a] text-[#7ae8ba] px-6 py-4 text-center">
                <p className="font-medium mb-2">Thanks for reaching out!</p>
                <p className="text-sm">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#8B3A62] mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#8B3A62] focus:ring-1 focus:ring-[#8B3A62] transition-colors"
                    placeholder="Your name"
                  />
                  <ValidationError field="name" errors={state.errors} />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#8B3A62] mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#8B3A62] focus:ring-1 focus:ring-[#8B3A62] transition-colors"
                    placeholder="your@email.com"
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-[#8B3A62] mb-3">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#8B3A62] focus:ring-1 focus:ring-[#8B3A62] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                  <ValidationError field="subject" errors={state.errors} />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#8B3A62] mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#8B3A62] focus:ring-1 focus:ring-[#8B3A62] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>

                {/* General Form Errors */}
                {state.errors && Object.keys(state.errors).length > 0 && (
                  <div className="bg-[#3a1a1a] border border-[#6a2a2a] text-[#e87a7a] px-4 py-3 text-sm">
                    There was an error submitting your message. Please check the fields above and try again.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#8B3A62] text-white py-3 font-medium hover:bg-[#A64D7A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send It'}
                </button>
              </form>
            )}

            {/* Email Fallback */}
            <div className="border-t border-[#1a1a1a] pt-8 text-center">
              <p className="text-[#a0a0a0] mb-4">Or send us an email directly:</p>
              <a
                href="mailto:hello@unlovedproductions.com"
                className="inline-flex items-center gap-2 text-[#8B3A62] hover:text-[#A64D7A] transition-colors font-medium"
              >
                <Mail size={18} />
                hello@unlovedproductions.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
