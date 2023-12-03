import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import Contact from './components/view/Contact';
import NotFound from './components/view/NotFound';
import Footer from './components/view/Footer';


function App() {
  return (
    <main className='home'>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </main>
  )
}

export default App
