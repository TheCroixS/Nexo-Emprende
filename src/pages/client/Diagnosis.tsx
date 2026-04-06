import React from 'react';
import { PieChart, BarChart3, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export const Diagnosis = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-headline font-bold text-primary">Resultados de tu Diagnóstico</h1>
        <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-sm font-medium rounded-full">
          Actualizado: Hoy
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Overall Score */}
        <div className="lg:col-span-1 bg-primary text-on-primary p-8 rounded-2xl shadow-editorial relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-primary/10 rounded-full blur-2xl" />
          <h2 className="text-lg font-headline font-bold mb-2 relative z-10">Puntaje Empresarial</h2>
          <p className="text-on-primary/80 text-sm mb-6 relative z-10">Nivel de madurez: Crecimiento</p>
          
          <div className="flex items-end gap-2 mb-4 relative z-10">
            <span className="text-6xl font-headline font-extrabold">75</span>
            <span className="text-xl text-on-primary/80 mb-2">/ 100</span>
          </div>
          
          <div className="w-full bg-on-primary/20 h-2 rounded-full overflow-hidden relative z-10">
            <div className="bg-secondary h-full rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-on-primary/80 mt-4 relative z-10">
            Tu negocio tiene bases sólidas, pero hay áreas clave que requieren atención para escalar de forma segura.
          </p>
        </div>

        {/* Areas Breakdown */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-editorial border border-outline-variant/20">
          <h2 className="text-lg font-headline font-bold text-primary mb-6">Desempeño por Área</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-on-surface">Ventas y Marketing</span>
                <span className="text-primary">85/100</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-on-surface">Operaciones</span>
                <span className="text-primary">70/100</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-primary-fixed-dim h-full rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-on-surface">Finanzas</span>
                <span className="text-error">45/100</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-error h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Gaps */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
          <h2 className="text-lg font-headline font-bold text-primary mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-error" /> Brechas Detectadas
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 p-4 bg-error-container/30 rounded-xl border border-error/10">
              <div className="w-2 h-2 rounded-full bg-error mt-2 shrink-0" />
              <div>
                <h4 className="font-medium text-on-surface text-sm">Falta de control de flujo de caja</h4>
                <p className="text-xs text-on-surface-variant mt-1">No hay un registro claro de ingresos y egresos mensuales, lo que pone en riesgo la liquidez.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <h4 className="font-medium text-on-surface text-sm">Procesos no documentados</h4>
                <p className="text-xs text-on-surface-variant mt-1">La operación depende demasiado del dueño. Es necesario estandarizar procesos clave.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
          <h2 className="text-lg font-headline font-bold text-primary mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-secondary" /> Próximos Pasos Sugeridos
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
              <div>
                <h4 className="font-medium text-on-surface text-sm">Implementar registro financiero</h4>
                <p className="text-xs text-on-surface-variant mt-1">Prioridad Alta • Finanzas</p>
              </div>
              <button className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </li>
            <li className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
              <div>
                <h4 className="font-medium text-on-surface text-sm">Agendar reunión con asesor</h4>
                <p className="text-xs text-on-surface-variant mt-1">Prioridad Media • Acompañamiento</p>
              </div>
              <button className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
