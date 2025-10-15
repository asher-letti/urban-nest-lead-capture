import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jane Kariuki",
    location: "London, UK",
    initials: "JK",
    quote: "UrbanNest made buying my first apartment abroad so easy. The team was patient, transparent, and incredibly helpful throughout the entire process.",
  },
  {
    name: "Michael Otieno",
    location: "Nairobi, Kenya",
    initials: "MO",
    quote: "I found my dream investment property through UrbanNest. Their personalized approach and attention to detail made all the difference.",
  },
  {
    name: "Sarah Mwangi",
    location: "Toronto, Canada",
    initials: "SM",
    quote: "As a diaspora investor, I needed someone I could trust. UrbanNest delivered beyond my expectations. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from people who found their dream homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300"
              style={{
                marginTop: index % 2 === 0 ? "0" : "1.5rem",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="h-14 w-14 mr-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
