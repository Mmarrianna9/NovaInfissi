import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-bold text-white">
            Nova<span className="text-emerald-400">Infissi</span>
          </span>
          <p className="mt-2 text-gray-300 text-sm">
            Soluzioni professionali in PVC e Alluminio per il comfort e la sicurezza della tua casa.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-blue-800 pb-1">Link Rapidi</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-emerald-400 transition">Home</a></li>
            <li><a href="/catalog" className="hover:text-emerald-400 transition">Catalogo</a></li>
            <li><a href="/calculator" className="hover:text-emerald-400 transition">Calcolatore Preventivi</a></li>
            <li><a href="/contact" className="hover:text-emerald-400 transition">Contatti</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-blue-800 pb-1">Contatti</h3>
          <p className="text-sm text-gray-300">Email: info@novainfissi.it</p>
          <p className="text-sm text-gray-300 mt-1">Telefono: +39 02 1234567</p>
          <p className="text-sm text-gray-300 mt-1">Orari: Lun-Ven 08:30 - 18:30</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-blue-800 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} NovaInfissi. Tutti i diritti riservati.
      </div>
    </footer>
  );
}