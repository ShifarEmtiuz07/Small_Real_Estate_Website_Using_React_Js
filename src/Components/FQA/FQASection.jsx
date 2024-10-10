import FQATopText from "./FQATopText";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import FQASvg from "./FQASvg"

export default function FQASection() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <FQATopText />
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FirstRow />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SecondRow />
          </div>
        </div>
      </div>
      <div>
        <FQASvg />
      </div>
    </section>
  );
}
