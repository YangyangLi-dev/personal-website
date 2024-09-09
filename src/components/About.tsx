import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

export const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64"/>
        <article>
            <SectionTitle text="keep learning, smart learning"/>
          <p className="text-slate-600 mt-8 leading-loose">Full Stack</p>
        </article>
      </div>
    </section>
  );
};
