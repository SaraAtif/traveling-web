import { LiaFacebookF } from "react-icons/lia";
import { IoLogoTwitter } from "react-icons/io";
import Image from "next/image";
import insta from "../../../public/insta.logo.webp";
import buttons from "../../../public/buttons.webp"

export default function Footer(){
    return(
            <footer className="text-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mr-6">
      <h1 className="m-5 mt-1 text-black text-5xl font-samibold ">Jadoo.</h1>
      <p className="mt-2 text-sm p-2 text-gray-500">
        Book your trip in minute, get full control for much longer.
      </p>
    </div>
    <div className="flex-grow  flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center flex">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mr-6">
        <h2 className="title-font font-bold text-black tracking-widest text-xl mb-5">
          Company
        </h2>
        <nav className="list-none font-samibold">
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">About</a>
          </li>
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">Careers</a>
          </li>
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">Mobile</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mr-6">
        <h2 className="title-font font-bold text-black tracking-widest text-xl mb-5">
          Contact
        </h2>
        <nav className="list-none font-samibold">
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">Help/FAQ</a>
          </li>
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">Press</a>
          </li>
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">Affilates</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mr-6">
        <h2 className="title-font font-bold text-black tracking-widest text-xl mb-5">
          More
        </h2>
        <nav className="list-none font-samibold">
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">AirlineFees</a>
          </li>
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">Airline</a>
          </li>
          <li className="mb-3">
            <a className="text-gray-900 hover:text-gray-800">Low fare tips</a>
          </li>
          
        </nav>
      </div>
      
    </div>
    <div >
      <div className="inline-flex ml-9">
      <LiaFacebookF className="rounded-full text-gray-700 mt-6 mr-4" />
      <Image src={insta} alt="insta" width={350} height={350}
      className="w-16 h-16 mt-0 mr-4">

      </Image>
      <IoLogoTwitter className="rounded-full text-gray-700 mt-6 " />
      </div>
      <div>
        <h1 className="text-gray-700 text-2xl ml-6">Discover our app</h1>
        <Image src={buttons} alt="buttons" width={300} height={300}
        className="mr-10"></Image>
      </div>
      </div>
      
  </div>
  <div className="text-center mb-20 font-semibold">
        <p>All right reserved@jadoo.com</p>
      </div>
  
</footer>
    )
}