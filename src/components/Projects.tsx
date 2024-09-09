import { projects } from "../data";
import { ProjectCard } from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web development" />
      <div>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
