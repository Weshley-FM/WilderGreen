import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { CleanLeafIcon } from '../components/Icons'

export default function Donate(){
  return (
    <div className="container section donate-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold mb-4">Support WilderGreen</h1>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Your donations fund tools, saplings, event logistics and educational materials. Thank you for supporting local restoration.</p>
      </AnimatedSection>

      <AnimatedSection delay={240}>
        <div className="flex items-center justify-center">
          <button className="px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition flex items-center gap-3">
            <CleanLeafIcon className="text-white text-2xl" />
            Donate Now
          </button>
        </div>
      </AnimatedSection>
    </div>
  )
}
