import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Contact, Works, Footer, Tech } from './components';
import './css/Static.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App