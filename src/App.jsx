import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import CTABanner from './components/CTABanner';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
        <CTABanner />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
