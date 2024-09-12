import './App.css'
import { useState, useContext } from 'react'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Vault from './components/vault'
import Footer from './components/Footer'
import { PasswordContext } from './PassContext'


function App() {

  

  const {isVault, setisVault} = useContext(PasswordContext)
  const {isSaving, setisSaving} = useContext(PasswordContext)
  

  return (
    <>
      {/* <PasswordContext.Provider value={contextValue}> */}
        <div className='flex flex-col min-h-screen  bg-black text-white '>
          <Navbar />
          {isSaving && <Manager/>}
          {/* <Manager /> */}
          
          {isVault && <Vault />}
          <div className='mt-auto'>
          <Footer />
          </div>
        </div>
      {/* </PasswordContext.Provider> */}
    </>
  )
}

export default App
