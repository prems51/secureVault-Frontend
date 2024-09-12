import React from 'react'
import { Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <Shield className="h-6 w-6 text-green-500" />
      <span className="ml-2 text-xl font-bold">SecureVault</span>
    </Link>
  )
}

export default Logo
