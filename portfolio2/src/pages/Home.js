import React from 'react'
import Feature from '../components/Feature'
import AboutUs from '../components/AboutUs'
import Facts from '../components/Facts'
import Services from '../components/Services'
import Newsletter from '../components/Newsletter'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Teams from '../components/Teams'

export default function Home() {
  return (
    <>
      <Feature></Feature>
      <AboutUs></AboutUs>
      <Facts></Facts>
      <Services></Services>
      <Newsletter></Newsletter>
      <Projects></Projects>
      <Teams></Teams>
      <Testimonials></Testimonials>
    </>
  )
}
