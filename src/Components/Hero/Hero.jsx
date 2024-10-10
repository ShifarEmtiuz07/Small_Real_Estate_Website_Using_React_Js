import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import "../../assets/css/tailwind.css"

export default function Hero() {
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <HeroContent />
          </div>

          <div className="w-full px-4">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}
