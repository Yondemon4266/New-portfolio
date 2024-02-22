export default function Title({
  text,
  isProject,
}: {
  text: string;
  isProject: boolean;
}) {
  return (
    <div
      className={`flex flex-row items-center gap-2 mb-16 ${
        isProject
          ? "hidden max-lg:flex max-lg:absolute  left-1/2 -top-14 -translate-x-1/2"
          : ""
      }`}
    >
      <h2
        className={`w-fit text-gray-200   ${
          isProject
            ? "text-center max-xl:text-lg  max-md:text-lg max-sm:text-base"
            : "text-5xl max-lg:text-2xl"
        }`}
      >
        {text}
      </h2>
      <div
        className={` h-[1px] flex-1 bg-blue-400/[.15] ${
          isProject ? "hidden" : ""
        }`}
      />
    </div>
  );
}
