import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogYouthMusic from "@/assets/blog-youth-music.jpg";
import blogWomenMusic from "@/assets/blog-women-music.jpg";
import blogUbuntuAnniversary from "@/assets/blog-ubuntu-anniversary.jpg";
import blogEventOrganization from "@/assets/blog-event-organization.jpg";
import blogUbuntuCoumba from "@/assets/blog-ubuntu-coumba.jpg";

const blogPosts = [
  {
    id: 1,
    title: "L'impact de la musique engagée sur la jeunesse africaine",
    excerpt: "Comment les artistes utilisent leur art pour sensibiliser les jeunes aux enjeux sociaux et politiques du continent.",
    author: "Marie Hélène Ndiaye",
    date: "2024-01-15",
    image: blogYouthMusic,
    category: "Culture"
  },
  {
    id: 2,
    title: "Les femmes dans l'industrie musicale sénégalaise",
    excerpt: "Un regard sur les défis et les succès des femmes artistes dans un milieu encore dominé par les hommes.",
    author: "Ubuntu Team",
    date: "2024-01-10",
    image: blogWomenMusic,
    category: "Artistes"
  },
  {
    id: 3,
    title: "Les Géantes Invisibles : Une initiative de Coumba Touré",
    excerpt: "Que l’attention soit enfin prêtée à ces Humaines qui savent presque tout dompter.\nQue lumière soit faite sur ces Géantes d’un genre à part, restées trop longtemps invisibles à nos yeux. À ces femmes. Simplement.",
    author: "Kuumbati",
    date: "2025-01-05",
    image: blogUbuntuCoumba,
    category: "Actualités"
  },
  {
    id: 4,
    title: "Comment organiser un événement culturel réussi",
    excerpt: "Les étapes clés pour créer un événement qui marque les esprits et rassemble les communautés.",
    author: "Ubuntu Team",
    date: "2023-12-28",
    image: blogEventOrganization,
    category: "Conseils"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos articles sur la musique, la culture et l'engagement artistique en Afrique.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group/btn">
                    Lire l'article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
