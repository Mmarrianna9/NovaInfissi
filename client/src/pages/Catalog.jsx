import React from 'react';

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Infissi in PVC TermoIsolanti",
      category: "PVC",
      description: "Massimo isolamento termico e acustico con rinforzi interni in acciaio per una sicurezza superiore.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Infissi in Alluminio Minimal",
      category: "Alluminio",
      description: "Profili sottili ed eleganti, ideali per ampie vetrate panoramiche e design moderni.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Portoncini Blindati di Sicurezza",
      category: "Sicurezza",
      description: "Certificati in classe antieffrazione 3 e 4, uniscono protezione avanzata e finiture di pregio.",
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Persiane e Avvolgibili in Alluminio",
      category: "Accessori",
      description: "Resistenti agli agenti atmosferici, offrono una regolazione ottimale della luce e della privacy.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Finestre in PVC Effetto Legno",
      category: "PVC",
      description: "Il calore e la bellezza estetica del legno uniti alla praticità e zero manutenzione del PVC.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Alzanti Scorrevoli Panoramici",
      category: "Alluminio",
      description: "Soluzioni scorrevoli di grandi dimensioni per unire fluidamente gli interni con il giardino o terrazzo.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      name: "Zanzariere a Scorrimento Laterale",
      category: "Accessori",
      description: "Modelli con rete a scomparsa e guida a terra ribassata, pratiche e discrete per ogni tipo di infisso.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      name: "Porte Interne Design Filomuro",
      category: "Interni",
      description: "Linee essenziali a scomparsa totale nel muro per ambienti dal look pulito e contemporaneo.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          Collezione 2026
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 mt-4 mb-4">
          Il Nostro Catalogo
        </h1>
        <p className="text-gray-600">
          Scopri la nostra vasta selezione di infissi, serramenti e complementi progettati per durare nel tempo e valorizzare ogni ambiente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold bg-white/90 backdrop-blur-md text-blue-950 px-3 py-1.5 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <a 
                href="/calculator" 
                className="block text-center bg-blue-950 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-bold shadow transition-colors"
              >
                Calcola Preventivo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}