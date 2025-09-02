import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import NavProvider from "./NavContext"
import About from './About';
import Recepies from "./Recepies";
import RecepieDetails from "./RecepieDetails";
function App() {
  

  return (
    <BrowserRouter>
      <NavProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/recepies" element={<Recepies/>}/>
          <Route path="/recepies/:id" element={<RecepieDetails/>}/>
        </Routes>
      </NavProvider>
    </BrowserRouter>

  )
}

export default App
