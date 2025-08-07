export default function Abouts() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row py-30 bg-white text-gray-900 justify-between text-center">
      <div className="flex flex-col justify-center items-center md:items-start md:text-left">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">¿Quiénes somos?</h2>
        <p className="max-w-2xl mx-auto text-lg mt-8 md:text-xl pr-30">
          Somos una escuela dedicada a la formación de árbitros desde hace más de 10 años. Nuestros egresados participan en torneos regionales, nacionales e internacionales.
        </p>
      </div>
      <img className="max-w-xl object-cover object-center" src="/aboutus-img.jpg" alt="aboutus-image" />
    </section>
  )
}
