import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { CleanLeafIcon } from '../components/Icons'

export default function GetStarted(){
  return (
    <div className="container section getstarted-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold mb-4">Get Started</h1>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Ready to join? Here's how to get involved:</p>
      </AnimatedSection>

      <AnimatedSection delay={240}>
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Sign up for events on the Events page.</li>
          <li>Follow our social channels for updates.</li>
          <li>Donate or volunteer materials for planting and workshops.</li>
        </ol>
        <button className="px-6 py-3 rounded-full bg-emerald-500 text-white flex items-center gap-3">
          <CleanLeafIcon className="text-white text-2xl" />
          Sign Up
        </button>
      </AnimatedSection>
    </div>
  )
}
