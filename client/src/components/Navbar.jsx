import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-900">
            Nova<span className="text-emerald-600">Infissi</span>
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="text-blue-900 hover:text-emerald-600 transition">Home</a>
          <a href="/catalog" className="text-gray-600 hover:text-emerald-600 transition">Catalogo</a>
          <a href="/calculator" className="text-gray-600 hover:text-emerald-600 transition">Calcolatore Preventivi</a>
          <a href="/contact" className="text-gray-600 hover:text-emerald-600 transition">Contatti</a>
        </nav>
        <div>
          <a 
            href="/calculator" 
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-emerald-700 transition"
          >
            Preventivo Rapido
          </a>
        </div>
      </div>
    </header>
  );
}