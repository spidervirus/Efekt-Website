import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import WhoWeServeSection from '@/components/WhoWeServeSection'
import PanelTypesSection from '@/components/PanelTypesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
// import GallerySection from '@/components/GallerySection'
import ContactSection from '@/components/ContactSection'
import ProductViewer3D from '@/components/ProductViewer3D'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhoWeServeSection />
      <PanelTypesSection />
      <ProductViewer3D />
      <HowItWorksSection />
      <WhyChooseUsSection />
      {/* <GallerySection /> */}
      <ContactSection />
    </div>
  );
};

export default Index;
