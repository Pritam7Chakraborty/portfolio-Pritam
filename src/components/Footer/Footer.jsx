// src/components/Footer/Footer.jsx
import React from "react";
import footer_logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";

// Helper for Social Media Links with SVG icons
const SocialLink = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-neutral-400 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-neutral-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        
        {/* Top Section: Logo and Tagline */}
        <div className="flex flex-col items-center text-center gap-4">
          <Link to="/#home">
            <img src={footer_logo} alt="footer logo" className="w-24 transition-transform duration-300 hover:scale-110" />
          </Link>
          <p className="max-w-md text-lg bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent font-semibold">
            Design. Code. Create. Turning Ideas into Reality.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-6">
          <SocialLink href="https://github.com/Pritam7Chakraborty" ariaLabel="GitHub Profile">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/pritam-chakraborty" ariaLabel="LinkedIn Profile">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </SocialLink>
        </div>
        
        {/* Bottom Section: Copyright */}
        <div className="border-t border-neutral-700 w-full pt-6 mt-4 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Pritam Chakraborty. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;