import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
