import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Cuánto tiempo tomará completar la construcción?",
      a: "El proceso completo dura aproximadamente un año, desde la planificación hasta la entrega, depende del tamaño del proyecto."
    },
    {
      q: "¿Qué incluye el precio por metro cuadrado?",
      a: "Incluye todos los acabados y la construcción llave en mano, pero no incluye licencias de construcción ni diseño del proyecto ejecutivo."
    },
    {
      q: "¿Puedo personalizar los acabados y el diseño?",
      a: "¡Por supuesto!, ofrecemos opciones de personalización para que tu hogar refleje tu estilo y necesidades."
    },
    {
      q: "¿Qué garantías ofrecen?",
      a: "Al ser fabricantes, te ofrecemos garantías completas sobre la calidad de los acabados y materiales utilizados."
    },
    {
      q: "¿Cómo se estructuran los pagos?",
      a: "Dividimos el presupuesto en cinco pagos basados en el avance de la obra, para darte tranquilidad en tu proyecto."
    }
  ];

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}