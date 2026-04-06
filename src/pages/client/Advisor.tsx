import React from 'react';
import { Calendar, MessageSquare, Video, Clock, FileText } from 'lucide-react';

export const Advisor = () => {
  return (
    <div>
      <h1 className="text-2xl font-headline font-bold text-primary mb-6">Tu Asesoría</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Advisor Profile */}
        <div className="lg:col-span-1 bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20 text-center">
          <div className="w-24 h-24 bg-primary-fixed rounded-full flex items-center justify-center text-on-primary-fixed font-headline font-bold text-3xl mx-auto mb-4">
            MJ
          </div>
          <h2 className="text-xl font-headline font-bold text-primary">María José Silva</h2>
          <p className="text-on-surface-variant text-sm mb-4">Especialista Financiera y Estratégica</p>
          
          <div className="flex justify-center gap-3 mb-6">
            <button className="p-2 bg-surface-container-low text-on-surface hover:bg-surface-container-high rounded-full transition-colors" title="Enviar mensaje">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="p-2 bg-surface-container-low text-on-surface hover:bg-surface-container-high rounded-full transition-colors" title="Agendar reunión">
              <Calendar className="w-5 h-5" />
            </button>
          </div>

          <div className="text-left border-t border-outline-variant/20 pt-4">
            <h4 className="text-sm font-medium text-on-surface mb-2">Sobre tu asesor</h4>
            <p className="text-sm text-on-surface-variant">
              Ingeniera Comercial con más de 10 años de experiencia ayudando a pymes a estructurar sus finanzas y prepararse para el crecimiento.
            </p>
          </div>
        </div>

        {/* Upcoming Meetings & Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
            <h2 className="text-lg font-headline font-bold text-primary mb-4">Próxima Reunión</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-primary-fixed/30 rounded-xl border border-primary/10 gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary text-on-primary rounded-lg flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-medium uppercase">Abr</span>
                  <span className="text-lg font-bold leading-none">15</span>
                </div>
                <div>
                  <h3 className="font-medium text-on-surface">Revisión de Flujo de Caja</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-on-surface-variant">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10:00 AM</span>
                    <span className="flex items-center gap-1"><Video className="w-4 h-4" /> Videollamada</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-on-primary text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shrink-0">
                Unirse a la reunión
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/20">
            <h2 className="text-lg font-headline font-bold text-primary mb-4">Historial de Interacciones</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/30 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-lowest bg-secondary-container text-on-secondary-container shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-on-surface text-sm">Plan de acción actualizado</h4>
                    <span className="text-xs text-on-surface-variant">Hace 2 días</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">María José ha agregado 2 nuevas tareas a tu plan de acción en el área de Finanzas.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-lowest bg-primary-fixed text-on-primary-fixed shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <Video className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-on-surface text-sm">Reunión inicial completada</h4>
                    <span className="text-xs text-on-surface-variant">01 Abr 2026</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">Revisión del diagnóstico inicial y establecimiento de objetivos principales.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
