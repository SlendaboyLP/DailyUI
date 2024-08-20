import Image from "next/image";
import NavButton from "./NavButton";
export default function Navigation() {
  return (
    <nav className="w-screen h-20  flex items-center justify-between p-4 fixed">
      <div>
        <p
          className="font-black text-5xl select-none cursor-pointer "
          onClick={() => (window.location.href = "/03landingpage")}
        >
          ALEXANDER ZEITLHOFER
        </p>
      </div>
      <div className="flex w-1/4 justify-between">
        <NavButton value="Über mich" link="03landingpage/#about"></NavButton>
        <NavButton value="Projekte" link="03landingpage/projects"></NavButton>
        <NavButton value="Kontakt" link="03landingpage/contact"></NavButton>
      </div>
    </nav>
  );
}
