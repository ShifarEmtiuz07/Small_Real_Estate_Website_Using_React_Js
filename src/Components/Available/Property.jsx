/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
export default function Property({name,price, size,imgsrc,Bedrooms,Bathrooms}){
    return (
        <div className="p-4 bg-white rounded-lg border border-gray-600/10">
  <img
    src={imgsrc}
    alt="property"/>

  <div className="p-6">
    <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
   
    <div className="mt-2">
    <p>  <span className="text-xl font-extrabold text-blue-600">{price} </span>{size}</p>  
    </div>

  </div>
  <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
    <div className="flex items-center">
      <svg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z">
        </path>
      </svg>
      <p><span className="font-bold text-gray-900">{Bedrooms}</span> Bedrooms</p>
    </div>
    <div className="flex items-center">
      <svg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path fill-rule="evenodd"
          d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z">
        </path>
      </svg>
      <p><span className="font-bold text-gray-900">{Bathrooms}</span> Bathrooms</p>
    </div>
  </div>
</div>
    );
}