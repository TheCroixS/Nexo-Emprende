import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const questions = [
  {
    id: 'industry',
    question: '¿En qué industria opera tu negocio?',
    options: ['Comercio', 'Servicios', 'Manufactura', 'Tecnología', 'Otro']
  },
  {
    id: 'stage',
    question: '¿En qué etapa se encuentra tu empresa?',
    options: ['Idea', 'Iniciando (0-1 año)', 'Crecimiento (1-3 años)', 'Consolidación (+3 años)']
  },
  {
    id: 'formalization',
    question: '¿Tu negocio está formalizado (tiene inicio de actividades)?',
    options: ['Sí, completamente', 'En proceso', 'No, aún no']
  },
  {
    id: 'main_challenge',
    question: '¿Cuál es tu principal desafío actual?',
    options: ['Ventas y Marketing', 'Finanzas y Flujo de Caja', 'Operaciones y Logística', 'Gestión de Equipo']
  }
];

export const Onboarding: React.FC = () => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [businessName, setBusinessName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (!user || !profile) return <Navigate to="/login" />;
  if (profile.role !== 'client') return <Navigate to="/" />;

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Create Client Profile
      const profileRef = doc(collection(db, 'clientProfiles'));
      await setDoc(profileRef, {
        userId: user.uid,
        businessName: businessName || 'Mi Negocio',
        industry: answers['industry'] || '',
        stage: answers['stage'] || '',
        formalization: answers['formalization'] || '',
        score: Math.floor(Math.random() * 40) + 40, // Mock score between 40 and 80
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Create Diagnosis
      await addDoc(collection(db, 'diagnoses'), {
        clientId: profileRef.id,
        answers,
        score: Math.floor(Math.random() * 40) + 40,
        areas: {
          ventas: Math.floor(Math.random() * 100),
          finanzas: Math.floor(Math.random() * 100),
          operaciones: Math.floor(Math.random() * 100),
        },
        status: 'completed',
        createdAt: new Date().toISOString()
      });

      navigate('/client');
    } catch (error) {
      console.error("Error saving onboarding data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="h-16 bg-surface-container-lowest border-b border-outline-variant/30 flex items-center px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Building2 className="w-5 h-5 text-on-primary" />
          </div>
          <span className="font-headline font-bold text-lg text-primary tracking-tight">Nexo Emprende</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-surface-container-lowest p-8 rounded-2xl shadow-editorial border border-outline-variant/20">
          
          {step === 0 && !answers['start'] ? (
            <div className="text-center">
              <h1 className="text-3xl font-headline font-bold text-primary mb-4">Bienvenido a tu Diagnóstico</h1>
              <p className="text-on-surface-variant mb-8">
                Para comenzar a ayudarte, necesitamos conocer un poco más sobre ti y tu negocio. Este proceso tomará menos de 2 minutos.
              </p>
              <div className="mb-8 text-left">
                <label className="block text-sm font-medium text-on-surface mb-2">Nombre de tu negocio o proyecto</label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Ej. Panadería San Juan"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <button 
                onClick={() => setAnswers({ ...answers, start: 'yes' })}
                disabled={!businessName.trim()}
                className="w-full px-6 py-3 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                Comenzar Diagnóstico
              </button>
            </div>
          ) : step < questions.length ? (
            <div>
              <div className="flex items-center gap-2 mb-8">
                {questions.map((_, i) => (
                  <div key={i} className={`h-2 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-surface-container-high'}`} />
                ))}
              </div>
              
              <h2 className="text-2xl font-headline font-bold text-primary mb-6">{questions[step].question}</h2>
              
              <div className="space-y-3">
                {questions[step].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left px-6 py-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-primary-fixed/30 transition-all font-medium text-on-surface"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-on-secondary-container" />
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">¡Diagnóstico Completado!</h2>
              <p className="text-on-surface-variant mb-8">
                Hemos analizado tus respuestas y estamos listos para generar tu plan de acción personalizado.
              </p>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-secondary text-on-secondary rounded-lg font-medium hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Generando...' : 'Ver mis resultados'} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
