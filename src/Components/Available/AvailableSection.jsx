/* eslint-disable react/no-unknown-property */
import Img1 from "../../assets/images/avail/Img1.avif";
import Img2 from "../../assets/images/avail/Img2.avif";
import Img3 from "../../assets/images/avail/Img3.avif";
import Img6 from "../../assets/images/avail/Img6.avif";
import Img7 from "../../assets/images/avail/Img7.avif";
import "../../assets/css/tailwind.css";
import Property from "./Property";
export default function AvailableSection() {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Property Item 1 --> */}
          <Property 
          name="Modern Design villa"
          price="$3000.00"
          size="/M"
          imgsrc={Img1}
          Bedrooms="2"
          Bathrooms="1"
          
          />

          {/* <!-- Property Item 1 --> */}
          {/* property-----2------- */}

          <Property 
          name="Modern Design villa"
          price="$5000.00"
          size="/M"
          imgsrc={Img2}
          Bedrooms="3"
          Bathrooms='2'
          />
          {/* property-----2------- */}
          

          {/* <!-- Property Item 3 --> */}
          
          <Property 
          name="Modern Design villa"
          price="$6000.00"
          size="/L"
          imgsrc={Img3}
          Bedrooms="4"
          Bathrooms='2'
          />

          {/* <!-- Property Item 3 --> */}

          {/* <!-- Property Item 4 --> */}
          <Property 
          name="Modern Design villa"
          price="$2000.00"
          size="/S"
          imgsrc={Img6}
          Bedrooms="5"
          Bathrooms='3'
          
          />

          
          {/* <!-- Property Item 4 --> */}

           {/* <!-- Property Item 5 --> */}


           <Property 
          name="Modern Design villa"
          price="$10000.00"
          size="/L"
          imgsrc={Img7}
          Bedrooms="3"
          Bathrooms='1'
          />

             {/* <!-- Property Item 5 --> */}
         
        </div>
      </div>
    </section>
  );
}
