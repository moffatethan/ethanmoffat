import { DarkModeToggle } from '../components/darkModeToggle'
import { Header } from '../components/header'
import { Showcase } from '../components/showcase'
import About from '../components/about'
import Quote from '../components/quote'
import Contact from '../components/contact'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div className="dark:bg-gray-700 transition">
      <DarkModeToggle />
      <Header />
      <Showcase />
      <Quote />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
