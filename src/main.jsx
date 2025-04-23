import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Carousel from './components/Carousel.jsx'
import Destination from './components/Destination.jsx'
import Forms from './components/Forms.jsx'
import Cards from './components/Cards.jsx'
import Animation from './components/Animation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Header/>
    <Carousel/>
    <Forms/>
    <Cards/>
    <Animation/>    
    <Destination/>

  </StrictMode>,
)
