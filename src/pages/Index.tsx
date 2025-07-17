import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import SolutionsSection from '@/components/SolutionsSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
    </div>
  );
};

export default Index;
