import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { CleanLeafIcon } from '../components/Icons'

export default function Projects(){
  const projects = [
    { title: 'Riverside Restoration', desc: 'Removing invasive species and replanting native banks.' },
    { title: 'Urban Canopy', desc: 'Planting trees along city streets and parks.' },
    { title: 'Compost Hubs', desc: 'Community composting to reduce waste and enrich soils.' },
  ]

  return (
    <div className="container section projects-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold mb-4">Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Explore our active and completed environmental projects. Each project focuses on measurable impact and community participation.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 120}>
            <article className="card p-6 rounded-2xl border bg-white dark:bg-gray-800 shadow hover:shadow-2xl">
              <div className="mb-3 text-emerald-500"><CleanLeafIcon /></div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
