/* eslint-disable react/prop-types */
export default function AboutImg2({imgSrc}){
    return (
        <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
        <img src={imgSrc} alt="about image"
          className="h-full w-full object-cover object-center" />
      </div>
    );
}