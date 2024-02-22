import img from "../assets/pp0.png";

export default function Header() {
  return (
    <header className="w-5/6 py-20 h-full pt-36 mx-auto overflow-x-hidden flex max-xl:flex-col animate-[header_1.4s_forwards]">
      <div className="flex flex-col gap-3 max-xl:text-center">
        <p className="text-cyan-400 font-medium max-md:text-sm">
          Hi, my name is
        </p>
        <h2 className="text-[5.2rem] max-2xl:text-[4rem] text-gray-200 max-xl:text-4xl max-md:text-4xl max-sm:text-3xl animate-[opacity_1s_forwards]">
          Ali Uslu
        </h2>
        <h2 className="text-[4.9rem] max-2xl:text-[3.8rem] text-gray-400 max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
          I make ideas & things alive
        </h2>
        <p className=" text-4xl max-2xl:text-2xl font-light text-gray-300 max-md:text-xl max-sm:text-lg">
          As a dedicated{" "}
          <strong className="text-cyan-400 font-medium">
            front-end developer
          </strong>
          , I bring your projects to life with a passion for crafting immersive
          user experiences. Specializing in translating design concepts into
          interactive and visually stunning websites,
          <br /> I primarily leverage{" "}
          <strong className="text-cyan-400 font-medium">React</strong> and{" "}
          <strong className="text-cyan-400 font-medium">Tailwind CSS</strong> to
          breathe life into my projects.
        </p>
      </div>
      <img
        src={img}
        alt="logo"
        className=" object-cover w-[30rem] h-[30rem] max-xl:w-96 max-xl:h-96  max-xl:m-auto "
      />
    </header>
  );
}
