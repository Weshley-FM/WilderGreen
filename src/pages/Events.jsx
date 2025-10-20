import React from 'react'

const sample = [
  {id:1, title:'Riverside Cleanup', date:'Nov 8, 2025', desc:'Join neighbors to clean the riverside and collect recyclables.'},
  {id:2, title:'Tree Planting Day', date:'Nov 22, 2025', desc:'Help plant native saplings in the east meadow.'},
  {id:3, title:'Fundraiser Gala', date:'Dec 6, 2025', desc:'An evening to celebrate and fund future projects.'}
]

export default function Events(){
  return (
    <div className="container section events-page">
      <h1>Upcoming Events</h1>
      <div className="grid">
        {sample.map(ev=> (
          <article key={ev.id} className="event-card">
            <h3>{ev.title}</h3>
            <time>{ev.date}</time>
            <p>{ev.desc}</p>
            <a className="btn outline" href="#">RSVP</a>
          </article>
        ))}
      </div>
    </div>
  )
}
