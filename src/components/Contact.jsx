import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div className='min-h-screen bg-black text-white flex flex-col overflow-x-hidden'>
        <Navbar />

        <div className="flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-4xl font-bold pb-6 text-[#14532d] text-center">
            Get in Touch
          </h1>

          {/* Bio Section */}
          <p className="text-center text-lg mb-10 max-w-lg">
            Hi, I'm Prem! I'm a passionate Programmer constantly learning and building projects.
            I love exploring new technologies, including web development,DSA, full-stack projects,
            and enhancing my skills in the tech world. Feel free to connect with me via the
            links below!
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center space-x-6 pb-10 max-w-full">
            <a
              href="https://github.com/prems51"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#14532d] transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/premraj-singh-944791285/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#14532d] transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/yrr_premmm/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#14532d] transition-colors duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="mailto:prem.s244001@gmail.com"
              className="hover:text-[#14532d] transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>

          {/* Footer */}
          <div className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Prem | All Rights Reserved
          </div>
        </div>

        <div className='mt-auto w-full'>
          <Footer />
        </div>
      </div>


    </>
  )
}

export default Contact
