import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [newPrice, setNewPrice] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  // Stati per il modulo di aggiunta nuovo prodotto
  const [newName, setNewName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newCategory, setNewCategory] = useState('PVC');

  // Carichiamo i prodotti dal server Node all'avvio
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Errore nel caricamento prodotti:", err));
  }, []);

  // Aggiorniamo il prezzo
  const handleUpdatePrice = async (id) => {
    if (!newPrice) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: Number(newPrice) }),
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(products.map(p => p.id === id ? { ...p, price: data.product.price } : p));
        setNewPrice('');
        setSelectedId(null);
      } else {
        alert("Errore durante l'aggiornamento del prezzo");
      }
    } catch (err) {
      console.error("Errore di connessione al server:", err);
    }
  };

  // Funzione per aggiungere un nuovo prodotto
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newName || !newProductPrice || !newCategory) return;

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName,
          price: Number(newProductPrice),
          category: newCategory
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setProducts([...products, data.product]);
        // Puliamo i campi del form
        setNewName('');
        setNewProductPrice('');
        setNewCategory('PVC');
      } else {
        alert("Errore durante l'aggiunta del prodotto");
      }
    } catch (err) {
      console.error("Errore di connessione al server:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    window.location.href = '/';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 border-b border-gray-200 pb-6">
        <div>
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Control Panel (Node.js)
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3">Area Riservata Admin</h1>
          <p className="text-gray-600 text-sm mt-1">Gestisci i prezzi e inserisci nuovi prodotti nel catalogo</p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow transition"
        >
          Esci / Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sezione Tabella Prodotti Esistenti */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-6 md:p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-950 mb-6">Listino Prezzi Attuale</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                  <th className="p-4 rounded-l-xl">Prodotto</th>
                  <th className="p-4">Categoria</th>
                  <th className="p-4">Prezzo (€ / mq)</th>
                  <th className="p-4 text-right rounded-r-xl">Azioni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition">
                    <td className="p-4 font-bold text-blue-950">{product.name}</td>
                    <td className="p-4">
                      <span className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold border border-emerald-100">
                        {product.category}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-gray-700">€ {product.price} / mq</td>
                    <td className="p-4 text-right">
                      {selectedId === product.id ? (
                        <div className="flex items-center justify-end gap-2">
                          <input 
                            type="number" 
                            placeholder="Nuovo prezzo" 
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-24 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 bg-gray-50"
                          />
                          <button 
                            onClick={() => handleUpdatePrice(product.id)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition shadow"
                          >
                            Salva
                          </button>
                          <button 
                            onClick={() => setSelectedId(null)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-lg text-xs font-bold transition"
                          >
                            Annulla
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => { setSelectedId(product.id); setNewPrice(product.price); }}
                          className="bg-blue-950 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow"
                        >
                          Modifica
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sezione Modulo Aggiungi Nuovo Prodotto */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-6 md:p-8 border border-gray-100 h-fit">
          <h3 className="text-xl font-bold text-blue-950 mb-6">Aggiungi Prodotto</h3>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-blue-950 mb-1.5">Nome Prodotto</label>
              <input 
                type="text" 
                required
                placeholder="Es. Finestra Scorrevole" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-950 mb-1.5">Categoria</label>
              <select 
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
              >
                <option value="PVC">PVC</option>
                <option value="Alluminio">Alluminio</option>
                <option value="Sicurezza">Sicurezza</option>
                <option value="Accessori">Accessori</option>
                <option value="Interni">Interni</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-950 mb-1.5">Prezzo Base (€ / mq)</label>
              <input 
                type="number" 
                required
                placeholder="Es. 350" 
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold shadow-lg transition text-sm mt-2"
            >
              Aggiungi al Listino
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}