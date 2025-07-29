import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <main className='realative min-h-screen w-screen over overflow-x-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
    </main>
  )
}

export default App