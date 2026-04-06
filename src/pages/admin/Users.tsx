import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Shield, User, Building } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const mockUsers = [
  { id: 1, name: 'Carlos Mendoza', email: 'carlos@panaderia.cl', role: 'client', status: 'active', registeredAt: '2026-03-10' },
  { id: 2, name: 'María José Silva', email: 'mjose@nexo.cl', role: 'advisor', status: 'active', registeredAt: '2025-11-05' },
  { id: 3, name: 'Admin Principal', email: 'admin@nexo.cl', role: 'admin', status: 'active', registeredAt: '2025-10-01' },
  { id: 4, name: 'Pedro Soto', email: 'pedro@taller.cl', role: 'client', status: 'inactive', registeredAt: '2026-04-01' },
];

export const UsersList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin': return <span className="px-2 py-1 bg-error-container text-on-error-container rounded text-xs font-medium flex items-center gap-1 w-fit"><Shield className="w-3 h-3" /> Admin</span>;
      case 'advisor': return <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed rounded text-xs font-medium flex items-center gap-1 w-fit"><User className="w-3 h-3" /> Asesor</span>;
      case 'client': return <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded text-xs font-medium flex items-center gap-1 w-fit"><Building className="w-3 h-3" /> Cliente</span>;
      default: return null;
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-headline font-bold text-primary">Gestión de Usuarios</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-primary text-on-primary text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Invitar Usuario
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
            <input 
              type="text" 
              placeholder="Buscar por nombre o correo..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
          <select className="px-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest">
            <option value="all">Todos los roles</option>
            <option value="client">Clientes</option>
            <option value="advisor">Asesores</option>
            <option value="admin">Administradores</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-on-surface-variant uppercase bg-surface-container-low">
              <tr>
                <th className="px-4 py-3 rounded-l-lg">Nombre</th>
                <th className="px-4 py-3">Correo</th>
                <th className="px-4 py-3">Rol</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Registro</th>
                <th className="px-4 py-3 text-right rounded-r-lg">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
                <tr key={user.id} className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-4 py-4 font-medium text-on-surface">{user.name}</td>
                  <td className="px-4 py-4 text-on-surface-variant">{user.email}</td>
                  <td className="px-4 py-4">{getRoleBadge(user.role)}</td>
                  <td className="px-4 py-4">
                    <span className={cn("px-2 py-1 rounded text-xs font-medium", user.status === 'active' ? "bg-secondary/10 text-secondary" : "bg-surface-container-high text-on-surface-variant")}>
                      {user.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-on-surface-variant text-xs">{user.registeredAt}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
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
