import React from "react";
import { BallCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className="h-100vh snap-center">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
        <StarsCanvas />
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
