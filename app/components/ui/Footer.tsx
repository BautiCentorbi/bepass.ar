import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col w-full justify-center items-center gap-4 pt-8 pb-4 md:pt-12 bg-black text-white px-6 md:px-24 2xl:px-48">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        <div className="flex justify-center w-full">
          <Link href="/">
            <Image src="/images/MUTA-Logo_Footer-White.svg" alt="Logo de MUTA" width={214} height={120} />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-2xl md:text-3xl font-medium tracking-tighter leading-tighter">Navegar</h4>
          <Link className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all" href="/#problem">Propósito</Link>
          <Link className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all" href="/#work">Cómo Trabajamos</Link>
          <Link className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all" href="/#story">Historia</Link>
          <Link className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all" href="/#solutions">Soluciones</Link>
          <Link className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all" href="/#results">Resultados</Link>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="w-full">
            <h4 className="text-white text-2xl md:text-3xl font-medium tracking-tighter leading-tighter">Contactanos</h4>
            <Link target="_blank" rel="noopener noreferrer" href="mailto:rrhh@muta-ai.com" className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all">rrhh@muta-ai.com</Link>
          </div>
          <div className="w-full flex">
            <h4 className="text-white text-2xl md:text-3xl font-medium tracking-tighter leading-tighter">Redes Sociales</h4>
            <Link target="_blank" rel="noopener noreferrer" className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all" href="https://www.instagram.com/muta.ai/">Instagram</Link>
            <Link target="_blank" rel="noopener noreferrer" className="w-fit text-gray-200 text-sm md:text-base hover:translate-x-1 hover:border-b transition-all" href="https://www.linkedin.com/company/muta-ai/">Linkedin</Link>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-200 text-sm md:text-base text-center md:text-left">© 2025 MUTA AI. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer