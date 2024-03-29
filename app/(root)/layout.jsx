'use client'

import Footer from '../../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import LocalizationProviderWrapper from '../../components/LocalizationProvider'
import Navbar from '../../components/Navbar'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const element = document.documentElement
    element.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // AOS INIT
  useEffect(() => {
    AOS.init({
      offsets: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <div className="">
      <LocalizationProviderWrapper>
        <Navbar theme={theme} setTheme={handleThemeToggle} />
        {/* <Hero theme={theme} /> */}
        <main className="">{children}</main>
        <Footer />
      </LocalizationProviderWrapper>
    </div>
  )
}
