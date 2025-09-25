import SectionHero from './components/sections/section-hero'
import Navbar from './components/sections/Navbar'
import SectionClient from './components/sections/section-client'
import SectionSelling from './components/sections/section-selling'

export default function App() {
  return (
    <div>
      <Navbar />
      <SectionHero />
      <SectionClient />
      <SectionSelling />


    </div>
  )
}