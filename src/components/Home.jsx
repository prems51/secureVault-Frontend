import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { PasswordContext } from '../PassContext'
import { generatePass, passStrength } from '../logic/logic'
import toast, { Toaster } from 'react-hot-toast';





const Home = () => {

  const [password, setpassword] = useState('')
  const [checkingStrength, setcheckingStrength] = useState(false)
  const [passStrInput, setpassStrInput] = useState('')

  const { isVault, setisVault } = useContext(PasswordContext)
  const { isSaving, setisSaving } = useContext(PasswordContext)

  
  setisSaving(false)
  setisVault(false)

  const getPassword = () => {
    let pass = generatePass();
    setpassword(pass)
    toast("Copied to Clipboard", {
      duration: 4000,
      position: 'top-center',

      // Styling
      style: {},
      className: '',

      // Custom Icon
      icon: '🗝️',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },

      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
    navigator.clipboard.writeText(pass)
  }

  const handleChange = (e) => {
    setpassStrInput(e.target.value)
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {

      if (passStrInput) {
        let score = passStrength(passStrInput);

        let msg = ""
        if (score <= 3) {
          msg +=  score + "/10 - Weak" 
        }
        else if (score > 3 && score <= 7) {
          msg += score + "/10 - Medium" 
        }
        else {
          msg += score + "/10 - Strong" 
        }

        toast(msg, {
          duration: 4000,
          position: 'top-center',

          // Styling
          style: {},
          className: '',

          // Custom Icon
          icon: '💪',

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
      }
    }

  }



  return (
    <>
      <div className='min-h-screen flex flex-col bg-black text-white'>
      <Toaster />
      <Navbar />

      <main className='flex-grow flex items-center justify-center px-4 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl'>
          <Link to='/vault' onClick={() => setisVault(true)} className="w-full">
            <div className='card aspect-video bg-[#14532d] text-2xl font-semibold rounded-lg flex justify-center items-center hover:bg-[#10B981] transition duration-300 ease-in-out shadow-lg'>
              <span>Vault</span>
            </div>
          </Link>

          <div onClick={getPassword} className='card aspect-video cursor-pointer bg-[#14532d] text-2xl font-semibold rounded-lg flex flex-col gap-3 justify-center items-center hover:bg-[#10B981] transition duration-300 ease-in-out shadow-lg'>
            <span>Generate</span>
            <span className='text-xs text-gray-300'>{password}</span>
          </div>

          <Link to='/manager' onClick={() => setisSaving(true)} className="w-full">
            <div className='card aspect-video bg-[#14532d] text-2xl font-semibold rounded-lg flex justify-center items-center hover:bg-[#10B981] transition duration-300 ease-in-out shadow-lg'>
              <span>Save New</span>
            </div>
          </Link>

          <div onClick={() => setcheckingStrength(true)} className='card aspect-video cursor-pointer bg-[#14532d] text-2xl font-semibold rounded-lg flex flex-col gap-3 justify-center items-center hover:bg-[#10B981] transition duration-300 ease-in-out shadow-lg'>
            <span>Strength</span>
            {checkingStrength && (
              <input
                onKeyDown={handleSubmit}
                className='flex text-xs border border-green-500 outline-none text-green-900 font-semibold rounded-full px-2 py-2 w-4/5 bg-white'
                value={passStrInput}
                name='pass'
                onChange={handleChange}
                autoComplete='off'
                autoFocus
                placeholder='Type Password'
                type="text"
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>


  )
}

export default Home
