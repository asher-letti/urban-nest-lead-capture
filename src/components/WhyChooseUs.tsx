import { Shield, Users, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description: "Only quality, fully verified properties are listed on our platform",
  },
  {
    icon: Users,
    title: "Personalized Guidance",
    description: "Every inquiry is answered by a real person, not an automated system",
  },
  {
    icon: TrendingUp,
    title: "Flexible Investment Options",
    description: "Buy, rent, or invest according to your needs and budget",
  },
  {
    icon: Globe,
    title: "Trusted by Kenyans Worldwide",
    description: "Helping diaspora and local investors find their perfect property",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose UrbanNest?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your property journey smooth and successful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                style={{
                  marginTop: index % 2 === 0 ? "0" : "1rem",
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
