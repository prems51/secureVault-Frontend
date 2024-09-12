import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { LockIcon, EyeIcon, KeyIcon, ShieldCheckIcon, DatabaseIcon, CodeIcon } from 'lucide-react'

const features = () => {

  const features = [
    {
      icon: <LockIcon className="w-6 h-6" />,
      title: "Secure Vault - Password Manager",
      description: "A password manager built using the MERN stack."
    },
    {
      icon: <KeyIcon className="w-6 h-6" />,
      title: "Save Passwords",
      description: "Save passwords along with the URL and username of your apps."
    },
    {
      icon: <EyeIcon className="w-6 h-6" />,
      title: "View Saved Apps",
      description: "View all your saved apps in the Vault section."
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "Random Password Generator",
      description: "Create secure passwords with our random password generator."
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "Password Strength Checker",
      description: "Check the strength of your passwords to ensure they're secure."
    },
    {
      icon: <DatabaseIcon className="w-6 h-6" />,
      title: "Secure Storage",
      description: "Passwords are stored in a MongoDB database via Express.js APIs."
    },
    {
      icon: <CodeIcon className="w-6 h-6" />,
      title: "Learning Project",
      description: "The app's primary goal was to practice and learn React.js, Node.js, Express.js, MongoDB. UI and design were not the focus, but the functionality is fully operational."
    }
  ]


  return (
    <>
      <div className='min-h-screen bg-black text-white flex flex-col'>
        <Navbar />

        <div className="flex-grow p-6 md:p-8 lg:p-12 overflow-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-white">
            Secure Vault Features
          </h1>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-[#14532d] p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white">{feature.title}</h2>
                    <p className="mt-2 text-gray-300">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-400 text-center">
              Note: Authentication is currently not implemented, as the focus was on learning core technologies.
            </p>
          </div>
        </div>



        <div className='mt-auto w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default features
