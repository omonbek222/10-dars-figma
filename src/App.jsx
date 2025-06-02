import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StockSection from './components/StockSection';
import PricesSection from './components/PricesSection';
import DeliverySection from './components/DeliverySection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Fotter';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <PricesSection/>
      <StockSection/>
      <DeliverySection/>
      <BenefitsSection/>
      <Footer/>
    </div>
  );
}

export default App;
