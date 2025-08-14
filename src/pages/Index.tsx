import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import ContactForm from '../components/sections/ContactForm';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ComparisonSection from '../components/sections/ComparisonSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ideovent Technologies - Digital Solutions for Businesses";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ComparisonSection /> {/* New section here */}
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
