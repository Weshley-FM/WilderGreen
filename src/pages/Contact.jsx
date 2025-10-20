import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { GlobeIcon } from '../components/Icons'

export default function Contact(){
  return (
    <div className="container section contact-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold mb-4">Contact</h1>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Get in touch with the WilderGreen team for partnerships, volunteering or media inquiries.</p>
      </AnimatedSection>

      <AnimatedSection delay={240}>
        <div className="max-w-xl mx-auto p-6 rounded-2xl border bg-white dark:bg-gray-800">
          <div className="mb-4 text-emerald-500"><GlobeIcon /></div>
          <p className="text-sm text-gray-600 dark:text-gray-300">hello@wildergreen.example</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
        </div>
      </AnimatedSection>
    </div>
  )
}
