import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import Faqs from '../components/faqs';

import i00 from '../../public/landing/00.jpeg';
import i01 from '../../public/landing/001.png';
import i02 from '../../public/landing/002.jpeg';
import i03 from '../../public/landing/003.jpeg';
import i04 from '../../public/landing/004.png';
import i05 from '../../public/landing/005.jpeg';
import i06 from '../../public/landing/006.jpeg';
import i07 from '../../public/landing/007.jpg';
import c01 from '../../public/landing/c01.jpeg';
import c02 from '../../public/landing/c02.jpg';
import c03 from '../../public/landing/c03.jpeg';
import t01 from '../../public/landing/t01.png';
import t02 from '../../public/landing/t02.png';
import t03 from '../../public/landing/t03.png';
import p01 from '../../public/landing/p01.png';
import p02 from '../../public/landing/p02.png';
import p03 from '../../public/landing/p03.png';
import p04 from '../../public/landing/p04.png';
import p05 from '../../public/landing/p05.png';
import p06 from '../../public/landing/p06.png';
import p07 from '../../public/landing/p07.png';
import p08 from '../../public/landing/p08.png';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => {fbq('trackCustom', `Scroll Depth: ${value}`);
        console.log('Scroll Depth', value);},
    });
  });

  const cta = {
    main: 'Agenda una llamada',
    description: 'Obtén una asesoría de construcción que garantice la venta de tu casa',
  };

  return (
    <>
      <section className="relative min-h-[80vh] w-full flex flex-col md:justify-end items-center bg-black">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[16rem] bottom-0 absolute bg-gradient-to-t from-black via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-bottom"/>
        </div>

        <div className="container w-full text-center text-white z-10 p-8">
          <h1
            className="md:w-2/3 mx-auto relative font-medium ft-9 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            {/*No somos una constructora más de GDL, hacemos que tu terreno y ladrillos valgan 20% más en un año.*/}
            ¿Una constructora más en la ZMG?<br/>
            Sí, pero con más de 350 proyectos que superaron las expectativas de nuestros clientes
          </h1>
          <div className="flex flex-col justify-start items-center mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left">{cta.description}</p>
          </div>
        </div>
      </section>

      <section className="reading-container my-16">
        <p>
          {/*Somos un equipo de obsesivos por los detalles, nos apasiona crear espacios donde la calidad y la innovación*/}
          {/*hagan que tu inversión se multiplique.<br/><br/>*/}
          Con más de 15 años en este negocio y 350 proyectos completados con éxito, tenemos la experiencia
          para encargarnos de todo:<br/><br/>
          Desde el proyecto, obviamente la obra y hasta las 3P (ya sabes: pisos, puertas y pendejadas).<br/><br/>
          Así tú puedes seguir dedicándole tiempo a lo que de verdad importa: tu
          familia, tu negocio y tus hobbies.<br/>
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="La verdad es que construir te va a generar un 20% de rentabilidad en un año"
        image={i01}
      />
      <section className="reading-container my-16">
        <p>
          La construcción puede ser un campo
          lleno de incertidumbre y dolores de
          cabeza, no sabes si te va a tocar alguna
          constructora buena o una que sea una
          estafa.<br/><br/>
          Mira, nosotros cuidamos 3 cosas:
        </p>
        <h3>Tenemos nuestras propias fábricas</h3>
        <p>Desde la carpintería, los acabados y hasta los aluminios y ventanas, nos ponemos muy fresas para asegurar
          que la mano de obra es adecuada y garanticemos una buena durabilidad y una super estética.</p>
        <h3>Nos gusta ser muy transparentes</h3>
        <p>Nuestro esquema de pagos por avance de
          obra es de lo más claro posible para que
          no nos pierdas la confianza y puedas seguir
          cada etapa del proyecto sin sorpresas.</p>
        <h3>La innovación y personalización</h3>
        <p>Desde nuestras primeras reuniones vamos
          identificando tus necesidades y gustos,
          para que, una vez que te entreguemos tu
          casa, sientas que es una obra de arte hecha
          a tu medida.</p>

        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="Qué esperar"
        title="Tu casa terminadísima con acabados de lujo en 1 año"
        image={i02}
      />
      <section className="reading-container my-16 space-y-32">
        <p>La mayoría de nuestros clientes siempre tiene la duda de cómo le hacemos y cuál es nuestro proceso.</p>
        <p>Para crear este espacio único, se requiere de 7 pasos:</p>
        <ol>
          <li className="ft-2 mb-4">Tenemos una cita para poder hacer un <b>levantamiento de requerimientos</b></li>
          <li className="ft-2 mb-4">Realizamos un <b>ante proyecto</b> para asegurarnos que estamos en la misma línea
          </li>
          <li className="ft-2 mb-4">Comenzamos con el <b>Proyecto Ejecutivo</b>, o sea, todos los planos</li>
          <li className="ft-2 mb-4">Estimamos con precisión un <b>cálculo de metros cuadrados</b> para cotizar la obra y
            no salirte con sorpresas
          </li>
          <li className="ft-2 mb-4">Comenzamos la <b>construcción</b></li>
          <li className="ft-2 mb-4"><b>Te entregamos</b> tu casa en máximo un año</li>
          <li className="ft-2 mb-4">Y si tu objetivo es venderla, <b>comenzamos con la promoción para venta</b></li>
        </ol>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('process')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Target"
        title="Con terreno o sin terreno, si quieres construir para vender o para vivir, sí hacemos match"
        image={i03}
      />
      <section className="reading-container my-16">
        <p>
          Entendemos que los inversionistas
          como tú buscan más que una simple
          construcción; buscan hacer un buen
          negocio.<br/><br/>
          También entendemos que cada proyecto
          cuenta con un presupuesto y un flujo de
          lana.<br/><br/>
          Hemos descubierto que los proyectos
          más rentables son aquellos que van <b>desde los $5mdp en construcción</b>.<br/><br/>
          Buscamos que te sientas cómodo y
          seguro al hacer tu inversión, por eso,
          hacemos un esquema de pagos basados
          en el avance de la obra, para darte
          tranquilidad en la construcción de tu
          nueva casa.
        </p>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="Testimonios"
        title="Y no solo lo digo yo, esto es lo que han dicho nuestros clientes"
        image={i04}
      />
      <section className="my-16">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="w-full relative">
            <Image src={t01} className="object-cover"/>
          </div>
          <div className="w-full relative">
            <Image src={t02} className="object-cover"/>
          </div>
          <div className="w-full relative">
            <Image src={t03} className="object-cover"/>
          </div>
        </div>

        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-1 text-center">{cta.description}</p>
          </div>
        </div>

      </section>

      <Blockbuster
        overhead="Casos"
        title="Más de 350 proyectos exitosos, pero ahí te van los últimos 3 para que nos creas"
        image={i05}
      />
      <section className="my-16">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="w-full relative border border-brand-3 shadow-md bg-black">
            <div className="flex overflow-hidden h-[32rem]">
              <Image src={c01} className="object-cover object-center"/>
            </div>
            <div className="p-8 bg-black">
              <h3 className="!mb-0">Olivos Zapopan</h3>
              <p className="overhead text-black">Los Olivos</p>
              <p className="!mt-0 text-white">
                Objetivo: Casa Habitación<br/>
                Superficie: 500m<sup>2</sup><br/>
                Presupuesto obra: $10mdp<br/>
              </p>
            </div>
          </div>
          <div className="w-full relative border border-brand-3 shadow-md bg-black">
            <div className="flex overflow-hidden h-[32rem]">
              <Image src={c03} className="object-cover object-center"/>
            </div>
            <div className="p-8 bg-black">
              <h3 className="mb-0">Casa Insignia</h3>
              <p className="overhead text-black">Punto Sur</p>
              <p className="!mt-0 text-white">
                Objetivo: Inversión<br/>
                Superficie: 320m<sup>2</sup><br/>
                Presupuesto obra: $6mdp<br/>
                Vendida en: $9.2mdp<br/>
              </p>
            </div>
          </div>
          <div className="w-full relative border border-brand-3 shadow-md bg-black">
            <div className="flex overflow-hidden h-[32rem]">
              <Image src={c02} className="object-cover object-center"/>
            </div>
            <div className="p-8 bg-black">
              <h3 className="!mb-0">Insignia 2.0</h3>
              <p className="overhead text-black">Punto Sur Elite</p>
              <p className="!mt-0 text-white">
                Objetivo: Inversión<br/>
                Superficie: 380m<sup>2</sup><br/>
                Presupuesto obra: $7mdp<br/>
                En venta: $12mdp<br/>
              </p>
            </div>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-1 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Alianzas"
        title="Dicen que para ser exitoso te juntes con los mejores de la industria"
        image={i06}
      />
      <section className="my-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-16">
          <div className="relative p-8 flex justify-center items-center"><Image src={p01}/></div>
          <div className="relative p-8 flex justify-center items-center"><Image src={p02}/></div>
          <div className="relative p-8 flex justify-center items-center"><Image src={p03}/></div>
          <div className="relative p-8 flex justify-center items-center"><Image src={p04}/></div>
          <div className="relative p-8 flex justify-center items-center"><Image src={p05}/></div>
          <div className="relative p-8 flex justify-center items-center"><Image src={p06}/></div>
          <div className="relative p-8 flex justify-center items-center"><Image src={p07}/></div>
          <div className="relative p-8 flex justify-center items-center"><Image src={p08}/></div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-1 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i07}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-black py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, es momento de tener una asesoría de construcción
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">Ya llegaste hasta acá, ya leíste este cuento.</p>
              <p className="ft-1 text-white">
                Es momento de compartirnos unos datos y agendar una asesoría.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
