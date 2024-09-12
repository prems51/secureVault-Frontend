import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import Logo from './Logo'
import { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { passStrength, generatePass } from '../logic/logic'
import { PasswordContext } from '../PassContext';





const Manager = () => {

    // NOTE:
    console.log("Don't refresh the page please!")

    // // References 
    const eyeRef = useRef(); // refernce for passoword eye icon
    const hideRef = useRef(); // refernce for hiding passowrd


    // // States
    const { form, setform } = useContext(PasswordContext);
    const { passswordArray, setpassswordArray } = useContext(PasswordContext);
    const { viewMode, setviewMode } = useContext(PasswordContext)
    const { indexOfPass, setindexOfPass } = useContext(PasswordContext)
    const { isEdited, setisEdited } = useContext(PasswordContext)
    const { strength, setstrength } = useContext(PasswordContext)
    const { suggested, setsuggested } = useContext(PasswordContext)


    const getPasswords = async () => {
        // let req = await fetch("http://localhost:3000/")
        let req = await fetch("https://securevault-10mu.onrender.com") // for hosting
        let passwords = await req.json()
        setpassswordArray(passwords)
        // console.log("Passwords from DB ", passwords)

    }

    // fetching data from database
    useEffect(() => {
        getPasswords()
    }, [])


    // Functions
    const showPassword = (e) => {
        // alert("Show Password")
        // alert(ref.current.state)
        if (eyeRef.current.state.includes("hover-lashes")) {
            eyeRef.current.state = "hover-look-around";
            hideRef.current.type = "text";
        }
        else {
            eyeRef.current.state = "hover-lashes";
            hideRef.current.type = "password";
        }

    }


    const savePassword = async () => {
        // console.log(form)
        let signal = true;
        for (let i = 0; i < passswordArray.length; i++) {
            const element = passswordArray[i];
            if (element.url === form.url && element.userName === form.userName && element.password === form.password) {
                signal = false;
                break;
            }
        }

        if (form.url === "" || form.userName === "" || form.password === "") {
            toast('Empty fields!', {
                icon: '⚠️',
            });
            return;
        }

        if (viewMode) {
            let item = passswordArray[indexOfPass]
            if (form.url !== item.url || form.userName !== item.userName || form.password !== item.password) {
                // console.log("password is edited")
                // setisEdited(true) // it sets to true after this funciton runs completely
                // console.log("value of isEdited ", isEdited) //

                // Lets delete oroginal now
                let temp = { url: item.url, userName: item.userName, password: item.password }
                let id = item.id;
                var arr = [];
                arr = passswordArray.filter(itm => itm.id !== id)
                // setpassswordArray(arr)
                await fetch("https://securevault-10mu.onrender.com", { method: "DELETE", headers: { "Content-type": "application/json" }, body: JSON.stringify({ ...temp, id }) })

            }
        }


        // Saving a new password
        if (signal) {
            let uuid = uuidv4();
            if (arr) {
                setpassswordArray([...arr, { ...form, id: uuid }])
            }
            else {
                setpassswordArray([...passswordArray, { ...form, id: uuid }])
            }


            // localStorage.setItem("passwords", JSON.stringify([...passswordArray, { ...form, id: uuidv4() }]))
            await fetch("https://securevault-10mu.onrender.com", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ ...form, id: uuid })
            })
            // console.log(...passswordArray)

            setform({
                url: "",
                userName: "",
                password: "",
            })
            setviewMode(false)
            setsuggested("")
            setstrength("")
            toast.success('Saved Successfully!')
        }
        else {
            // console.log("Details already exist")
            toast('Password exist!', {
                icon: '⚠️',
            });
        }

    }


    const deletePassword = async () => {
        let item = passswordArray[indexOfPass]
        // console.log("this is item on deleting ", item)
        // console.log("this is form on deleting ", form)

        // console.log("index of pass from manager is "+indexOfPass)
        let c = confirm("Are you Sure?")
        if (c) {
            if (indexOfPass !== null) {

                let id = item.id;
                // console.log("Deleting password with ID "+id)
                // console.log("Array before deleting ", item)

                let arr = passswordArray.filter(itm => itm.id !== id)
                // console.log("array after deleting "+arr)
                setpassswordArray(arr)
                // localStorage.setItem("passwords", JSON.stringify(arr))
                await fetch("https://securevault-10mu.onrender.com", { method: "DELETE", headers: { "Content-type": "application/json" }, body: JSON.stringify({ ...form, id }) })

            }

            setviewMode(false)
            setindexOfPass(null)
            setform({
                url: "",
                userName: "",
                password: "",
            })
            toast.success('Password Removed')
        }
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleView = () => { // for the close button
        setviewMode(false)
        setsuggested("")
        setstrength("")
        setform({
            url: "",
            userName: "",
            password: "",
        })

    }

    const copyText = (text) => {
        let str = "Nothing to copy";
        if (text !== "") {
            str = "Copied"
            navigator.clipboard.writeText(text)
        }
        toast.success('Copied!');
    }

    const passwordStrength = (pass) => {
        let score = passStrength(pass);
        if (score <= 3) {
            setstrength(score + "/10 - Weak")
        }
        else if (score > 3 && score <= 7) {
            setstrength(score + "/10 - Medium")
        }
        else {
            setstrength(score + "/10 - Strong")
        }
    }

    const suggestPass = () => {
        setsuggested(generatePass)
    }


    // we will display manager as viewer and updting box when viewmode is true
    return (
        <>

            {/* <div className="absolute inset-0 -z-10 h-screen w-screen bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-screen w-screen rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div> */}

            <div className="container mx-auto flex justify-center md:max-w-[50%] flex-col p-5 rounded-xl bg-[#14532d]  my-3">
            <div><Toaster /></div>
                {/* section 1  */}
                <div className='font-semibold px-4 flex justify-between items-center'>
                    <Logo />
                    <div className='flex items-center gap-3 '>
                        <span className='text-gray-100 text-sm italic opacity-80'>{viewMode ? "view, copy, edit and update" : "save a new password"}</span>
                        {viewMode && <span onClick={handleView} className="material-symbols-outlined text-green-200 cursor-pointer">close</span>}
                    </div>
                </div>
                {/* section 2 - all inputs and buttons*/}
                <div className=' w-full pt-5 flex flex-col gap-3 '>


                    <div className='flex border border-green-500 text-green-900 font-semibold rounded-full px-5 py-2 w-full bg-white'>
                        <input value={form.url} name='url' onChange={handleChange} className='outline-none w-full' autoComplete='off' autoFocus placeholder='Type url' type="text" />
                        <span onClick={() => { copyText(form.url) }} className="cursor-pointer text-gray-400 hover:text-[#10B981] material-symbols-outlined text-xl">content_copy</span>
                    </div>
                    <div className='flex w-full max-sm:flex-col max-sm:gap-3'>
                        <div className='sm:w-[60%] border border-green-500 text-green-900 font-semibold rounded-full sm:border-r-0 sm:rounded-r-none bg-white flex items-center px-5 max-sm:py-2'>
                            <input value={form.userName} autoComplete='off' name='userName' onChange={handleChange} className='outline-none w-full' placeholder='Username' type="text" />
                            <span onClick={() => { copyText(form.userName) }} className="cursor-pointer text-gray-400 hover:text-[#10B981] material-symbols-outlined text-xl ">content_copy</span>
                        </div>
                        <div className='max-sm:hidden bg-green-500 w-[1px]'></div>
                        <div className='flex justify-between gap-2 items-center bg-white border border-green-500 text-green-900 font-semibold sm:border-l-0 sm:rounded-l-none rounded-full px-4 sm:w-[40%] '>
                            <input value={form.password} autoComplete='off' name='password' onChange={handleChange} className='outline-none w-full ' placeholder='Password' type="password" ref={hideRef} />
                            <button className='pt-1 ' onClick={showPassword}><lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="hover" stroke="bold" ref={eyeRef} state="hover-lashes" style={{ width: "25px" }} colors="primary:#121331,secondary:#121331">
                            </lord-icon></button>
                            <span onClick={() => { copyText(form.password) }} className="cursor-pointer text-gray-400 hover:text-[#10B981] material-symbols-outlined text-xl">content_copy</span>
                        </div>
                    </div>
                    <div className="detials flex gap-1">
                        {strength && <span className='border text-white font-semibold px-5 rounded-md border-green-500'>{strength}</span>}
                        {suggested && <span className='border text-white font-semibold pl-5 rounded-md border-green-500 flex items-center w-fit gap-3'><span>{suggested}</span>
                            <span onClick={() => { copyText(suggested) }} className="cursor-pointer text-gray-400 hover:text-[#10B981] material-symbols-outlined text-xl">content_copy</span>
                        </span>}
                    </div>
                    {/* buttons group */}
                    <div className="buttons flex flex-row-reverse gap-3">

                        <button onClick={() => { savePassword() }} className='bg-green-500 px-4 py-2 rounded-full text-white flex justify-center items-center hover:bg-[#10B981] transition-all duration-300'>
                            <lord-icon src="https://cdn.lordicon.com/zrkkrrpl.json" trigger="hover" style={{ width: "25px" }} state="hover-swirl" stroke="bold" colors="primary:#fff,secondary:#fff" ></lord-icon>
                            <span className='text-xl pl-1 pb-1'>save</span>
                        </button>
                        {/* Generate random password */}
                        <button onClick={() => { suggestPass() }} className='bg-green-500 px-4 py-2 rounded-full text-white flex justify-center items-center hover:bg-[#10B981] transition-all duration-300'>
                            <span className="material-symbols-outlined">emoji_objects</span>
                            <span className='text-lg pl-1 pb-1'>suggest</span>

                        </button>

                        {/* password strength button */}
                        {form.password && <button onClick={() => { passwordStrength(form.password) }} className='bg-green-500 px-4 py-2 rounded-full text-white flex justify-center items-center hover:bg-[#10B981] transition-all duration-300'>
                            <span className="material-symbols-outlined rotate-45 ">fitness_center</span>
                            <span className='text-lg '>strength</span>
                        </button>}

                        {viewMode && <button onClick={() => { deletePassword() }} className='bg-green-500 px-4 py-2 rounded-full text-white flex justify-center items-center hover:bg-[#10B981] transition-all duration-300'>
                            <lord-icon src="https://cdn.lordicon.com/drxwpfop.json" trigger="morph" stroke="bold" state="morph-trash-in" colors="primary:#ffffff,secondary:#ffffff" style={{ width: "25px" }}></lord-icon>

                        </button>}


                    </div>
                </div>
            </div>
            
        </>
    )
}


export default Manager
