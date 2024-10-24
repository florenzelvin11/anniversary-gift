import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import OpenMe from './pages/OpenMe'
import MyMainLetter from './pages/MyMainLetter'
import SpotifyPlaylist from './pages/SpotifyPlaylist'

function App() {

  return (
    <div className=''>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/open-me" element={<OpenMe />} />
          <Route path="/my-letter-to-you" element={<MyMainLetter />} />
          <Route path="/our-music" element={<SpotifyPlaylist />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
