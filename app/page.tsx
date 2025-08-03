import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <SocialLinks />
      <Footer />
    </>
  )
} 