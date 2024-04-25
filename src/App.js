import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./comp/Contact";
import Home from "./comp/Home";
import Navbar from "./comp/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

export default function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}><Route></Route>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          
        
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/></div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);