import "../../assets/css/tailwind.css"
import FeatureContent from "./FeatureContent";
import FeatureSvg from "./FeatureSvg";

export default function FeatureSection() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <FeatureContent />
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <FeatureSvg />
        </div>
      </div>
    </section>
  );
}
