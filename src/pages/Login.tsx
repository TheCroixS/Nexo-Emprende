import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const { signInWithGoogle, user, profile, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;

  if (user && profile) {
    if (profile.role === 'admin') return <Navigate to="/admin" />;
    if (profile.role === 'advisor') return <Navigate to="/advisor" />;
    return <Navigate to="/client" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-editorial max-w-md w-full text-center">
        <h2 className="text-2xl font-headline font-bold text-primary mb-2">Bienvenido a Nexo Emprende</h2>
        <p className="text-on-surface-variant mb-8">Ingresa para continuar con tu proceso.</p>
        
        <button 
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors font-medium text-on-surface"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Continuar con Google
        </button>
      </div>
    </div>
  );
};
