import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nairobi.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find Your Dream Home{" "}
            <span className="text-primary">– Wherever You Are</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            We help you discover verified properties and investment opportunities. 
            Fill the form below and we'll reach out personally – no automated emails, 
            just real people assisting you.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>

          {/* Testimonial Bubble */}
          <div className="mt-12 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-md shadow-lg">
            <p className="text-card-foreground italic mb-3">
              "UrbanNest helped me find my first investment property abroad – the team 
              was incredibly helpful and responsive."
            </p>
            <p className="text-sm font-semibold text-primary">– Gabriel M., Diaspora Investor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
