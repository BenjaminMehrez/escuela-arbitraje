import { useState } from 'react'
import MenuClose from './icons/MenuClose'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  const change = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="banner">
      <header className="flex justify-between items-center text-white px-10 pt-10">
        <h2 className="font-semibold text-xl sm:text-2xl">Escuela de Árbitro</h2>
        <MenuClose className="w-9 h-9 md:hidden" onClick={change} />
        <nav aria-label="Menú principal" className="hidden md:block">
          <ul className="flex flex-wrap gap-6 text-xl font-medium">
            <li><a href="#contacto" className="hover:text-blue-400 transition-all duration-300">Contacto</a></li>
            <li><a href="#nosotros" className="hover:text-blue-400 transition-all duration-300">Nosotros</a></li>
            <li><a href="#inscripcion" className="hover:text-blue-400 transition-all duration-300">Inscripción</a></li>
            <li><a href="#resenas" className="hover:text-blue-400 transition-all duration-300">Reseñas</a></li>
          </ul>
        </nav>
      </header>

      <div className="mt-[100px] max-w-5xl mx-auto text-white flex flex-col items-center justify-center gap-8 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Formamos a los <span className="text-blue-300">árbitros del futuro</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl px-5">
          Capacitate con profesionales, accedé a certificaciones oficiales y encontrá oportunidades reales en el arbitraje.
        </p>
        <a
          href="#formulario"
          className="mt-10 inline-block px-8 py-4 bg-blue-600 font-semibold text-lg rounded-lg shadow hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Inscribite ahora
        </a>
      </div>
    </section>

  )
}
