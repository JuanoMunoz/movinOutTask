import { useForm } from "react-hook-form";
import { User } from "../assets/Icons";
import { useState } from "react";
import { RegisterFormType } from "../types/App.d";
import useRegisterToApi from "../hooks/register";
export default function RegisterForm() {
  const [userRegister, setUserRegister] = useState<RegisterFormType | null>(
    null
  );
  console.log(userRegister);
  const { register, handleSubmit } = useForm<RegisterFormType>();
  useRegisterToApi(userRegister);
  const fillUserRegister = (data: RegisterFormType) => {
    setUserRegister(data);
  };
  return (
    <form
      onSubmit={handleSubmit(fillUserRegister)}
      className=" p-4 flex flex-col  justify-around lg:justify-center lg:gap-5 items-center w-80 md:w-[23rem] lg:w-[30rem] h-96 lg:h-[28rem] bg-gradient-to-tr from-white via-gray-100 to-white shadow-2xl"
    >
      <h3 className=" font-bold lg:mb-7 text-pretty text-xl">
        Create an{" "}
        <span className="bg-gradient-to-br bg-clip-text text-transparent from-purple-500 to-pink-400 via-violet-600">
          account
        </span>
      </h3>
      <div className="flex flex-col justify-center gap-3  items-center">
        <input
          id="nickname"
          className=" text-lg h-8 md:h-12 focus:outline-none border-4 p-3 rounded-lg w-full border-purple-400"
          placeholder="username..."
          type="text"
          {...register("nickname", {
            required: true,
          })}
        />
        <input
          id="email"
          className="text-lg h-8 md:h-12 focus:outline-none border-4 p-3 rounded-lg w-full border-purple-400"
          type="email"
          placeholder="email@mail.com..."
          {...register("email")}
        />
        <input
          id="password"
          className="text-lg h-8 md:h-12 focus:outline-none border-4 p-3 rounded-lg w-full  border-purple-400"
          placeholder="password..."
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        <button
          type="submit"
          className="w-full flex justify-center items-center rounded-lg md:mt-5 text-lg md:py-3 py-2 bg-purple-950 text-white hover:bg-purple-800 gap-2 transition-colors duration-300 font-bold font-serif"
        >
          <User></User>
          <span>sign up</span>
        </button>
      </div>
    </form>
  );
}
