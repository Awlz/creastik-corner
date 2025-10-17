export const metadata = {
  title: "Portfolio | Creastik.corner",
  description: "Selected logo designs and sticker print samples.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1602407294553-6ac9170b3ed5?q=80&w=1200&auto=format&fit=crop",
    alt: "Minimal geometric logo on white card",
  },
  {
    src: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1200&auto=format&fit=crop",
    alt: "Colorful sticker sheet on desk",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    alt: "Branding presentation in PowerPoint",
  },
  {
    src: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop",
    alt: "Round glossy stickers arranged on table",
  },
  {
    src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern monogram logo on textured paper",
  },
  {
    src: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa7?q=80&w=1200&auto=format&fit=crop",
    alt: "Die-cut logo stickers stacked",
  },
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="mt-3 text-black">
          A peek at recent creative work — logos, branding slides, and sticker print runs.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <figure key={img.src} className="overflow-hidden rounded-lg border bg-card">
            <img src={img.src} alt={img.alt} className="h-60 w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">{img.alt}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}