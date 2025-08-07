const ventajas = [
  "Certificación oficial",
  "Clases presenciales y virtuales",
  "Profesores con experiencia en AFA",
  "Prácticas reales en partidos"
]

export default function Advanteges() {
  return (
    <section className="py-30 px-6 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">¿Por qué elegirnos?</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-15">
        {ventajas.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">
            <p className="text-lg">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
