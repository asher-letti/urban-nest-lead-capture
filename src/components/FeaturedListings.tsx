import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "2-Bedroom Apartment",
    location: "Westlands, Nairobi",
    price: "KES 12,500,000",
    badge: "Verified",
  },
  {
    id: 2,
    image: property2,
    title: "3-Bedroom House",
    location: "Karen, Nairobi",
    price: "KES 28,000,000",
    badge: "New Listing",
  },
  {
    id: 3,
    image: property3,
    title: "Luxury Penthouse",
    location: "Kilimani, Nairobi",
    price: "KES 45,000,000",
    badge: "Premium",
  },
];

const FeaturedListings = () => {
  return (
    <section id="listings" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of verified properties across Nairobi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                marginTop: index % 2 === 0 ? "0" : "1.5rem",
              }}
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {property.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {property.title}
                </h3>
                <p className="text-muted-foreground mb-4">{property.location}</p>
                <p className="text-3xl font-bold text-primary">{property.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
