import { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

// Footer Component

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