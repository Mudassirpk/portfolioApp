import { useEffect, useState } from "react";

import Introduction from "./Introduction.jsx";
import Aboutme from "./Aboutme.jsx";
import Skills from "./Skills";
import Works from "./Works";
import Work from "./Work.jsx";
import img from "./../../Images/lion.jpg";
import fetchProjects from "../../Helpers/fetchproject.js";
function Main() {
  const [projects, setProjects] = useState([]);
  
  async function settingProjects() {
    setProjects(await fetchProjects());
  }
  useEffect(() => {
    settingProjects();
  }, []);

  return (
    <main className="Box text__yellow text__lg">
      <Introduction />
      <Aboutme />
      <Skills />
      <Works>
        {projects !== null
          ? projects.map((project) => {
              return (
                <Work
                  img={project.img.asset.url}
                  title={project.title}
                  description={project.description}
                  key={project.img.asset._id}
                  postid={project._id}
                />
              );
            })
          : null}
      </Works>
    </main>
  );
}

export default Main;
