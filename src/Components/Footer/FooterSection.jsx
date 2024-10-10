import FirstContent from "./FirstContent";
import FourthContent from "./FourthContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";

export default function FooterSection() {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <FirstContent />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <SecondContent />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <ThirdContent />
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <FourthContent />
          </div>
        </div>
      </div>
    </footer>
  );
}
