
import { useState } from "react";
import { Menu, X, ChevronDown, Play, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from "lucide-react";
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
    { title: "HOME", items: [], link: "/" },
    { title: "À PROPOS", items: [], link: "/about" },
    { title: "SERVICES", items: [], link: "/services" },
    { title: "ÉQUIPE", items: [], link: "/team" },
    { title: "ARTISTS", items: [], link: "/artists" },
    { title: "ÉVÉNEMENTS", items: [], link: "/events" },
    { title: "CONTACT", items: [], link: "/contact" },
    {
      title: "NOS RÉALISATIONS",
      items: ["Archive covers", "Archive cards", "Featured 3D Album", "Featured Album", "Cover Carousel", "Cards carousel", "Glass cards", "More shortcodes"]
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
    <>
      {/* Elegant Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/1954d7c7-aa99-48fd-8ee8-74c199c9498e.png" 
                alt="UBN T EDUTAINMENT" 
                className="h-8 w-auto filter drop-shadow-sm"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                item.items.length > 0 ? (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-xs font-medium tracking-wide hover:text-primary hover:bg-muted">
                        {item.title}
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card border-border backdrop-blur-xl glow-subtle">
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
                    className="text-xs font-medium tracking-wide hover:text-primary hover:bg-muted"
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

            {/* Refined Social Icons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0 hover:bg-muted hover:text-primary">
                <Play className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0 hover:bg-muted">
                <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center text-[8px] font-bold text-primary-foreground">f</div>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0 hover:bg-muted hover:text-primary">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border animate-slide-in bg-card/50 backdrop-blur-sm">
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

      {/* Elegant Audio Player */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-xl border-t border-border glow-subtle">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Play Controls */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-primary hover:bg-muted">
                <Play className="h-6 w-6 fill-current" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted hover:text-primary">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted hover:text-primary">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            {/* Current Track Info */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-4">
              <div className="w-12 h-12 elegant-border rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-foreground">ILLENIUM [ALL YOU NEED]</p>
                <p className="text-xs text-muted-foreground truncate">GROVER CRIME, J PIERCER</p>
              </div>
            </div>

            {/* Additional Controls */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-muted hover:text-primary">
                <Volume2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted hover:text-primary">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted hover:text-primary">
                <Repeat className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted hover:text-primary">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
