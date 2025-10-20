import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { GlobeIcon, SparklesIcon } from '../components/Icons'

export default function About(){
  return (
    <div className="container section page about-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About WilderGreen</h1>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">WilderGreen is a community-driven initiative focused on environmental activities, education and fundraising to restore and protect local ecosystems.</p>
      </AnimatedSection>

      <AnimatedSection delay={240}>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 rounded-2xl border bg-white dark:bg-gray-800">
            <div className="mb-3 text-emerald-600">{<GlobeIcon />}</div>
            <h3 className="font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We organize volunteers, run workshops, and partner with local organizations to make measurable impact.</p>
          </div>

          <div className="p-6 rounded-2xl border bg-white dark:bg-gray-800">
            <div className="mb-3 text-emerald-600">{<SparklesIcon />}</div>
            <h3 className="font-semibold mb-2">What We Do</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">From tree planting to community education and fundraising, we support grassroots projects that regenerate local ecosystems.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
