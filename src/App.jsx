import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' 
import Home from './pages/Home/Home'
//import Resume from './pages/Resume/Resume'
import Store from './pages/Store/Store'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  )
}
export default App
