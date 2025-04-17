import Banner from "./components/Banner";
import BigFeatureSection from "./components/BigFeatureSection";
import CompanySection from "./components/CompanySection";
import CTASection from "./components/CTASection";
import ExampleSection from "./components/ExampleSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SubFooter from "./components/SubFooter";

function App() {
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* Companies Section */}
      <CompanySection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Big Feature Section */}
      <BigFeatureSection />

      {/* Example Section */}
      <ExampleSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Sub Footer */}
      <SubFooter />
    </>
  );
}

export default App;
