import "./../../css/Main/Works.css";
import Work from "./Work.jsx";

function Works({ children }) {
  return (
    <section className="works">
      <h1 className="text__lg text__teal">Works</h1>
      <div className="works__grid">{children}</div>
    </section>
  );
}

export default Works;
