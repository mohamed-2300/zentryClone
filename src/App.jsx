import React from 'react'
import Hero from './components/Hero'

const App = () => {
  return (
    <main className='realative min-h-screen w-screen over overflow-x-hidden'>
        <Hero />

        <section className='bg-blue-700 h-screen'></section>
    </main>
  )
}

export default App