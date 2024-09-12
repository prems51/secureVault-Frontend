import React from 'react'
import { useContext,useEffect } from 'react'
import { PasswordContext } from '../PassContext'




const Vault = () => {
    // NOTE:
    console.log("Don't refresh the page please!")


    const { passswordArray, setpassswordArray } = useContext(PasswordContext);
    const { viewMode, setviewMode } = useContext(PasswordContext)
    const { indexOfPass, setindexOfPass } = useContext(PasswordContext)
    const { form, setform } = useContext(PasswordContext)
    const {isVault, setisVault} = useContext(PasswordContext)
    const {isSaving, setisSaving} = useContext(PasswordContext)
    
    if(isVault){
        const getPasswords = async () => {
            let req = await fetch("https://securevault-10mu.onrender.com")
            let passwords = await req.json()
            setpassswordArray(passwords)
            // console.log("Passwords from DB ", passwords)
    
        }
    
        // fetching data from database
        useEffect(() => {
            getPasswords()
        }, [])
    }


    const handleView = () => {
        // console.log(viewMode)
        setviewMode(true);
        setisSaving(true)
        

    }

    const indexOfView = (index) => {
        // console.log(index+" index From vault")
        setindexOfPass(index)

        let p = passswordArray[index]
        setform({
            url: p.url,
            userName: p.userName,
            password: p.password,
        })

        // console.log("form data form vault on click", form)
    }




    return (
        <div className='vault container mx-auto flex flex-col gap-3 justify-center md:max-w-[50%] p-5 rounded-xl bg-[#14532d] my-3'>
            {passswordArray.length === 0 && <div className='text-gray-200 text-sm italic opacity-80'>No Password saved yet</div>}
            {passswordArray.length !== 0 &&
                <div className='flex flex-col gap-2 '>
                    <div className="card  px-5 py-1 flex justify-between items-center font-bold text-white text-2xl ">All Passwords</div>
                    {passswordArray.map((item, index) => {
                        return <button name='view' onClick={() => { handleView(index); indexOfView(index); }} key={index} className="card border border-green-500 rounded-full px-5 py-1 flex justify-between items-center bg-white hover:bg-green-200 font-semibold text-green-900 ">
                            <span className='flex gap-2'>
                                <span className='w-6 rounded-full flex justify-center items-center overflow-hidden object-contain' >
                                    <img src={"https://"+item.url+"/favicon.ico"} alt="" />
                                </span>
                                <span>{item.url}</span>
                            </span>
                            <span className='text-xs text-gray-400 italic'>{"@" + item.userName}</span>
                        </button>
                    })}
                </div>
            }

        </div>
    )
}

export default Vault
