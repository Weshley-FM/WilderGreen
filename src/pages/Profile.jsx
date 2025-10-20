import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { UserIcon, CheckCircleIcon } from '../components/Icons'

export default function Profile(){
  return (
    <div className="container section profile-page py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold mb-4">Your Profile</h1>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <div className="max-w-2xl mx-auto p-6 rounded-2xl border bg-white dark:bg-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600">
              <UserIcon />
            </div>
            <div>
              <div className="text-lg font-semibold">Guest</div>
              <div className="text-sm text-gray-500">Member since: Not signed in</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-white dark:bg-gray-900">
              <div className="text-sm text-gray-500">Upcoming RSVPs</div>
              <div className="text-xl font-bold">0</div>
            </div>
            <div className="p-4 rounded-lg border bg-white dark:bg-gray-900">
              <div className="text-sm text-gray-500">WilderScore</div>
              <div className="text-xl font-bold">—</div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="btn outline">Edit Profile</button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
