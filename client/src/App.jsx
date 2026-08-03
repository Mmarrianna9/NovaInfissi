import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importazione Componenti
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProtectedRoute from './components/ProtectedRoute';

// Importazione Pagine
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
        {/* Navbar fissa in alto */}
        <Navbar />

        {/* Gestione delle Pagine (Rotta attiva) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        {/* Pulsante fluttuante WhatsApp */}
        <WhatsAppButton />

        {/* Footer fisso in basso */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;