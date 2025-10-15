import { Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-montserrat">UrbanNest</h3>
            <p className="text-background/80 leading-relaxed">
              Connecting you with verified properties and investment opportunities 
              across Kenya.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@urbannest.co.ke" className="hover:text-accent transition-colors">
                  info@urbannest.co.ke
                </a>
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+254700000000" className="hover:text-accent transition-colors">
                  +254 700 000 000
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70">
            © {new Date().getFullYear()} UrbanNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
