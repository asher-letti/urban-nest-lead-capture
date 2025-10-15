import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedListings />
        <WhyChooseUs />
        <LeadForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
