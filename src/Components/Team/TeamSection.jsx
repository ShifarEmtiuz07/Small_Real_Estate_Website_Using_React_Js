/* eslint-disable react/no-unknown-property */
import TeamTopText from "./TeamTopText";
import TeamMember from "./TeamMember"

import img1 from "../../assets/images/team/team-01.png"
import img2 from "../../assets/images/team/team-02.png"
import img3 from "../../assets/images/team/team-03.png"
import img4 from "../../assets/images/team/team-04.png"

export default function TeamSection() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* TeamTopText */}

            <TeamTopText />
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <TeamMember imgSrc={img1} name="Melissa Tatcher" expert="Marketing Expert"/>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <TeamMember imgSrc={img2} name="Stuard Ferrel" expert="Digital Marketer" />
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <TeamMember imgSrc={img3} name="Eva Hudson" expert="Creative Designer" />
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <TeamMember imgSrc={img4} name="Jackie Sanders" expert="Founder of Facebook" />
          </div>
        </div>
      </div>
    </section>
  );
}
