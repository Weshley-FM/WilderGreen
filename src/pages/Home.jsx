import React from 'react'

export default function Home(){
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">Grow Green. Give Green.</h1>
            <p className="hero-sub">Community activities and fundraisers that restore nature and bring people together.</p>
            <div className="hero-cta">
              <a href="/get-started" className="btn">Get Started</a>
              <a href="#events" className="btn outline">See Events</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="leaf-group">
              {/* Abstract SVG mark inspired by cinematic studio branding */}
              <svg className="visual-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#00b7ff" />
                    <stop offset="100%" stopColor="#6cf0c1" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="200" height="200" rx="20" fill="url(#g1)" opacity="0.08" />
                <path d="M40 140 C70 40, 130 40, 160 140" stroke="#00b7ff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                <circle cx="72" cy="92" r="8" fill="#6cf0c1" opacity="0.95" />
                <circle cx="128" cy="92" r="8" fill="#00b7ff" opacity="0.95" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section container">
        <h2>Our Mission</h2>
        <p>We organize local cleanups, tree plantings, educational workshops and fundraising events to support environmental initiatives and community resilience.</p>
      </section>

      <section id="activities" className="section activities container">
        <h2>Activities</h2>
        <div className="grid">
          <article className="card">
            <div className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 6h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M7 6v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M17 6v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Community Cleanups</h3>
            <p>Volunteer with neighbors to clean parks and waterways.</p>
          </article>
          <article className="card">
            <div className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Tree Planting</h3>
            <p>Restore canopy and improve biodiversity with planting days.</p>
          </article>
          <article className="card">
            <div className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Workshops</h3>
            <p>Learn practical skills: composting, native gardening and more.</p>
          </article>
        </div>
      </section>

      <section id="events" className="section container">
        <h2>Upcoming Events</h2>
        <div className="events-row">
          <div className="event">Riverside Cleanup — <em>Nov 8, 2025</em></div>
          <div className="event">Tree Planting Day — <em>Nov 22, 2025</em></div>
          <div className="event">Fundraiser Gala — <em>Dec 6, 2025</em></div>
        </div>
      </section>

      <section id="donate" className="section donate container">
        <h2>Support Our Work</h2>
        <p>Your donation funds supplies, saplings and outreach to expand our impact.</p>
        <a className="btn" href="#">Donate Now</a>
      </section>
    </div>
  )
}
