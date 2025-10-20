import React, { useEffect, useRef, useState } from 'react'

// Inline SVG icons used on this page (minimal, no external icon lib required)
const UserIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const GlobeIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20" />
  </svg>
)

const SparklesIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7.3.3-1c.2-.3.6-.4.9-.4h15c.3 0 .7.1.9.4l.3 1" />
  </svg>
)

// Small animated wrapper that fades & lifts elements into view when scrolled
const AnimatedSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setIsVisible(true), delay)
        obs.unobserve(el)
      }
    }, { threshold: 0.12 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {children}
    </div>
  )
}

export default function Team() {
  const teamMembers = [
    { name: 'Alex Rivera', title: 'Community Lead', bio: 'Mobilizes local volunteers and coordinates neighborhood projects.', icon: <UserIcon className="text-emerald-500" /> },
    { name: 'Samira Patel', title: 'Programs Director', bio: 'Designs impact programs and measures community outcomes.', icon: <GlobeIcon className="text-emerald-500" /> },
    { name: 'Riley Thompson', title: 'Operations', bio: 'Keeps the platform running and supports field logistics.', icon: <SparklesIcon className="text-emerald-500" /> },
    { name: 'Jordan Lee', title: 'Design & UX', bio: 'Crafts delightful, accessible experiences for every user.', icon: <UserIcon className="text-emerald-500" /> },
    { name: 'Dr. Evelyn Reed', title: 'Science Advisor', bio: 'Provides climate science guidance and verification.', icon: <GlobeIcon className="text-emerald-500" /> },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Meet the Team</h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10">A passionate crew of organizers, scientists, and builders working toward regenerative impact.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((m, i) => (
            <AnimatedSection key={m.name} delay={120 * i}>
              <div className="p-6 rounded-2xl border border-emerald-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600">
                    {m.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{m.name}</h3>
                    <p className="text-sm text-emerald-500">{m.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{m.bio}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Member since 2023</div>
                  <button className="px-4 py-2 text-sm rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">View</button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
