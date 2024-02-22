import { useState } from "react";
import Medias from "./Medias";
import Title from "./Title";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className=" flex flex-col items-center justify-center text-center">
      <Title text="Get In Touch" isProject={false} />
      <p className="text-gray-300 text-2xl max-lg:text-xl max-md:text-lg ">
        I'm actively seeking new opportunities and am eager to explore potential
        collaborations. Whether you have a proposal or just want to connect,
        feel free to reach out, and I'll be happy to discuss further!
      </p>

      <Medias />

      <CopyToClipboard
        text="Alisan4299@gmail.com"
        onCopy={() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1200);
        }}
      >
        <p className="relative text-gray-300 mt-20 text-2xl max-lg:text-xl max-md:text-lg cursor-pointer border-2 border-gray-200/[.75] p-1 rounded-md hover:text-gray-400 duration-300">
          Alisan4299@gmail.com
          {isCopied && (
            <span className="absolute -bottom-16 left-1/2  text-gray-200 opacity-75 animate-[copied_1s_forwards] border-2 rounded-lg p-1">
              Copied !
            </span>
          )}
        </p>
      </CopyToClipboard>

      <p className=" text-gray-300 mt-20 text-2xl max-lg:text-xl max-md:text-lg ">
        Designed & built by YondeCode
      </p>
    </div>
  );
}
