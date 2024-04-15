import { NavigateFunction } from "react-router-dom"
import { toast } from "react-toastify"

export const errorToast = (msg: string): void => {
    toast.error(`${msg}!`, {
      className: 'text-lg mt-16',
    })
  }
  export const successToast =(msg: string, needRedirect: NavigateFunction | false, path?:string): void => {
    toast.success(`${msg}!`, {
      className: 'text-lg mt-16',
      autoClose: 1000,
        onClose: needRedirect ? () => {
            needRedirect(`/${path}`)
      } : ():void=>{} 
    })
  }