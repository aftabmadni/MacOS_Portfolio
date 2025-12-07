import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { Navbar,Welcome,Dock, Home } from "#components"
import { Finder, Resume, Safari, Terminal,TextView,ImageView, Contact, Photos } from "#windows"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextView/>
      <ImageView />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App
