import { Nav } from '@/components/Nav'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Cursor } from '@/components/Cursor'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Stats } from '@/components/Stats'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Strengths } from '@/components/Strengths'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
