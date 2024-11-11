import Image from "next/image";
import rome from "../../../public/rome.jpg"
import london from "../../../public/london.jpeg"
import europe from "../../../public/europe.webp"
import { FaLocationArrow } from "react-icons/fa";

export default function Destination(){
    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
                    <h5 className="text-gray-700 font-semibold">Top Selling

                    </h5>
                    <h1 className="sm:text-3xl text-8xl font-bold title-font text-gray-900 mb-4">
                        Top Destinations
                    </h1>


                </div>
    <div className="flex flex-wrap justify-between -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4  w-full  ">
        <a className="block relative h-48 rounded-t-3xl  overflow-hidden">
          <Image
            alt="rome"
            className="object-cover object-center w-full h-full block "
            src={rome} width={150} height={150}
          />
        </a>
        <div className="mt-4 gap-36 inline-flex font-semibold">
          
          <h2 className="text-gray-900 title-font text-lg">
            Rome,Italy
          </h2>
          
          <p className="">$5,42k</p>
          </div>
          <div className="mt-2 inline-flex">
          <FaLocationArrow className="mt-1 mr-2"/>
            <p className="font-semibold">10 Days Trip</p>
          </div>
        
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  ">
        <a className="block relative h-48 rounded-t-3xl  overflow-hidden">
          <Image
            alt="london"
            className="object-cover object-center w-full h-full block "
            src={london} width={150} height={150}
          />
        </a>
        <div className="mt-4 gap-36 inline-flex font-semibold">
          
          <h2 className="text-gray-900 title-font text-lg">
            London,UK
          </h2>
          
          <p className="">$4.2k</p>
          </div>
          <div className="mt-2 inline-flex">
          <FaLocationArrow className="mt-1 mr-2"/>
            <p className="font-semibold">12 Days Trip</p>
          </div>
        
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  ">
        <a className="block relative h-48 rounded-t-3xl  overflow-hidden">
          <Image
            alt="europe"
            className="object-cover object-center w-full h-full block "
            src={europe} width={150} height={150}
          />
        </a>
        <div className="mt-4 gap-36 inline-flex font-semibold">
          
          <h2 className="text-gray-900 title-font text-lg">
            Full Europe
          </h2>
          
          <p className="">$15k</p>
          </div>
          <div className="mt-2 inline-flex">
          <FaLocationArrow className="mt-1 mr-2"/>
            <p className="font-semibold">28 Days Trip</p>
          </div>
        
      </div>
      
    </div>
  </div>
</section>

        </div>
    )
}