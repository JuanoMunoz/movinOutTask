import { RegisterFormType, API } from "../types/App.d";
import { useRef, useEffect, } from "react";
export default function useRegisterToApi(
  userRegister: RegisterFormType | null
) {
  const firstRender = useRef<boolean>(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetch(API.API_ROOT + "users", { method: 'GET' }

      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userRegister),
    ).then((res) => console.log(res));


  }, [userRegister]);
}
