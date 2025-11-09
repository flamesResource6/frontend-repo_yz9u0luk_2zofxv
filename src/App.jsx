import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter antialiased text-slate-900 bg-white">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
