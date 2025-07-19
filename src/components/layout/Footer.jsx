import React from 'react';
import { Divider, Link } from '@nextui-org/react';
import { Linkedin, Mail, TreePine, MapPin } from 'lucide-react';
import { personalInfo } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TreePine className="text-primary" size={24} />
              <span className="font-bold text-xl">{personalInfo.name}</span>
            </div>
            <p className="text-default-600 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-default-500 text-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="space-x-4 font-semibold text-lg">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-default-600">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-sm text-default-600 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </Link>
              <Link
                href={personalInfo.linkedin}
                isExternal
                className="flex items-center space-x-2 text-sm text-default-600 hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Areas of Expertise</h3>
            <div className="space-y-1 text-sm text-default-600">
              <p>🌲 ForestTech & Digital Tools</p>
              <p>📈 Market Entry Strategy</p>
              <p>🔗 Sustainable Supply Chains</p>
              <p>🪵 Wood Resource Management</p>
              <p>🌍 International Forestry</p>
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-default-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-default-500 text-sm">
            Built with React & Hero UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
