import GalleryPiece from "@/components/GalleryPiece";
import { pieces, siteConfig } from "@/data/pieces";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-16 px-8 text-center border-b border-border">
        <h1 className="font-serif text-6xl md:text-8xl font-light tracking-widest mb-4 animate-fade-in">
          Metalværk
        </h1>
        <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground animate-fade-in">
          {siteConfig.tagline}
        </p>
      </header>

      {/* Gallery Grid */}
      <section className="container mx-auto px-8 py-20">
        {pieces.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No pieces to display yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {pieces.map((piece) => (
              <GalleryPiece 
                key={piece.id}
                image={piece.imageUrl}
                title={piece.title}
                description={piece.description}
                additionalImages={piece.additionalImages}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 text-center border-t border-border">
        <p className="font-sans text-xs tracking-widest text-muted-foreground mb-2">
          metalvaerk@pm.me
        </p>
        <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
          © 2025 Metalværk. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
