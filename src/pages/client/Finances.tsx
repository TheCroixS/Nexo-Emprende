import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Plus, AlertTriangle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const mockTransactions = [
  { id: 1, type: 'income', amount: 1500000, category: 'Ventas', date: '2026-04-05', description: 'Ventas semana 1' },
  { id: 2, type: 'expense', amount: 350000, category: 'Insumos', date: '2026-04-03', description: 'Compra de harina y levadura' },
  { id: 3, type: 'expense', amount: 120000, category: 'Servicios', date: '2026-04-02', description: 'Pago de luz y agua' },
  { id: 4, type: 'income', amount: 800000, category: 'Ventas', date: '2026-03-28', description: 'Ventas semana 4' },
];

export const Finances = () => {
  const [showForm, setShowForm] = useState(false);

  const totalIncome = mockTransactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = mockTransactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpense;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-headline font-bold text-primary">Finanzas</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-on-primary text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Nuevo Registro
        </button>
      </div>

      {showForm && (
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20 mb-8">
          <h2 className="text-lg font-headline font-bold text-primary mb-4">Registrar Movimiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Tipo</label>
              <select className="w-full px-3 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option value="income">Ingreso</option>
                <option value="expense">Egreso</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Monto</label>
              <input type="number" className="w-full px-3 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Ej. 50000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Categoría</label>
              <select className="w-full px-3 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option value="ventas">Ventas</option>
                <option value="insumos">Insumos</option>
                <option value="servicios">Servicios</option>
                <option value="sueldos">Sueldos</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Fecha</label>
              <input type="date" className="w-full px-3 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-on-surface mb-1">Descripción</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Breve descripción del movimiento" />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 text-on-surface-variant font-medium hover:bg-surface-container-low rounded-lg transition-colors">Cancelar</button>
            <button className="px-4 py-2 bg-primary text-on-primary font-medium rounded-lg hover:bg-primary/90 transition-colors">Guardar</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-medium text-on-surface-variant">Balance Actual</h3>
          </div>
          <span className="text-3xl font-headline font-bold text-primary">{formatCurrency(balance)}</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-on-secondary-container" />
            </div>
            <h3 className="text-sm font-medium text-on-surface-variant">Ingresos (Mes)</h3>
          </div>
          <span className="text-3xl font-headline font-bold text-secondary">{formatCurrency(totalIncome)}</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-error-container/50 rounded-full flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-error" />
            </div>
            <h3 className="text-sm font-medium text-on-surface-variant">Egresos (Mes)</h3>
          </div>
          <span className="text-3xl font-headline font-bold text-error">{formatCurrency(totalExpense)}</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
        <h2 className="text-lg font-headline font-bold text-primary mb-4">Últimos Movimientos</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-on-surface-variant uppercase bg-surface-container-low">
              <tr>
                <th className="px-4 py-3 rounded-l-lg">Fecha</th>
                <th className="px-4 py-3">Descripción</th>
                <th className="px-4 py-3">Categoría</th>
                <th className="px-4 py-3 text-right rounded-r-lg">Monto</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((t) => (
                <tr key={t.id} className="border-b border-outline-variant/20 last:border-0">
                  <td className="px-4 py-4 text-on-surface-variant">{t.date}</td>
                  <td className="px-4 py-4 font-medium text-on-surface">{t.description}</td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded text-xs font-medium">
                      {t.category}
                    </span>
                  </td>
                  <td className={cn(
                    "px-4 py-4 text-right font-bold",
                    t.type === 'income' ? 'text-secondary' : 'text-error'
                  )}>
                    {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
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
