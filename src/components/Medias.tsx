import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Medias() {
  return (
    <ul className={`mt-10 flex gap-10  animate-[opacity2_2.1s_forwards]`}>
      <li className="  text-5xl hover:scale-110 hover:text-cyan-400 duration-300">
        <a href="https://github.com/Yondemon4266" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="text-5xl hover:scale-110 hover:text-cyan-400 duration-300">
        <a
          href="https://www.linkedin.com/in/ali-uslu-developpeur/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
}
