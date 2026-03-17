import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Landing page — sans Navbar globale */}
          <Route path="/landing" element={<Landing />} />

          {/* Reste de l'application */}
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-netflix-black">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movie/:id" element={<MovieDetail />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
