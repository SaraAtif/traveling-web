import Link from "next/link";

const Navbar =()=>{
    return(
        <div className="">
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-3xl font-bold">jadoo</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-20 hover:text-gray-900">Destinations</Link>
      <Link href={"#"} className="mr-20 hover:text-gray-900">Hotels</Link>
      <Link href={"#"} className="mr-20 hover:text-gray-900">Flights</Link>
      <Link href={"#"} className="mr-20 hover:text-gray-900">Bookings</Link>
      <Link href={"#"} className="mr-20 hover:text-gray-900">Login</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3  focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Sign up
      
    </button>
  </div>
</header>

        </div>
    )
}

export default Navbar;