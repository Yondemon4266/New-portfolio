import Title from "./Title";

export default function Project({ projet, index }: any) {
  function handleDivClick(url: string) {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1024) {
      window.open(url, "_blank");
    }
  }
  const isIndexPair = index % 2 === 0;

  return (
    <div
      className={`relative  w-full h-full flex flex-col max-lg:w-5/6 max-lg:m-auto group`}
    >
      <Title text={projet.title} isProject={true} />
      {/* left */}
      <a
        href={projet.link}
        target="_blank"
        className={`w-full flex ${
          isIndexPair
            ? "justify-start max-lg:justify-center"
            : "justify-end max-lg:justify-center"
        } 
        `}
      >
        <img
          src={projet.img}
          alt={projet.title}
          className="w-1/2 max-lg:w-full  max-lg:h-[25.5rem] max-md:h-fit rounded-lg "
        />
      </a>
      {/* eleft */}

      {/* eright */}
      <div
        onClick={() => handleDivClick(projet.link)}
        className={`absolute ${
          isIndexPair ? "right-10" : "left-10"
        } max-lg:invisible max-lg:opacity-0 max-lg:overflow-y-scroll max-lg:overflow-x-hidden max-lg:group-hover:visible max-lg:group-hover:opacity-100 max-lg:cursor-pointer  max-lg:duration-700 max-lg:w-full max-lg:h-full max-lg:translate-y-0 max-lg:left-0 max-lg:right-0 max-lg:top-0 max-lg:justify-center max-lg:bg-blue-950/[.85]  rounded-lg top-1/2 -translate-y-1/2 h-full w-1/2 flex flex-col gap-4 justify-center`}
      >
        <div
          className={` ${
            isIndexPair
              ? "self-end max-lg:self-center max-lg:text-center"
              : "self-start max-lg:self-center max-lg:text-center"
          }`}
        >
          <h4 className="text-cyan-400 text-xl max-lg:hidden">
            Featured project
          </h4>
          <h3 className="text-3xl text-gray-200 max-lg:hidden">
            {projet.title}
          </h3>
        </div>

        <div
          className={`

           shadow-md shadow-black bg-blue-950/[.85] max-lg:bg-transparent max-lg:shadow-none max-lg:text-sm max-md:text-xxs   h-fit flex items-center justify-center text-justify p-4 max-lg:p-0 max-lg:px-6 max-md:px-2 rounded-lg`}
        >
          <p>{projet.infos}</p>
        </div>

        <ul
          className={`uppercase text-gray-300 font-semibold flex gap-2 max-lg:text-xs ${
            isIndexPair
              ? "self-end max-lg:self-center"
              : "self-start max-lg:self-center"
          }`}
        >
          {projet.languages.map((lang: string, index: number) => (
            <li
              key={index}
              className="shadow-sm shadow-cyan-500 p-1 flex items-center max-lg:bg-blue-900 max-lg:shadow-cyan-700"
            >
              <p>{lang}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* eright */}
    </div>
  );
}
