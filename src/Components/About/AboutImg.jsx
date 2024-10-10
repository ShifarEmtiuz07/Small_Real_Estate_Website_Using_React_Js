/* eslint-disable react/prop-types */
export default function AboutImg({imgSrc}){
    return (
        <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
        <img src={imgSrc} alt="about image"
          className="h-full w-full object-cover object-center" />
      </div>
    );
}