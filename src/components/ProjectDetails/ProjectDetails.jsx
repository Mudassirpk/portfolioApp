import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Work from "../Main/Work";
import Works from "../Main/Works";
import "./../../css/projectDetails/ProjectDetails.css";
import fetchProjects from "../../Helpers/fetchproject";

function ProjectDetails() {
  const params = useParams();
  const [style, setStyles] = useState(false);
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState(null);

  async function findProject() {
    const projects = await fetchProjects();
    const foundProject = projects.find((project) => project._id === params.id);
    setProject(foundProject);
    setProjects(projects.filter((p) => p._id !== params.id));
  }

  useEffect(() => {
    window.scroll(0, 0);
    findProject();
    setTimeout(setStyles(true), 5000);
  }, [params.id]);

  return project ? (
    <>
      <section
        className="Box-appear projects__details"
        style={{ opacity: style ? 1 : 0 }}
      >
        <div className="post__img">
          <img src={project.img.asset.url} alt="project image" />
        </div>
        <h1 className="text__lg text__teal">{project.title}</h1>
        <p className="post__details text__green text__sm">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          className=" text__sm links bg__secondary"
        >
          Visit Site
        </a>
        {project.source ? (
          <a href="" className="text__red text__sm links bg__secondary">
            Source Code
          </a>
        ) : null}
      </section>
      <section className="Box">
        <Works>
          {projects !== null
            ? projects.map((p) => {
                return (
                  <Work
                    img={p.img.asset.url}
                    title={p.title}
                    description={p.description}
                    postid={p._id}
                    key={p._id}
                  />
                );
              })
            : null}
        </Works>
      </section>
    </>
  ) : null;
}

export default ProjectDetails;
