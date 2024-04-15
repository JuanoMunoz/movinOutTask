import { useEffect, useRef } from "react"
import { API, ApiResponse, LoginFormType } from "../types/App.d"
import { errorToast,successToast } from "../logic"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"


export default function useApiToken( userInfo: LoginFormType | undefined): void{
    //FIRST RENDER TO AVOID FETCH ENTERING THE PAGE
    const firstRender = useRef(true)
    const navigate = useNavigate()
    const {login} = useAuth()
    //-----------------------------------UseEffect-------------------------- -------
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        fetch(`${API.API_ROOT}users/login`, {
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(userInfo),
        }).then(res => res.json()).then((data: ApiResponse) => {
            
            data.status == 500 ? errorToast(data.items.msg) : successToast(data.items.msg, navigate, '')
            if(data.status == 200 && data.items.token) login(data.items.token)
        })
    },[userInfo,navigate,login])
    
}
