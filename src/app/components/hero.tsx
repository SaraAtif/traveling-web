import Image from "next/image";
import heroImage from "./image1.jpg"
import { AiFillPlayCircle } from "react-icons/ai";
const HeroPage=()=>{
    return(
      <div>
        
            <section className="text-gray-600 body-font mt-1 pt-1">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-fixed bg-cover bg-center custom-image ">
    
      
  
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-4 items-center mt-0 text-center">
    <h5 className="text-red-600 mb-4
    font-bold ">BEST DESTINATION AROUND THE WORLD</h5>
      <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
        Travel, enjoy
        <br className="hidden lg:inline-block" />
        and live a new
        <br className="hidden lg:inline-block" />
        and full life
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        
      </p>
      
      <div className="inline-flex justify-center">
        <button className=" text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 text-lg rounded-2xl">
          find out more
        </button>
        <button className="ml-4  text-gray-800 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-xl inline-flex text-lg">
        <AiFillPlayCircle className="text-red-700 mr-2 mt-2 "  />
          play Demo
        </button>
      </div>
      </div>
      <div className="w-[600px] h-[650px] flex justify-center mt-0 ">
        <Image src={heroImage} alt="travelling" width={350} height={350}>
            
        </Image>
      </div>
    
    
  </div>
</section>
</div>

        
    )
}
export default HeroPage;