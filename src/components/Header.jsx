import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">WilderGreen</NavLink>
        <nav className={`site-nav ${open? 'open':''}`} aria-label="Main navigation">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/get-started">Get Started</NavLink>
          <NavLink to="/donate" className="donate">Donate</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="hamburger" aria-label="Open menu" onClick={()=> setOpen(o=>!o)}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>
    </header>
  )
}
