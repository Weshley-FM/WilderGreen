import React from 'react'

export default function Projects(){
  return (
    <div className="container section projects-page">
      <h1>Projects</h1>
      <p>Explore our active and completed environmental projects. Each project focuses on measurable impact and community participation.</p>
      <div className="grid">
        <article className="card"><h3>Riverside Restoration</h3><p>Removing invasive species and replanting native banks.</p></article>
        <article className="card"><h3>Urban Canopy</h3><p>Planting trees along city streets and parks.</p></article>
        <article className="card"><h3>Compost Hubs</h3><p>Community composting to reduce waste and enrich soils.</p></article>
      </div>
    </div>
  )
}
