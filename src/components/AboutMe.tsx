import ListElement from "./ListElement";
import { SiExpress, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function AboutMe() {
  return (
    <>
      <p className="text-2xl font-light text-gray-300 max-md:text-xl max-sm:text-base text leading-8 max-md:leading-6 ">
        Hello! My name is Ali, and I'm passionate about{" "}
        <span className="text-cyan-400">technology</span>. I started my
        professional journey in the construction industry, where I gained
        valuable experience. However, my interest in computer science quickly
        took over. <span className="text-cyan-400">Eight months ago</span>, I
        decided to follow my passion and embark on a new adventure as a web
        developer. <br />
        <br />
        <span>
          {" "}
          My interest in <span className="text-cyan-400">
            web development
          </span>{" "}
          sparked during my studies in{" "}
          <span className="text-cyan-400">cyber security</span>. Since then,
          I've been{" "}
          <span className="text-cyan-400">
            dedicating my time to learning and refine my skills in web
            development with React.
          </span>{" "}
          Through online resources and self-directed learning, I've already
          completed several exciting projects. I'm proud to evolve daily as a
          self-taught web developer, exploring new technologies and tackling
          innovative projects.
          <br />
          <br />
        </span>
        My construction background has provided me discipline and{" "}
        <span className="text-cyan-400">problem-solving skills</span>, enhancing
        my journey in development. I'm now excited to contribute my web
        development skills to the digital world!
        <br />
        <br />
        Here are a few technologies I have been working with recently:
      </p>
      <ul className="md:grid grid-cols-3 md:grid-rows-3 flex flex-wrap items-center justify-center w-fit gap-y-3 gap-x-6 my-4 md:text-sm text-xs text-gray-300 uppercase font-semibold mx-auto">
        <ListElement text="Javascript">
          <IoLogoJavascript className="text-yellow-500 rounded-sm" />
        </ListElement>
        <ListElement text="TypeScript">
          <SiTypescript className="text-blue-600 bg-gray-200 rounded-sm" />
        </ListElement>
        <ListElement text="React">
          <FaReact className="text-cyan-300 rounded-sm" />
        </ListElement>
        <ListElement text="Node.js">
          <FaNodeJs className="text-green-500 rounded-sm" />
        </ListElement>
        <ListElement text="Tailwindcss">
          <SiTailwindcss className="text-cyan-400 rounded-sm" />
        </ListElement>
        <ListElement text="Express">
          <SiExpress className="text-black bg-white rounded-sm" />
        </ListElement>
        <ListElement text="NextJS">
          <img
            src="./next.svg"
            className="h-[14px] w-[14px]   rounded-full outline-none border-none"
          />
        </ListElement>
      </ul>
    </>
  );
}
