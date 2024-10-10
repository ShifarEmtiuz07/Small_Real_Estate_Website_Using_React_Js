import CTASvg1 from "./CTASvg1";
import CTASvg2 from "./CTASvg2";
import CTAText from "./CTAText";

export default function CTASection() {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <CTAText />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <CTASvg1 />
        </span>
        <span className="absolute bottom-0 right-0">
          <CTASvg2 />
        </span>
      </div>
    </section>
  );
}
