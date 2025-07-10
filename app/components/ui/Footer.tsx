import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-center items-center py-8 md:py-12'>
      <Image src="/images/MUTA-Logo_Footer.svg" alt="Logo de MUTA" width={214} height={120} />
    </footer>
  )
}

export default Footer