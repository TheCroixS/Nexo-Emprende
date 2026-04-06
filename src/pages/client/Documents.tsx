import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle, Clock, Search } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const mockDocuments = [
  { id: 1, name: 'Carpeta Tributaria 2025.pdf', category: 'Tributarios', status: 'approved', uploadedAt: '2026-03-15', size: '2.4 MB' },
  { id: 2, name: 'Balance General 2025.xlsx', category: 'Financieros', status: 'observed', uploadedAt: '2026-04-01', size: '1.1 MB', comment: 'Falta incluir el detalle de cuentas por cobrar.' },
  { id: 3, name: 'Constitución de Sociedad.pdf', category: 'Legales', status: 'pending_review', uploadedAt: '2026-04-04', size: '5.8 MB' },
  { id: 4, name: 'Cédula de Identidad Representante.jpg', category: 'Identificación', status: 'approved', uploadedAt: '2026-03-10', size: '800 KB' },
];

export const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-xs font-medium rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Aprobado</span>;
      case 'observed': return <span className="px-2 py-1 bg-error-container text-on-error-container text-xs font-medium rounded flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Observado</span>;
      case 'pending_review': return <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-medium rounded flex items-center gap-1"><Clock className="w-3 h-3" /> En revisión</span>;
      default: return <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-medium rounded">{status}</span>;
    }
  };

  const filteredDocs = mockDocuments.filter(doc => doc.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-headline font-bold text-primary">Documentos</h1>
        <button className="px-4 py-2 bg-primary text-on-primary text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Upload className="w-4 h-4" /> Subir Documento
        </button>
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
            <input 
              type="text" 
              placeholder="Buscar documentos..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
          <select className="px-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest">
            <option value="all">Todas las categorías</option>
            <option value="Tributarios">Tributarios</option>
            <option value="Financieros">Financieros</option>
            <option value="Legales">Legales</option>
            <option value="Identificación">Identificación</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredDocs.map(doc => (
            <div key={doc.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low transition-colors gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-on-surface">{doc.name}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-on-surface-variant">
                    <span>{doc.category}</span>
                    <span>•</span>
                    <span>Subido el {doc.uploadedAt}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                  {doc.status === 'observed' && doc.comment && (
                    <p className="text-sm text-error mt-2 bg-error-container/30 p-2 rounded border border-error/10">
                      <strong>Observación:</strong> {doc.comment}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                {getStatusBadge(doc.status)}
                <button className="text-primary font-medium text-sm hover:underline">Ver</button>
              </div>
            </div>
          ))}
          {filteredDocs.length === 0 && (
            <div className="text-center py-8 text-on-surface-variant">
              No se encontraron documentos.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
