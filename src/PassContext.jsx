// passContext.js
import { createContext, useState } from 'react';



export const PasswordContext = createContext();

export const MyContextProvider = ({ children }) => {

    // States
    const [viewMode, setviewMode] = useState(false) // reference for saving, updating and viewing passowrd
    const [passswordArray, setpassswordArray] = useState([])
    const [indexOfPass, setindexOfPass] = useState(null)
    const [form, setform] = useState({ url: "", userName: "", password: "" })
    const [strength, setstrength] = useState("")
    const [suggested, setsuggested] = useState("")
    const [isEdited, setisEdited] = useState(false)
    const [isVault, setisVault] = useState(false) // if he opens vault
    const [isSaving, setisSaving] = useState(false)// if he click on save new password

    // context onject
    const contextValue = {
        form, setform,
        passswordArray, setpassswordArray,
        viewMode, setviewMode,
        indexOfPass, setindexOfPass,
        isEdited, setisEdited,
        strength, setstrength,
        suggested, setsuggested,
        isSaving, setisSaving,
        isVault, setisVault,
    }

    return (
        <PasswordContext.Provider value={contextValue}>
            {children}
        </PasswordContext.Provider>
    )
}