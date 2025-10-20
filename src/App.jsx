import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import GetStarted from './pages/GetStarted'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Donate from './pages/Donate'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import ThemeToggle from './components/ThemeToggle'

export default function App(){
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="logo">WilderGreen</NavLink>
          <nav className="site-nav">
            <NavLink to="/about" className={({isActive})=> isActive? 'active':''}>About</NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive? 'active':''}>Projects</NavLink>
            <NavLink to="/team" className={({isActive})=> isActive? 'active':''}>Team</NavLink>
            <NavLink to="/events" className={({isActive})=> isActive? 'active':''}>Events</NavLink>
            <NavLink to="/resources" className={({isActive})=> isActive? 'active':''}>Resources</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? 'active':''}>Contact</NavLink>
            <NavLink to="/profile" className={({isActive})=> isActive? 'active':''}>Profile</NavLink>
            <a href="#donate" className="donate">Donate</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/get-started" element={<GetStarted/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} WilderGreen</div>
          <div className="foot-links">Built for community • <a href="/about">About</a></div>
        </div>
      </footer>
    </div>
  )
}
