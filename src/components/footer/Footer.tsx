import {  GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
  let data = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-rose-300 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl'>Fármacia Droga da Boa Energia | Copyright:</p>
        <p className='text-lg'>Acesse nossas redes sociais</p>
        <div className='flex gap-2'>
        <a href="https://www.linkedin.com/in/luishferreira23/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={48} />
            </a>
            <a href="https://www.instagram.com/hexcharlie/" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={48} />
            </a>
            <a href="https://github.com/hexcharlie" target="_blank" rel="noopener noreferrer">
              <GithubLogo size={48} />
              </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
