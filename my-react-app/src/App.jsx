import { Navbar, Footer, Contact, Content,Product, Hero, About } from "./components"
import "./index.css"
import React from "react"
function App() {

  return (
    <div className="x">
      <header>
        <Navbar />

      </header>
        <Hero />
      <main className="mainx">
        <Content />
        <Product />
        <Contact />

      </main>
      <footer className="footerx">
        <About />
        
        <Footer />
      </footer>
    </div>
  )
}

export default App
