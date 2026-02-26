import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/vuvNLF6ERUh4M81DfBtae7/sandbox/Wgv7QfyUlgxwvNramnSzXB-img-1_1772110883000_na1fn_cG9ydHJhaXQtZXBpYw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    title: "Епичен портрет",
    category: "AI Портрет",
    description: "Професионален портрет в фантастична среда с гора и планини"
  },
  {
    id: 2,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/vuvNLF6ERUh4M81DfBtae7/sandbox/Wgv7QfyUlgxwvNramnSzXB-img-2_1772110886000_na1fn_cG9ydHJhaXQtc3VwZXJoZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    title: "Детска магия",
    category: "Супергерой",
    description: "Дете превърнато в супергерой - перфектен подарък"
  },
  {
    id: 3,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/vuvNLF6ERUh4M81DfBtae7/sandbox/Wgv7QfyUlgxwvNramnSzXB-img-3_1772110882000_na1fn_cG9ydHJhaXQtbHV4dXJ5.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    title: "Луксозен портрет",
    category: "AI Портрет",
    description: "Елегантен портрет в луксозна среда с haute couture"
  },
  {
    id: 4,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/vuvNLF6ERUh4M81DfBtae7/sandbox/Wgv7QfyUlgxwvNramnSzXB-img-4_1772110883000_na1fn_cmVzdG9yYXRpb24tYmVmb3JlLWFmdGVy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    title: "Реставрация на снимка",
    category: "Реставрация",
    description: "Преди и след: стара черно-бяла снимка превърната в цветна"
  },
  {
    id: 5,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/vuvNLF6ERUh4M81DfBtae7/sandbox/Wgv7QfyUlgxwvNramnSzXB-img-5_1772110877000_na1fn_cG9ydHJhaXQtYXJ0aXN0aWM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    title: "Артистичен портрет",
    category: "Маслена живопис",
    description: "Портрет в стил маслена живопис с богати цветове"
  }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedItem = selectedId 
    ? galleryItems.find(item => item.id === selectedId)
    : null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="group relative overflow-hidden rounded-lg cursor-pointer h-80"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-primary">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedId(null)}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Info */}
            <div className="mt-6 space-y-2">
              <h3 className="font-display text-3xl font-bold text-white">
                {selectedItem.title}
              </h3>
              <p className="text-primary font-medium">{selectedItem.category}</p>
              <p className="text-gray-300">{selectedItem.description}</p>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-white transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-white transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
