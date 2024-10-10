
import Img1 from "../../assets/images/about/about-image-01.jpg";
import Img2 from "../../assets/images/about/about-image-02.jpg";

import AboutContent from "./AboutContent";
import AboutExp from "./AboutExp";
import AboutImg from "./AboutImg";
import AboutImg2 from "./AboutImg2";
import AboutSvg from "./AboutSvg";

export default function AboutSection() {
  return (
    <section
    id="about"
    className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
  >
    <div className="container">
      
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <AboutContent />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <AboutImg imgSrc={Img1} />
              </div>

              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <AboutImg2 imgSrc={Img2} />

                <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                  <AboutExp />
                  <AboutSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  </section>
  );
}
