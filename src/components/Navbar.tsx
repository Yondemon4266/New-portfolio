import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/ai";

export default function Navbar({ navVisible }: { navVisible: boolean }) {
  // WHEN SMALL SCREEN
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  // END SMALL SCREEN

  return (
    <nav
      onBlur={() => setShowBurgerMenu(false)}
      className={`${
        navVisible ? "visible" : "invisible -translate-y-full"
      } z-50 fixed w-full duration-300 h-20 bg-inherit shadow-md shadow-sky-900  flex justify-between items-center px-16 max-md:px-6 max-md:h-12 text-sm font-light`}
    >
      <a
        href="#home"
        className="italic text-lg font-mono max-md:text-sm animate-[opacity2_1.4s_forwards] "
      >
        Ali Uslu
      </a>
      <div className="flex flex-row gap-6 items-center max-md:hidden">
        <a
          href="#about"
          className="hover:text-cyan-400 animate-[nav1_0.3s_forwards]"
        >
          About
        </a>
        <a
          href="#work"
          className="hover:text-cyan-400 animate-[nav1_0.6s_forwards] "
        >
          My Projects
        </a>
        <a
          href="#contact"
          className="hover:text-cyan-400 animate-[nav1_0.9s_forwards]"
        >
          Contact
        </a>
        <a
          href="./CV_ALI_FRONTDEV_ALTERN.pdf"
          target="_blank"
          className="border-2 border-cyan-400 p-2 text-cyan-400 rounded-md hover:bg-cyan-700 hover:text-cyan-100 animate-[nav1_1.2s_forwards]"
        >
          Resume
        </a>
      </div>
      <button
        type="button"
        className="hidden z-50 max-md:flex"
        onClick={() => setShowBurgerMenu((prev) => !prev)}
      >
        {!showBurgerMenu && (
          <RxHamburgerMenu size={32} className="text-cyan-500" />
        )}
        {showBurgerMenu && (
          <AiOutlineMinus size={32} className="text-cyan-500" />
        )}
      </button>

      <div
        className={`${
          showBurgerMenu ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-0 w-5/6 h-screen z-40 shadow-sm shadow-cyan-500 transition-all duration-500`}
        style={{ backgroundColor: "rgb(11, 25, 47,0.9)" }}
      >
        {" "}
        <div className="flex w-full h-full flex-col gap-6 items-center justify-center text-lg">
          <a href="#about" className="hover:text-cyan-400 duration-200 h-8">
            About Me
          </a>
          <a href="#work" className="hover:text-cyan-400 duration-200 h-8">
            My Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 duration-200 h-8">
            Contact
          </a>

          <a
            href="./CV_ALI_FRONTDEV_ALTERN.pdf"
            target="_blank"
            className="border-2 border-cyan-400 p-2 text-cyan-400 rounded-md hover:bg-cyan-700 hover:text-cyan-100 animate-[nav1_1.2s_forwards]"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
