import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { CleanLeafIcon } from '../components/Icons'

export default function Home(){
  return (
    <div className="home-page">
      <section className="hero cinematic-hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <AnimatedSection>
              <h1 className="hero-title">Restore nature. Empower communities.</h1>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <p className="hero-lead">WilderGreen organizes community-led restoration projects, educational programs, and fundraisers to create measurable environmental impact.</p>
            </AnimatedSection>

            <AnimatedSection delay={240}>
              <div className="hero-actions">
                <a className="btn primary" href="/projects">Explore Projects</a>
                <a className="btn ghost" href="/get-started">Get Involved</a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={360}>
              <div className="hero-stats">
                <div><strong>48+</strong><span>Events</span></div>
                <div><strong>1.2k</strong><span>Volunteers</span></div>
                <div><strong>3.4k</strong><span>Saplings Planted</span></div>
              </div>
            </AnimatedSection>
          </div>

          <div className="hero-right">
            <AnimatedSection>
              <div className="visual-card">
                <svg className="visual-svg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <linearGradient id="gradA" x1="0" x2="1">
                      <stop offset="0%" stopColor="#00b7ff" />
                      <stop offset="100%" stopColor="#6cf0c1" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="300" rx="14" fill="url(#gradA)" opacity="0.06" />
                  <g stroke="#00b7ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M40 220 C80 60, 320 60, 360 220" opacity="0.95" />
                  </g>
                </svg>
                <div className="visual-leaf absolute top-6 right-6">
                  <CleanLeafIcon className="text-emerald-400 text-3xl" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section container showcase">
        <AnimatedSection>
          <h2>Featured Projects</h2>
        </AnimatedSection>
        <div className="grid">
          <AnimatedSection delay={120}>
            <article className="card">
              <h3>Riverside Restoration</h3>
              <p>Rehabilitating riverbanks and improving water quality with native planting.</p>
            </article>
          </AnimatedSection>
          <AnimatedSection delay={240}>
            <article className="card">
              <h3>Urban Canopy</h3>
              <p>Expanding tree cover in neighborhoods to cool streets and support biodiversity.</p>
            </article>
          </AnimatedSection>
          <AnimatedSection delay={360}>
            <article className="card">
              <h3>Community Gardens</h3>
              <p>Creating shared spaces for food, education, and resilience.</p>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
