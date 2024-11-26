import Navbar from './coponents/Navbar'
import Hero from './coponents/Hero'
import About from './coponents/About'
import Technologies from './coponents/Technologies'
import Experience from './coponents/Experience'
import Projects from './coponents/Projects'
import Contact from './coponents/Contact'
import Fotter from './coponents/Fotter'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-3- selction:text-cyan-900">
      <div className='fixed top-0 -z-10 h-fulll w-full'>
          <div className="absolute top-0 z-[-2] h-screen 
          w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3)
          ,rgba(255,255,255,0))]">
          </div>
      </div>
      <div className="container mx-auto px-8 ">
        <Navbar />
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
       <Projects/>
       <Contact/>
       <Fotter/>
      </div>
      
    </div>
  )
}

export default App
