import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import WednesdayCanvas from "./canvas/wednesday";
import HandCanvas from "./canvas/hand";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[#339941] h-100 bg-cover bg-no-repeat bg-center">
    <section className={`relative w-full h-screen mx-auto`}>
    
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col j ustify-center items-center mt-5">
        
          <div  className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-primary">Satyam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

    </section>
    </div>
  );
};
// 
// <HandCanvas/>
export default Hero;
