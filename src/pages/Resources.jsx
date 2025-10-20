import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { GlobeIcon } from '../components/Icons'

export default function Resources(){
  return (
    <div className="container section resources-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold mb-4">Resources</h1>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Guides, toolkits and links to learn more about sustainable practices and environmental stewardship.</p>
      </AnimatedSection>

      <AnimatedSection delay={240}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border bg-white dark:bg-gray-800">
            <div className="mb-3 text-emerald-500"><GlobeIcon /></div>
            <h4 className="font-semibold">Getting Started</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">A starter guide for new volunteers and community organizers.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
