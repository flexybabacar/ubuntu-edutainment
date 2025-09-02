
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navigationLinks = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Artistes", path: "/artists" },
    { name: "Équipe", path: "/team" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-dark-surface border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/logowhite.png" 
                alt="Ubuntu Edutainment" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Label de production musicale et audiovisuelle dédié à l'art engagé. 
                Nous plaçons la culture au cœur du changement social et du développement durable.
              </p>
            </div>
            
            {/* Ubuntu Philosophy */}
            <div className="p-4 bg-gradient-card rounded-lg border border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-lg" />
              <div className="relative flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">"Je suis parce que vous êtes"</p>
                  <p className="text-xs text-muted-foreground">Philosophie Ubuntu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">contact@ubuntu-edutainment.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+221 77 151 81 48</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">Dakar, Sénégal</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Suivez-nous</h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 rounded-full hover:bg-primary/20 hover:text-primary"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Ubuntu Edutainment. Tous droits réservés. Fondé par Marie Hélène Ndiaye.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Fait avec</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>pour l'art engagé</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
