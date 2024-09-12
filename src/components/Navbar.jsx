import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="px-4 lg:px-6 h-14 flex w-full items-center justify-between bg-black text-white">
      <Logo />
      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-sm font-medium hover:text-[#14532d] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button onClick={toggleMenu} className="md:hidden">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-black md:hidden">
          <nav className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium py-2 hover:text-[#14532d] transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
