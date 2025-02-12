import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from './components/Link';
import Header from './layout/Header';
import { navItems } from './lib/config';

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Company</h3>
          <p className="text-gray-300">
            Building amazing digital experiences since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="text-gray-300">123 Business Street</p>
          <p className="text-gray-300">City, State 12345</p>
          <p className="text-gray-300">contact@example.com</p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Page Components
const Home = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
    <p className="text-xl text-gray-600">
      We create amazing digital experiences for our clients.
    </p>
  </div>
);

const About = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">About Us</h1>
    <p className="text-xl text-gray-600">
      Learn about our company's mission and values.
    </p>
  </div>
);

const Services = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
    <p className="text-xl text-gray-600">
      Discover the range of services we offer.
    </p>
  </div>
);

const Contact = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p className="text-xl text-gray-600">
      Get in touch with our team.
    </p>
  </div>
);

// Main App Component
const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;