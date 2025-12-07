import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { Navbar,Welcome,Dock } from "#components"
import { Finder, Resume, Safari, Terminal,TextView,ImageView, Contact } from "#windows"

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
    </main>
  )
}

export default App
