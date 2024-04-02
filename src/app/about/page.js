import React from 'react'
import About from '@/components/About/About'
import PageTransition from '@/components/PageTransition'

export default function userProfile() {
  return (
    <section>
      <PageTransition />
      <About />
    </section>
  )
}