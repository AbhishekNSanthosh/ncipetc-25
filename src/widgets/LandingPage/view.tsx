import React from 'react'
import LandingPageContent from './components/LandingPageContent'
import Header from '@widgets/Header'
import Footer from '@widgets/Footer'

export default function LandingPageView() {
  return (
    <main>
      <Header/>
      <LandingPageContent/>
      <Footer/>
    </main>
  )
}
