import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { LayoutDashboard, FileText, CheckSquare, PieChart, Users, FolderOpen } from 'lucide-react';
import { Diagnosis } from './Diagnosis';
import { Tasks } from './Tasks';
import { Finances } from './Finances';
import { Documents } from './Documents';
import { Advisor } from './Advisor';

const navItems = [
  { label: 'Inicio', path: '/client', icon: LayoutDashboard },
  { label: 'Mi Diagnóstico', path: '/client/diagnosis', icon: PieChart },
  { label: 'Plan de Acción', path: '/client/tasks', icon: CheckSquare },
  { label: 'Finanzas', path: '/client/finances', icon: PieChart },
  { label: 'Documentos', path: '/client/documents', icon: FolderOpen },
  { label: 'Asesoría', path: '/client/advisor', icon: Users },
];

const ClientHome = () => (
  <div>
    <h1 className="text-2xl font-headline font-bold text-primary mb-6">Resumen de tu Negocio</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Puntaje Empresarial</h3>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-headline font-bold text-primary">75</span>
          <span className="text-sm text-on-surface-variant mb-1">/ 100</span>
        </div>
        <div className="w-full bg-surface-container-high h-2 rounded-full mt-4 overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Tareas Pendientes</h3>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-headline font-bold text-primary">4</span>
        </div>
        <p className="text-sm text-error mt-2 font-medium">2 de alta prioridad</p>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h3 className="text-sm font-medium text-on-surface-variant mb-2">Asesor Asignado</h3>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-on-primary-fixed font-bold">
            MJ
          </div>
          <div>
            <p className="font-medium text-on-surface">María José</p>
            <p className="text-xs text-on-surface-variant">Especialista Financiera</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h2 className="text-lg font-headline font-bold text-primary mb-4">Próximas Tareas</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors">
              <input type="checkbox" className="mt-1 rounded border-outline-variant text-primary focus:ring-primary" />
              <div>
                <p className="font-medium text-on-surface text-sm">Actualizar flujo de caja mensual</p>
                <p className="text-xs text-on-surface-variant mt-1">Vence en 2 días • Finanzas</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h2 className="text-lg font-headline font-bold text-primary mb-4">Alertas Recientes</h2>
        <div className="space-y-4">
          <div className="p-4 bg-error-container/50 rounded-xl border border-error/20">
            <h4 className="font-medium text-on-error-container text-sm">Documento rechazado</h4>
            <p className="text-xs text-on-error-container/80 mt-1">La carpeta tributaria subida no corresponde al mes actual.</p>
          </div>
          <div className="p-4 bg-secondary-container/50 rounded-xl border border-secondary/20">
            <h4 className="font-medium text-on-secondary-container text-sm">Nueva recomendación</h4>
            <p className="text-xs text-on-secondary-container/80 mt-1">Tu asesor ha dejado un comentario en tu plan de acción.</p>
          </div>
        </div>
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

export const ClientDashboard = () => {
  return (
    <DashboardLayout navItems={navItems}>
      <Routes>
        <Route path="/" element={<ClientHome />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/advisor" element={<Advisor />} />
      </Routes>
    </DashboardLayout>
  );
};
