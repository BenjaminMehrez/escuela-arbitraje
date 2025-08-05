export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">Testimonios</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <blockquote className="max-w-md mx-auto italic text-lg mt-8">
          “Gracias a esta escuela hoy dirijo en torneos nacionales. ¡Recomendado!”
          <footer className="mt-2 font-semibold">– Juan P., egresado 2023</footer>
        </blockquote>
        <blockquote className="max-w-lg mx-auto italic text-lg mt-8">
          “Las clases prácticas y el apoyo constante me ayudaron a conseguir mi primer partido.”
          <footer className="mt-2 font-semibold">– María L., egresada 2022</footer>
        </blockquote>
        <blockquote className="max-w-md mx-auto italic text-lg mt-8">
          “Una experiencia transformadora. Los instructores son profesionales de primer nivel.”
          <footer className="mt-2 font-semibold">– Carlos G., egresado 2023</footer>
        </blockquote>
      </div>
    </section>
  )
}
