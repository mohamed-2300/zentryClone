import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='realative min-h-screen w-screen over overflow-x-hidden'>
        <Navbar />
        <Hero />
        <About />
    </main>
  )
}

export default App