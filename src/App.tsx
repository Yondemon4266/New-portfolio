import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import { projectsData } from "./data/projectsData.js";
import Footer from "./components/Footer.js";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setLoading(false);
    }, 3700);

    return () => clearTimeout(fakeLoading);
  }, []);

  function handleNavScroll(e: any) {
    if (e.deltaY > 0) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div
        onWheel={handleNavScroll}
        className=" w-screen h-screen font-primary text-white overflow-x-hidden overflow-y-scroll scroll-smooth"
        style={{ backgroundColor: "#0B192F" }}
      >
        <Navbar navVisible={navVisible} />

        <Header />
        <main className=" py-6 mx-auto w-5/6 flex flex-col gap-8">
          <section id="about" className="w-full">
            <Title text="About Me" isProject={false} />
            <AboutMe />
          </section>
          <Title text="My Projects" isProject={false} />
        </main>
        <section id="work" className="w-full flex flex-col  gap-24 px-8">
          {projectsData.map(({ ...project }, index: number) => {
            return <Project key={project.id} projet={project} index={index} />;
          })}
        </section>
        <footer
          id="contact"
          className="my-24 h-full w-3/5 max-lg:w-4/5 m-auto flex items-center justify-center p-10 max-lg:p-6 max-md:-p-4 shadow-2xl shadow-cyan-800 rounded-xl"
        >
          <Footer />
        </footer>
      </div>
    );
  }
}
