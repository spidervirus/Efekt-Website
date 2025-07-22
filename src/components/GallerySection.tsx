const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    caption: 'Office in JLT',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    caption: 'Studio in Al Barsha',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    caption: 'Villa Home Theater in Mirdif',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    caption: 'Restaurant in Downtown',
  },
  {
    src: 'https://images.unsplash.com/photo-1503389152951-9c3d8b6e9c94?auto=format&fit=crop&w=600&q=80',
    caption: 'School in Sharjah',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    caption: 'Corporate Boardroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    caption: 'Podcast Studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    caption: 'Apartment Living Room',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Gallery of Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={img.src} alt={img.caption} className="w-full h-48 object-cover" />
              <div className="py-3 px-2 text-center text-base font-medium text-muted-foreground">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 