import React from 'react';

export default function Home() {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section con gradiente e impatto visivo */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <span className="inline-block bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
            Eccellenza nei Serramenti su Misura
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Design, Sicurezza e <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Comfort</span> per la tua Casa
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Riduci i consumi e rinnova gli ambienti con infissi in PVC e Alluminio di ultima generazione. Progettazione e installazione certificate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="/calculator" 
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition-all transform hover:-translate-y-0.5"
            >
              Calcola Preventivo Online
            </a>
            <a 
              href="/catalog" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all"
            >
              Esplora il Catalogo
            </a>
          </div>
        </div>
      </section>

      {/* Sezione Punti di Forza con Card Moderne */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-950">Perché Scegliere NovaInfissi</h2>
          <p className="text-gray-600 mt-2">Garantiamo prestazioni termiche superiori e un'estetica senza compromessi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 hover:border-emerald-500/30 transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              01
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Isolamento Termico</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Abpatimento acustico e massimo risparmio in bolletta grazie a profili multicamara ad alta efficienza.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 hover:border-emerald-500/30 transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              02
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Design Minimal</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Linee pulite, vetrate ampie e finiture di pregio studiate per integrarsi con ogni stile d'arredo moderno.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 hover:border-emerald-500/30 transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              03
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Posas Certificata</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Installazione a regola d'arte eseguita da tecnici interni specializzati, con garanzia estesa sui materiali.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Pronto a rinnovare i tuoi infissi?</h2>
            <p className="text-blue-200 text-sm max-w-xl">Usa il nostro calcolatore interattivo per stimare il prezzo in tempo reale oppure contattaci per un sopralluogo gratuito.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="/calculator" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg">
              Calcola Subito
            </a>
            <a href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition border border-white/20">
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}