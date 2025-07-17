import React from 'react';

type FooterProps = object

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const Footer: React.FC<FooterProps> = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#' },
        { label: 'Products', href: '#' },
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Size Guide', href: '#' },
        { label: 'Shipping', href: '#' },
        { label: 'Returns', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Instagram', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'TikTok', href: '#' },
        { label: 'YouTube', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">HSY</h3>
            <p className="text-gray-600 text-sm">
              Premium streetwear for the modern individual. 
              Quality, comfort, and style in every piece.
            </p>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-gray-900 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 HSY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;