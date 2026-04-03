import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionDivider from './components/SectionDivider'
import DualWork from './components/DualWork'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <DualWork />
        <Process />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
