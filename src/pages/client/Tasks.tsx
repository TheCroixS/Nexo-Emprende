import React, { useState } from 'react';
import { CheckSquare, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const mockTasks = [
  { id: 1, title: 'Actualizar flujo de caja mensual', description: 'Ingresar los datos de ingresos y egresos del mes pasado en el módulo de Finanzas.', priority: 'high', status: 'pending', dueDate: '2026-04-10', area: 'Finanzas', responsible: 'client' },
  { id: 2, title: 'Subir carpeta tributaria', description: 'Subir los últimos 12 IVAs y balances anuales.', priority: 'high', status: 'in_progress', dueDate: '2026-04-12', area: 'Documentos', responsible: 'client' },
  { id: 3, title: 'Revisión de estrategia de marketing', description: 'El asesor revisará la estrategia actual y propondrá mejoras.', priority: 'medium', status: 'in_review', dueDate: '2026-04-15', area: 'Ventas', responsible: 'advisor' },
  { id: 4, title: 'Definir perfil de cliente ideal', description: 'Completar la plantilla de buyer persona.', priority: 'low', status: 'completed', dueDate: '2026-04-01', area: 'Ventas', responsible: 'client' },
];

export const Tasks = () => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = mockTasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-error bg-error-container/50 border-error/20';
      case 'medium': return 'text-secondary bg-secondary-container/50 border-secondary/20';
      case 'low': return 'text-primary bg-primary-fixed border-primary/20';
      default: return 'text-on-surface-variant bg-surface-container-high border-outline-variant/20';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Alta';
      case 'medium': return 'Media';
      case 'low': return 'Baja';
      default: return priority;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5 text-secondary" />;
      case 'in_review': return <AlertCircle className="w-5 h-5 text-primary" />;
      case 'in_progress': return <Clock className="w-5 h-5 text-secondary" />;
      default: return <div className="w-5 h-5 rounded border-2 border-outline-variant" />;
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-headline font-bold text-primary">Plan de Acción</h1>
        
        <div className="flex bg-surface-container-low p-1 rounded-lg border border-outline-variant/20">
          {[
            { id: 'all', label: 'Todas' },
            { id: 'pending', label: 'Pendientes' },
            { id: 'in_progress', label: 'En proceso' },
            { id: 'completed', label: 'Completadas' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-md transition-colors",
                filter === f.id ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredTasks.map(task => (
          <div key={task.id} className="bg-surface-container-lowest p-5 rounded-2xl shadow-editorial border border-outline-variant/20 flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="shrink-0 mt-1 sm:mt-0">
              {getStatusIcon(task.status)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className={cn("text-base font-headline font-bold text-primary", task.status === 'completed' && "line-through text-on-surface-variant")}>
                  {task.title}
                </h3>
                <span className={cn("px-2 py-0.5 text-xs font-medium rounded border", getPriorityColor(task.priority))}>
                  Prioridad {getPriorityLabel(task.priority)}
                </span>
                <span className="px-2 py-0.5 text-xs font-medium rounded bg-surface-container-high text-on-surface-variant border border-outline-variant/20">
                  {task.area}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant mb-2">{task.description}</p>
              <div className="flex items-center gap-4 text-xs text-on-surface-variant font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Vence: {task.dueDate}
                </span>
                <span className="flex items-center gap-1">
                  <CheckSquare className="w-3.5 h-3.5" /> Responsable: {task.responsible === 'client' ? 'Tú' : 'Asesor'}
                </span>
              </div>
            </div>
            {task.status !== 'completed' && task.responsible === 'client' && (
              <div className="shrink-0">
                <button className="px-4 py-2 bg-primary-fixed text-on-primary-fixed text-sm font-medium rounded-lg hover:bg-primary-fixed-dim transition-colors">
                  Actualizar estado
                </button>
              </div>
            )}
          </div>
        ))}
        {filteredTasks.length === 0 && (
          <div className="text-center py-12 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 border-dashed">
            <CheckSquare className="w-12 h-12 text-outline-variant mx-auto mb-3" />
            <h3 className="text-lg font-medium text-on-surface">No hay tareas</h3>
            <p className="text-on-surface-variant text-sm mt-1">No se encontraron tareas con el filtro actual.</p>
          </div>
        )}
      </div>
    </div>
  );
};
