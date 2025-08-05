import Abouts from '@/components/Aboutus'
import Advanteges from '@/components/Advantages'
import Courses from '@/components/Courses'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Escuela de Arbitraje Profesional | Cursos y Certificación</title>
        <meta name="description" content="Formate como árbitro profesional con certificación oficial. Clases prácticas y salida laboral inmediata." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Escuela de Arbitraje Profesional" />
        <meta property="og:description" content="Cursos, clases prácticas y certificación oficial para árbitros." />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main className="min-h-screen bg-white text-black">
        <Hero />
        <Abouts />
        <Advanteges />
        <Courses />
        <Testimonials />
        <CTA />
        <Form />
        <Footer />
      </main>
    </>
  )
}
