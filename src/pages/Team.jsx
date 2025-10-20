import React from 'react'

export default function Team(){
  return (
    <div className="container section team-page">
      <h1>Team</h1>
      <p>A group of volunteers and organizers driving local impact.</p>
      <div className="grid team-grid">
        <div className="card"><h4>Alex</h4><p>Community Lead</p></div>
        <div className="card"><h4>Sam</h4><p>Programs</p></div>
        <div className="card"><h4>Riley</h4><p>Operations</p></div>
      </div>
    </div>
  )
}
