import React, { useState } from 'react';

export default function Calculator() {
  const [material, setMaterial] = useState('pvc');
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(140);
  const [quantity, setQuantity] = useState(1);
  const [glassType, setGlassType] = useState('double');

  const basePrices = {
    pvc: 250,
    aluminum: 320,
    woodAluminum: 400
  };

  const calculateTotal = () => {
    const area = (width / 100) * (height / 100);
    let unitPrice = area * basePrices[material];
    
    if (glassType === 'triple') {
      unitPrice *= 1.25;
    }

    const total = unitPrice * quantity;
    return Math.round(total);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          Preventivi Istantanei
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 mt-4 mb-4">
          Calcolatore Online
        </h1>
        <p className="text-gray-600">
          Configura i tuoi infissi su misura e ottieni una stima immediata del costo direttamente online.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 border border-gray-100">
        {/* Sezione Controlli / Input */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-blue-950 mb-2">Materiale Serramento</label>
            <select 
              value={material} 
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
            >
              <option value="pvc">PVC (Ottimo rapporto qualità/prezzo)</option>
              <option value="aluminum">Alluminio (Design moderno e minimale)</option>
              <option value="woodAluminum">Legno-Alluminio (Calore e massima durata)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-blue-950 mb-2">Larghezza (cm)</label>
              <input 
                type="number" 
                value={width} 
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
                min="50"
                max="300"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-950 mb-2">Altezza (cm)</label>
              <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
                min="50"
                max="300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-blue-950 mb-2">Tipo di Vetro</label>
            <select 
              value={glassType} 
              onChange={(e) => setGlassType(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
            >
              <option value="double">Doppio Vetro Standard (Isolamento base)</option>
              <option value="triple">Triplo Vetro (Massimo isolamento termico/acustico)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-blue-950 mb-2">Quantità Infissi</label>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
              min="1"
              max="50"
            />
          </div>
        </div>

        {/* Sezione Risultato / Riepilogo */}
        <div className="bg-blue-950 text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
              Riepilogo Preventivo
            </h3>
            <ul className="space-y-4 text-sm text-gray-300 mb-8">
              <li className="flex justify-between">
                <span>Materiale:</span>
                <span className="font-bold text-white uppercase">{material}</span>
              </li>
              <li className="flex justify-between">
                <span>Dimensioni (LxH):</span>
                <span className="font-bold text-white">{width} x {height} cm</span>
              </li>
              <li className="flex justify-between">
                <span>Tipologia Vetro:</span>
                <span className="font-bold text-white">{glassType === 'triple' ? 'Triplo Vetro' : 'Doppio Vetro'}</span>
              </li>
              <li className="flex justify-between">
                <span>Quantità:</span>
                <span className="font-bold text-white">{quantity} pz</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="text-xs text-gray-300 block uppercase font-semibold tracking-wider">Stima Totale Indicativa</span>
              <span className="text-4xl font-extrabold text-emerald-400 mt-1 block">€ {calculateTotal().toLocaleString()}</span>
              <span className="text-[11px] text-gray-400 block mt-1">*IVA esclusa e montaggio da definire</span>
            </div>
            <a 
              href="/contact" 
              className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg transition"
            >
              Richiedi Preventivo Ufficiale
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}