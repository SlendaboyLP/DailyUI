"use client";
import Image from "next/image";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import StartPage from "./StartPage";

export default function LandingPage() {
  return (
    <>
      <div className="-z-50 h-screen w-screen bg-gradient-to-tr from-purple-400 to-cyan-300   fixed bg-fixed "></div>
      <main className="w-screen h-screen flex flex-col">
        <Navigation></Navigation>

        <div className="p-4 flex ">
          <div id="startpage" className="w-3/5 h-full mt-20">
            <StartPage></StartPage>
          </div>
          <div className="w-2/5 flex justify-center mt-20">
            <img
              src={"/alex_nobg_edited.png"}
              alt="Picture of me"
              className="h-5/6 rounded-md"
            ></img>
          </div>
        </div>
      </main>
    </>
  );
}
