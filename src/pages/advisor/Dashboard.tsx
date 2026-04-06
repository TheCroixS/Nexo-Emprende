import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { LayoutDashboard, Users, FolderOpen, Calendar } from 'lucide-react';
import { Clients } from './Clients';

const navItems = [
  { label: 'Inicio', path: '/advisor', icon: LayoutDashboard },
  { label: 'Cartera de Clientes', path: '/advisor/clients', icon: Users },
  { label: 'Documentos', path: '/advisor/documents', icon: FolderOpen },
  { label: 'Agenda', path: '/advisor/agenda', icon: Calendar },
];

const AdvisorHome = () => (
  <div>
    <h1 className="text-2xl font-headline font-bold text-primary mb-6">Panel de Asesor</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Clientes Activos</h3>
        <span className="text-4xl font-headline font-bold text-primary">12</span>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Casos Críticos</h3>
        <span className="text-4xl font-headline font-bold text-error">2</span>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Docs Pendientes</h3>
        <span className="text-4xl font-headline font-bold text-primary">8</span>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Reuniones Hoy</h3>
        <span className="text-4xl font-headline font-bold text-primary">3</span>
      </div>
    </div>
    
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
      <h2 className="text-lg font-headline font-bold text-primary mb-4">Clientes Recientes</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-on-surface-variant uppercase bg-surface-container-low">
            <tr>
              <th className="px-4 py-3 rounded-l-lg">Empresa</th>
              <th className="px-4 py-3">Etapa</th>
              <th className="px-4 py-3">Puntaje</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3 rounded-r-lg">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-outline-variant/20 last:border-0">
              <td className="px-4 py-4 font-medium text-on-surface">Panadería San Juan</td>
              <td className="px-4 py-4">Crecimiento</td>
              <td className="px-4 py-4"><span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded font-medium">68/100</span></td>
              <td className="px-4 py-4"><span className="px-2 py-1 bg-surface-container-high text-on-surface rounded font-medium">Estable</span></td>
              <td className="px-4 py-4"><button className="text-primary font-medium hover:underline">Ver ficha</button></td>
            </tr>
            <tr className="border-b border-outline-variant/20 last:border-0">
              <td className="px-4 py-4 font-medium text-on-surface">Tech Solutions SPA</td>
              <td className="px-4 py-4">Consolidación</td>
              <td className="px-4 py-4"><span className="px-2 py-1 bg-error-container text-on-error-container rounded font-medium">45/100</span></td>
              <td className="px-4 py-4"><span className="px-2 py-1 bg-error/10 text-error rounded font-medium">Crítico</span></td>
              <td className="px-4 py-4"><button className="text-primary font-medium hover:underline">Ver ficha</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Placeholder = ({ title }: { title: string }) => (
  <div>
    <h1 className="text-2xl font-headline font-bold text-primary mb-6">{title}</h1>
    <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-editorial border border-outline-variant/20 text-center text-on-surface-variant">
      Módulo en construcción
    </div>
  </div>
);

export const AdvisorDashboard = () => {
  return (
    <DashboardLayout navItems={navItems}>
      <Routes>
        <Route path="/" element={<AdvisorHome />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/documents" element={<Placeholder title="Documentos" />} />
        <Route path="/agenda" element={<Placeholder title="Agenda" />} />
      </Routes>
    </DashboardLayout>
  );
};
