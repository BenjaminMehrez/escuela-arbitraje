import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative bg-gray-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        {/* Imagen opcional de fondo difuminada */}
        <Image
          src="/arbitro-bg.jpg"
          alt="Árbitro en acción"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority
        />
        <div className="absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Formamos a los <span className="text-yellow-300">árbitros del futuro</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-xl">
          Capacitate con profesionales, accedé a certificaciones oficiales y encontrá oportunidades reales en el arbitraje.
        </p>
        <a
          href="#formulario"
          className="mt-8 inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-semibold text-lg rounded-lg shadow hover:bg-yellow-300 transition"
        >
          Inscribite ahora
        </a>
      </div>
    </header>
  )
}
