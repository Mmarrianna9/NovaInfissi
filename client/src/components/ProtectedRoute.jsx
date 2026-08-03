import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Sostituisci questa logica con il controllo reale del token di autenticazione o dello stato globale
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

  if (!isAuthenticated) {
    // Se non è autenticato, lo reindirizziamo alla home (o pagina di login)
    return <Navigate to="/" replace />;
  }

  return children;
}