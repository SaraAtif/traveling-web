import Image from "next/image";
import service from "../../../public/service1.jpg"
import flight from "../../../public/aeroplane.png"
import mic from "../../../public/mic.jpeg"
import setting from "../../../public/setting.png"

export default function Services() {
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h5 className="text-gray-700 font-semibold">CATEGORY</h5>
                    <h1 className="sm:text-3xl text-8xl font-bold title-font text-gray-900 mb-4">
                        We Offer Best Services
                    </h1>


                </div>
                <div className="inline-flex sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-7 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <Image src={service} alt="weather" width={350} height={350}></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                calculated weather
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor!
                            </p>

                        </div>
                    </div>
                    <div className="p-7 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <Image src={flight} alt="flights" width={350} height={350}></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Best Flights
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor!
                            </p>

                        </div>
                    </div>
                    <div className="p-7 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <Image src={mic} alt="mic" width={350} height={350}></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Local Events
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor!
                            </p>

                        </div>
                    </div>
                    <div className="p-7 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <Image src={setting} alt="customize" width={350} height={350}></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Customization
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}