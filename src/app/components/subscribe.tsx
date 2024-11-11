import { AiOutlineMail } from "react-icons/ai";


export default function Subscribe(){
    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center mb-12 px-44">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-6 text-gray-900">
        Subscribe to get information, latest news and other interesting offers about Cobham
      </h1>
     
    </div>
    <div className="flex lg:w-2/3 sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 justify-center">
      
      
    <AiOutlineMail />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="w-96 h-14 p-3 bg-gray-100 bg-opacity-50 rounded-lg focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1  leading-8 transition-colors duration-200 ease-in-out"
           />
      
      <button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded-xl text-lg h-14 p-3">
        Subscribe
      </button>
    </div>
  </div>
</section>

            
            
        </div>
    )
}