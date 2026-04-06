import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Globe } from 'lucide-react';

export const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-surface font-body">
      <header className="bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-headline font-extrabold text-xl text-primary tracking-tight">Nexo Emprende</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-primary border-b-2 border-primary pb-1">Inicio</a>
            <a href="#como-funciona" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Cómo Funciona</a>
            <a href="#soluciones" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Soluciones</a>
            <a href="#ecosistema" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Ecosistema Chile</a>
            <a href="#instituciones" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Instituciones</a>
          </nav>
          <div className="flex items-center">
            <Link to="/login" className="px-6 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
              Acceso Privado
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-primary text-on-primary py-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-headline font-extrabold text-lg tracking-tight block mb-1">NEXO EMPRENDE</span>
            <p className="text-on-primary/60 text-xs">
              &copy; {new Date().getFullYear()} Nexo Emprende. Gobierno de Chile. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-on-primary/80">
            <a href="#" className="hover:text-on-primary transition-colors uppercase tracking-wider">Privacy Policy</a>
            <a href="#" className="hover:text-on-primary transition-colors uppercase tracking-wider">Terms of Service</a>
            <a href="#" className="hover:text-on-primary transition-colors uppercase tracking-wider">Contact Support</a>
            <a href="#" className="hover:text-on-primary transition-colors uppercase tracking-wider">Chilean Market Stats</a>
            <div className="flex items-center gap-3 ml-4">
              <Globe className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

