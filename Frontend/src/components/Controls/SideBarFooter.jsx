import React from 'react';

// Simple SVG Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const KaggleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 22h-4.5l-7-10 7-10H22" />
    <path d="M2 2v20" />
    <path d="M10 12H2" />
  </svg>
);

const NotionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v18H3z" />
    <path d="M8 7v10l4-5 4 5V7" />
  </svg>
);

const LinkGroup = ({ title, children }) => (
  <div className="flex flex-col gap-2">
    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</span>
    <div className="flex gap-3">
      {children}
    </div>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-black transition-colors p-1 hover:bg-gray-100 rounded-md"
    title={label}
  >
    <Icon />
  </a>
);

export default function SidebarFooter() {
  return (
    <div className="mt-auto pt-6 flex flex-col gap-6 border-t border-gray-100">
      
      {/* Section 1: Project Links */}
      <LinkGroup title="About Project">
        <a href="https://github.com/deveshio/Handscribe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
          <GithubIcon />
          <span>Source Code</span>
        </a>
        <a href="https://deveshio.notion.site/Devesh-Kumar-Suthar-1f353329aa5f80198193f292a4d27ce4?v=29753329aa5f8093a2e5000ce481f005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
          <NotionIcon />
          <span>More Projects</span>
        </a>
      </LinkGroup>

      {/* Section 2: Personal Links */}
      <LinkGroup title="Connect">
        <SocialLink href="https://www.github.com/deveshio" icon={GithubIcon} label="GitHub Profile" />
        <SocialLink href="https://www.kaggle.com/deveshsuthar" icon={KaggleIcon} label="Kaggle Profile" />
        <SocialLink href="https://www.linkedin.com/in/devesh-suthar-" icon={LinkedinIcon} label="LinkedIn Profile" />
      </LinkGroup>

      <div className="text-[10px] text-gray-400 text-center">
        © 2025 HandScribe
      </div>
    </div>
  );
}