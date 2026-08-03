import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          Siamo a tua disposizione
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 mt-4 mb-4">
          Contattaci
        </h1>
        <p className="text-gray-600">
          Hai domande sui nostri serramenti o desideri fissare un appuntamento in showroom? Scrivici subito, ti risponderemo al più presto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informazioni di Contatto */}
        <div className="space-y-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">I Nostri Riferimenti</h3>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">📍</div>
                <div>
                  <strong className="block text-blue-950">Indirizzo Showroom</strong>
                  <span className="text-sm">Via Roma 123, Treviso (TV)</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">📞</div>
                <div>
                  <strong className="block text-blue-950">Telefono</strong>
                  <span className="text-sm">+39 0422 123456</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">✉️</div>
                <div>
                  <strong className="block text-blue-950">Email</strong>
                  <span className="text-sm">info@novainfissi.it</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">🕒</div>
                <div>
                  <strong className="block text-blue-950">Orari di Apertura</strong>
                  <span className="text-sm">Lun - Ven: 08:30 - 18:30<br />Sabato su appuntamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modulo di Contatto */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto font-bold">✓</div>
              <h3 className="text-2xl font-bold text-blue-950">Messaggio Inviato!</h3>
              <p className="text-gray-600 text-sm max-w-sm mx-auto">Grazie per averci contattato. Un nostro consulente ti ricontatterà al più presto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-950 mb-2">Inviaci un Messaggio</h3>
              <div>
                <label className="block text-sm font-bold text-blue-950 mb-2">Nome e Cognome</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
                  placeholder="Mario Rossi"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
                    placeholder="mario@email.it"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
                    placeholder="+39 333 1234567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-blue-950 mb-2">Messaggio</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-gray-700 font-medium focus:ring-2 focus:ring-blue-950 focus:outline-none transition"
                  placeholder="Descrivi di quali infissi hai bisogno..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-950 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg transition"
              >
                Invia Messaggio
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}