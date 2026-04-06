import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { PublicLayout } from '../components/layouts/PublicLayout';
import { BarChart3, Share2, TrendingUp, FileText, CheckCircle2, Map, Building2 } from 'lucide-react';

export const Landing: React.FC = () => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-surface"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;

  if (user && profile) {
    if (profile.role === 'admin') return <Navigate to="/admin" />;
    if (profile.role === 'advisor') return <Navigate to="/advisor" />;
    return <Navigate to="/client" />;
  }

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-surface to-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-8">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Estándar Institucional Chileno
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
                Impulsando la <br/>
                <span className="text-secondary">Evolución</span> del <br/>
                Ecosistema.
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                Nexo Emprende es la plataforma de inteligencia territorial que conecta emprendedores con las oportunidades del Estado y la empresa privada en Chile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="px-8 py-4 bg-primary text-on-primary text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors text-center shadow-lg shadow-primary/20">
                  Comenzar Diagnóstico
                </Link>
                <button className="px-8 py-4 bg-transparent border-2 border-outline-variant text-primary text-sm font-bold rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center">
                  Solicitar Demo
                </button>
              </div>
            </div>
            
            <div className="relative lg:ml-auto w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/5 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl overflow-hidden border border-white/10 relative">
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-error"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-success"></div>
                  </div>
                  <div className="text-xs text-white/50 font-mono">dashboard.nexo.cl</div>
                </div>
                <div className="p-6">
                  <div className="h-64 w-full bg-gradient-to-t from-secondary/20 to-transparent rounded-lg border border-secondary/20 relative flex items-end p-4">
                    {/* Fake chart bars */}
                    <div className="w-full flex items-end justify-between gap-1 h-full opacity-60">
                      {[...Array(40)].map((_, i) => (
                        <div key={i} className="w-full bg-secondary/80 rounded-t-sm" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-6 rounded-xl shadow-xl max-w-[200px]">
                <div className="text-4xl font-headline font-extrabold mb-1">85%</div>
                <div className="text-xs font-bold uppercase tracking-wider leading-tight">Mejora en la eficiencia de derivación técnica</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="como-funciona" className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-12">Nuestra Propuesta de Valor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Evaluación Precisa</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Algoritmos validados por instituciones chilenas para determinar el nivel de madurez real de cada proyecto.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Share2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Activación y Derivación</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Conexión directa con Sercotec, Corfo y banca privada según el perfil de riesgo y potencial de escalabilidad.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Tracking Continuo</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Seguimiento en tiempo real del progreso del emprendedor post-derivación para asegurar el éxito del impacto.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Reporting Estratégico</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Generación de data agregada para la toma de decisiones institucionales a nivel comunal y regional.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Métricas del Ecosistema</h4>
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-headline font-extrabold text-primary mb-1">12k+</div>
                    <div className="text-sm text-on-surface-variant">Emprendedores Evaluados</div>
                  </div>
                  <div className="w-full h-px bg-outline-variant/30"></div>
                  <div>
                    <div className="text-3xl font-headline font-extrabold text-primary mb-1">Chile</div>
                    <div className="text-sm text-on-surface-variant">Cobertura Nacional</div>
                  </div>
                  <div className="w-full h-px bg-outline-variant/30"></div>
                  <div>
                    <div className="text-4xl font-headline font-extrabold text-primary mb-1">94%</div>
                    <div className="text-sm text-on-surface-variant">Match de Soluciones</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary text-on-primary p-8 rounded-2xl shadow-xl mt-8">
                <div className="text-xs font-bold text-on-primary/60 uppercase tracking-widest mb-4">Nota Editorial</div>
                <p className="text-lg font-headline font-bold leading-snug">
                  "La integración de datos institucionales es la base de un Chile más competitivo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Bento Grid */}
      <section id="soluciones" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">Módulos Nexo</h2>
            <p className="text-on-surface-variant">
              Nuestra arquitectura modular permite a las instituciones personalizar su intervención según sus objetivos estratégicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NEXO EVAL */}
            <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 overflow-hidden relative group">
              <div className="relative z-10 md:w-1/2 flex flex-col justify-center">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Inteligencia de Diagnóstico</div>
                <h3 className="text-3xl font-headline font-extrabold text-primary mb-4">NEXO EVAL</h3>
                <p className="text-on-surface-variant mb-8">
                  Sistema avanzado de perfilamiento psicométrico y financiero. Identifica el ADN emprendedor y su viabilidad técnica en minutos.
                </p>
                <button className="px-6 py-3 bg-primary text-on-primary text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors w-fit">
                  Explorar Módulo
                </button>
              </div>
              <div className="md:w-1/2 relative min-h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent z-10"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-secondary/10 rounded-full blur-3xl"></div>
                {/* Abstract visual representation */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-48 flex items-end gap-1 opacity-40">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-full bg-secondary rounded-t-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* NEXO FIN */}
            <div className="bg-secondary text-on-secondary rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Building2 className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-bold text-on-secondary/80 uppercase tracking-widest mb-4">Finanzas & Riesgo</div>
                <h3 className="text-3xl font-headline font-extrabold mb-4">NEXO FIN</h3>
                <p className="text-on-secondary/90 text-sm leading-relaxed">
                  Módulo de pre-evaluación bancaria y conexión directa con líneas de crédito preferenciales para PYMES en etapa de crecimiento.
                </p>
              </div>
            </div>

            {/* NEXO MAP */}
            <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden">
              <div className="absolute bottom-8 right-8 opacity-20">
                <Map className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-bold text-on-primary/60 uppercase tracking-widest mb-4">Ecosistema Territorial</div>
                <h3 className="text-3xl font-headline font-extrabold mb-4">NEXO MAP</h3>
                <p className="text-on-primary/80 text-sm leading-relaxed">
                  Georreferenciación de recursos, centros de negocios y oportunidades regionales para una gestión territorial eficiente.
                </p>
              </div>
            </div>

            {/* NEXO REPORT */}
            <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Reporting Corporativo</div>
                <h3 className="text-3xl font-headline font-extrabold text-primary mb-4">NEXO REPORT</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Dashboards de impacto social y económico para Gobiernos Regionales y fundaciones. Transformamos datos en política pública.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="bg-[#0a0a0a] rounded-xl p-4 shadow-2xl border border-outline-variant/10">
                  <div className="h-32 w-full bg-gradient-to-t from-secondary/20 to-transparent rounded border border-secondary/20 relative flex items-end p-2">
                    <div className="w-full flex items-end justify-between gap-1 h-full opacity-60">
                      {[...Array(15)].map((_, i) => (
                        <div key={i} className="w-full bg-secondary/80 rounded-t-sm" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section id="instituciones" className="py-24 bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-center text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-12">Instituciones Integradas</h4>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-center">
              <div className="text-xl font-headline font-extrabold text-primary tracking-tight">SERCOTEC</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Gobierno de Chile</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-headline font-extrabold text-primary tracking-tight">SII</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Servicio de Impuestos Internos</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-headline font-extrabold text-primary tracking-tight">BANCOESTADO</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Banca Pública</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-headline font-extrabold text-primary tracking-tight">CORFO</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Emprendimiento Chile</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#001a3d] z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-primary mb-10 leading-tight max-w-3xl mx-auto">
                ¿Listo para profesionalizar su ecosistema emprendedor?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link to="/login" className="px-8 py-4 bg-secondary text-on-secondary text-sm font-bold rounded-lg hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20">
                  Comenzar Diagnóstico
                </Link>
                <button className="px-8 py-4 bg-white/5 border border-white/20 text-on-primary text-sm font-bold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Solicitar Demo Institucional
                </button>
              </div>
              <p className="text-xs font-bold text-on-primary/60 uppercase tracking-widest">
                Disponible para Gobiernos, OTEC, Municipalidades y Banca.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

