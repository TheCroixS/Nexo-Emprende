import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { LayoutDashboard, Users, UserCheck, BarChart2, Settings } from 'lucide-react';
import { UsersList } from './Users';

const navItems = [
  { label: 'Inicio', path: '/admin', icon: LayoutDashboard },
  { label: 'Usuarios', path: '/admin/users', icon: Users },
  { label: 'Asignaciones', path: '/admin/assignments', icon: UserCheck },
  { label: 'Reportes', path: '/admin/reports', icon: BarChart2 },
  { label: 'Configuración', path: '/admin/settings', icon: Settings },
];

const AdminHome = () => (
  <div>
    <h1 className="text-2xl font-headline font-bold text-primary mb-6">Panel de Administración</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Total Clientes</h3>
        <span className="text-4xl font-headline font-bold text-primary">156</span>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Total Asesores</h3>
        <span className="text-4xl font-headline font-bold text-primary">12</span>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Casos Críticos</h3>
        <span className="text-4xl font-headline font-bold text-error">18</span>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Sin Asignar</h3>
        <span className="text-4xl font-headline font-bold text-primary">5</span>
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

export const AdminDashboard = () => {
  return (
    <DashboardLayout navItems={navItems}>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/assignments" element={<Placeholder title="Asignaciones" />} />
        <Route path="/reports" element={<Placeholder title="Reportes" />} />
        <Route path="/settings" element={<Placeholder title="Configuración" />} />
      </Routes>
    </DashboardLayout>
  );
};
