"use client";
import "./style.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useEffect, useRef } from "react";

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eyeRef.current) {
      if (isVisible) {
        eyeRef.current.classList.add("opened");
        eyeRef.current.classList.remove("closed");
      } else {
        eyeRef.current.classList.add("closed");
        eyeRef.current.classList.remove("opened");
      }
    }
  }, [isVisible]);
  return (
    <div className="bg-gradient-to-tr from-white to-blue-300 w-screen h-screen flex justify-center items-center ">
      <div className="signup w-1/4 h-1/2 bg-white rounded-md p-4">
        <div className="flex justify-center w-full h-24">
          <div className="eye" ref={eyeRef}>
            <div className="pupil"></div>
          </div>
        </div>

        <form className="mt-4 space-y-4 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="john.doe@mail.com"
            className="border-2 w-full rounded-md p-2"
          />
          <div className="w-full flex items-center">
            <input
              type={isVisible ? "text" : "password"}
              name=""
              id=""
              placeholder="yourpassword"
              className="border-2 w-10/12 rounded-md p-2"
            />
            <div
              className="cursor-pointer w-2/12 flex justify-center"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <VisibilityIcon /> : <VisibilityOff />}
            </div>
          </div>

          <input
            type="submit"
            value="Login"
            className="border-2 w-full rounded-md p-2 cursor-pointer hover:bg-slate-300"
          />

          <div className="w-full h-12 flex justify-evenly">
            <div className="circle rounded-full bg-white border-black border-2 w-12 h-12"></div>
            <div className="circle rounded-full bg-white border-black border-2 w-12 h-12"></div>
            <div className="circle rounded-full bg-white border-black border-2 w-12 h-12"></div>
            <div className="circle rounded-full bg-white border-black border-2 w-12 h-12"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
