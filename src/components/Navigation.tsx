
import { useState } from "react";
import { Menu, X, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "HOME",
      items: [],
      link: "/"
    },
    {
      title: "À PROPOS",
      items: [],
      link: "/about"
    },
    {
      title: "SERVICES",
      items: [],
      link: "/services"
    },
    {
      title: "ÉQUIPE",
      items: [],
      link: "/team"
    },
    {
      title: "ARTISTS",
      items: [],
      link: "/artists"
    },
    {
      title: "ÉVÉNEMENTS",
      items: [],
      link: "/events"
    },
    {
      title: "NOS RÉALISATIONS",
      items: [],
      link: "/realisations"
    },
    {
      title: "CONTACT",
      items: [],
      link: "/contact"
    },
    {
      title: "PODCAST",
      items: ["Interactive mp3 podcast", "Podcast archive", "Podcast shortcodes"]
    },
    {
      title: "BLOG",
      items: ["Sidebar", "Cards", "Masonry"]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/logowhite.png" 
              alt="UBUNTU EDUTAINMENT" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.items.length > 0 ? (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-xs font-medium tracking-wide hover:text-primary">
                      {item.title}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-dark-surface border-border backdrop-blur-xl">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem} className="text-foreground hover:text-primary hover:bg-muted">
                        {subItem}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  key={item.title} 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs font-medium tracking-wide hover:text-primary"
                  onClick={() => {
                    if (item.link) {
                      window.location.href = item.link;
                    }
                  }}
                >
                  {item.title}
                </Button>
              )
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center text-[8px] font-bold">f</div>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                <button className="text-left w-full text-sm font-medium tracking-wide text-foreground hover:text-primary">
                  {item.title}
                </button>
                {item.items.length > 0 && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.items.map((subItem) => (
                      <button key={subItem} className="block text-xs text-muted-foreground hover:text-primary">
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
