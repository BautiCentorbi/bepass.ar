import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full justify-center items-center gap-4 pt-8 pb-4 md:pt-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        <div className='w-full mx-8 md:mx-42'>
          <Link href={"/"}>
            <Image src="/images/MUTA-Logo_Footer.svg" alt="Logo de MUTA" width={214} height={120} />
          </Link>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-center items-start gap-8'> 
          <div>
            <h4 className='text-title_color text-3xl font-medium tracking-tighter leading-tighter'>Contactanos</h4>
            <Link target='_blank' rel='noopener noreferrer' href={"mailto:rrhh@muta-ai.com"} className='text-gray-500 text-sm md:text-base'>rrhh@muta-ai.com</Link>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-title_color text-3xl font-medium tracking-tighter leading-tighter'>Redes Sociales</h4>
            <Link target='_blank' rel='noopener noreferrer' className='text-gray-500 text-sm md:text-base' href="https://www.instagram.com/muta.ai/">Instagram</Link>
            <Link target='_blank' rel='noopener noreferrer' className='text-gray-500 text-sm md:text-base' href="https://www.linkedin.com/company/muta-ai/">Linkedin</Link>
          </div>
        </div>
      </div>
      <div>
        <p className='text-gray-500 text-sm md:text-base'>© 2025 MUTA AI. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer