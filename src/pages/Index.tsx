import ShippingBar from "@/components/ShippingBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import EcoSection from "@/components/EcoSection";
import MerchSection from "@/components/MerchSection";
import CommunitySection from "@/components/CommunitySection";
import SocialSection from "@/components/SocialSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* Navbar fija — el Hero queda por debajo de ella */}
    <div className="fixed top-0 left-0 right-0 z-50">
      <ShippingBar />
      <Navbar />
    </div>
    {/* Hero arranca desde top-0, la imagen queda detrás del navbar */}
    <HeroSection />
    <ProductsSection />
    <EcoSection />
    <MerchSection />
    <CommunitySection />
    <TestimonialsSection />
    <SocialSection />
    <NewsletterSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
