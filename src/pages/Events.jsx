import React from 'react'
import AnimatedSection from '../components/AnimatedSection'

const sample = [
  {id:1, title:'Riverside Cleanup', date:'Nov 8, 2025', desc:'Join neighbors to clean the riverside and collect recyclables.'},
  {id:2, title:'Tree Planting Day', date:'Nov 22, 2025', desc:'Help plant native saplings in the east meadow.'},
  {id:3, title:'Fundraiser Gala', date:'Dec 6, 2025', desc:'An evening to celebrate and fund future projects.'}
]

export default function Events(){
  return (
    <div className="container section events-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold mb-4">Upcoming Events</h1>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {sample.map((ev, i) => (
          <AnimatedSection key={ev.id} delay={i * 120}>
            <article className="event-card p-6 rounded-2xl border bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-1">{ev.title}</h3>
              <time className="text-sm text-gray-500 mb-3 block">{ev.date}</time>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{ev.desc}</p>
              <a className="btn outline" href="#">RSVP</a>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
