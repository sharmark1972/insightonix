'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="font-sans print:hidden text-white" style={{background: '#0f1419', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md" style={{background: '#1e3a5f'}}>
                  <span className="font-bold text-xl tracking-wider text-white">IN</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-white tracking-wide">Insightonix</span>
                  <span className="text-[0.65rem] uppercase tracking-widest font-medium" style={{color: '#87d4e0'}}>Global Insights Journal</span>
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-300">
              A peer-reviewed academic journal publishing cutting-edge research across disciplines to advance global knowledge and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/insightonix" className="transition-colors hover:text-white text-gray-400"><Facebook className="h-5 w-5" /></a>
              <a href="https://twitter.com/insightonix" className="transition-colors hover:text-white text-gray-400"><Twitter className="h-5 w-5" /></a>
              <a href="https://linkedin.com/company/insightonix" className="transition-colors hover:text-white text-gray-400"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Journal</Link></li>
              <li><Link href="/editorial-board" className="hover:text-white transition-colors">Editorial Board</Link></li>
              <li><Link href="/library" className="hover:text-white transition-colors">Library</Link></li>
              <li><Link href="/issues" className="hover:text-white transition-colors">Current Issue</Link></li>
            </ul>
          </div>

          {/* Authors */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">For Authors</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/submit" className="hover:text-white transition-colors">Submit Paper</Link></li>
              <li><Link href="/submission-guidelines" className="hover:text-white transition-colors">Submission Guidelines</Link></li>
              <li><Link href="/peer-review-process" className="hover:text-white transition-colors">Peer Review Policy</Link></li>
              <li><Link href="/fees" className="hover:text-white transition-colors">Publication Fees</Link></li>
              <li><Link href="/copyright" className="hover:text-white transition-colors">Copyright Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <span>
                  Global Insights Research Center<br/>
                  International Headquarters<br/>
                  Research Hub, Global Office
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="tel:+1-800-research" className="hover:text-white">Contact Us</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:editor@insightonix.com" className="hover:text-white">editor@insightonix.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400" style={{borderTop: '1px solid rgba(255,255,255,0.1)'}}>
          <p>© {currentYear} Global Insights Journal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-lg transition-all z-40 print:hidden"
        style={{background: '#1e3a5f'}}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
