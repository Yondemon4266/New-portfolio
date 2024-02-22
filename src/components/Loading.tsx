export default function Loading() {
  return (
    <div
      style={{ backgroundColor: "#071120", overflow: "hidden" }}
      className="w-screen h-screen animate-[opacity_3.6s_forwards]"
    >
      <div className="w-full h-full flex items-center justify-center gap-1 animate-[exitLoading_3.2s_forwards]">
        <div className="hexagone animate-[y_1s_ease_forwards] ">
          <p className="letter">Y</p>
        </div>
        <div className="hexagone animate-[n_2.6s_ease_forwards]">
          {" "}
          <p className="letter">N</p>
        </div>
        <div className="hexagone animate-[o_2.6s_ease_forwards]">
          {" "}
          <p className="letter">O</p>
        </div>
        <div className="hexagone animate-[d_1s_ease_forwards]">
          {" "}
          <p className="letter">D</p>
        </div>
        <div className="hexagone animate-[e_1s_ease_forwards]">
          {" "}
          <p className="letter">E</p>
        </div>
      </div>
    </div>
  );
}
