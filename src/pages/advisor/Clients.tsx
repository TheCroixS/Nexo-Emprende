import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Eye, MessageSquare } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const mockClients = [
  { id: 1, name: 'Panadería San Juan', industry: 'Comercio', stage: 'Crecimiento', score: 68, status: 'stable', lastActivity: 'Hace 2 horas' },
  { id: 2, name: 'Tech Solutions SPA', industry: 'Tecnología', stage: 'Consolidación', score: 45, status: 'critical', lastActivity: 'Ayer' },
  { id: 3, name: 'Consultora López', industry: 'Servicios', stage: 'Iniciando', score: 82, status: 'active', lastActivity: 'Hace 3 días' },
  { id: 4, name: 'Taller Mecánico El Tuerca', industry: 'Servicios', stage: 'Crecimiento', score: 55, status: 'in_review', lastActivity: 'Hace 1 semana' },
];

export const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'stable': return <span className="px-2 py-1 bg-surface-container-high text-on-surface rounded text-xs font-medium">Estable</span>;
      case 'critical': return <span className="px-2 py-1 bg-error/10 text-error rounded text-xs font-medium">Crítico</span>;
      case 'active': return <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded text-xs font-medium">Activo</span>;
      case 'in_review': return <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed rounded text-xs font-medium">En revisión</span>;
      default: return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'bg-secondary-container text-on-secondary-container';
    if (score >= 50) return 'bg-surface-container-high text-on-surface';
    return 'bg-error-container text-on-error-container';
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-headline font-bold text-primary">Cartera de Clientes</h1>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
          <input 
            type="text" 
            placeholder="Buscar por nombre o industria..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-on-surface-variant uppercase bg-surface-container-low">
              <tr>
                <th className="px-4 py-3 rounded-l-lg">Empresa</th>
                <th className="px-4 py-3">Industria</th>
                <th className="px-4 py-3">Etapa</th>
                <th className="px-4 py-3">Puntaje</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Última Actividad</th>
                <th className="px-4 py-3 text-right rounded-r-lg">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockClients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((client) => (
                <tr key={client.id} className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-4 py-4 font-medium text-on-surface">{client.name}</td>
                  <td className="px-4 py-4 text-on-surface-variant">{client.industry}</td>
                  <td className="px-4 py-4 text-on-surface-variant">{client.stage}</td>
                  <td className="px-4 py-4">
                    <span className={cn("px-2 py-1 rounded font-medium text-xs", getScoreColor(client.score))}>
                      {client.score}/100
                    </span>
                  </td>
                  <td className="px-4 py-4">{getStatusBadge(client.status)}</td>
                  <td className="px-4 py-4 text-on-surface-variant text-xs">{client.lastActivity}</td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded transition-colors" title="Ver ficha">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded transition-colors" title="Mensaje">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
