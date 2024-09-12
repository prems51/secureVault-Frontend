import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-green-900">
                <p className="text-xs text-gray-400">© {new Date().getFullYear()} SecureVault | All Rights Reserved</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link to="#" className="text-xs hover:underline underline-offset-4 text-gray-400">
                        Terms of Service
                    </Link>
                    <Link to="#" className="text-xs hover:underline underline-offset-4 text-gray-400">
                        Privacy
                    </Link>
                </nav>
            </footer>
  )
}

export default Footer
