export default function Form() {
  return (
    <section id="formulario" className="py-20 px-6 bg-white text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4">Inscripción</h2>
      <form
        action="https://formspree.io/f/tu-id-formulario"
        method="POST"
        className="max-w-xl mx-auto space-y-4 text-left mt-10"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Completo"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Teléfono"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje (opcional)"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Enviar inscripción
        </button>
      </form>
    </section>
  )
}
