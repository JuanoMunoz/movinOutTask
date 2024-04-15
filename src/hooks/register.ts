import { RegisterFormType, API, ApiResponse } from "../types/App.d";
import { useRef, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast,successToast } from "../logic";
export default function useRegisterToApi(
  userRegister: RegisterFormType | null
) {
  const navigate = useNavigate()
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetch(`${API.API_ROOT}users/register`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(userRegister)
    }).then((res) => res.json()).then((data: ApiResponse) => {
      data.status == 500 ? errorToast(data.items.msg) : successToast(data.items.msg,navigate,'login')
    });


  }, [userRegister,navigate]);
}
