import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterCreator } from "@/components/NewsletterCreator";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NewsletterCreator />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
