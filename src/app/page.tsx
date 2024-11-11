import Destination from "./components/destination";
import HeroPage from "./components/hero";
import Services from "./components/services";
import Subscribe from "./components/subscribe";


export default function Home() {
  return (
    <div>
      <HeroPage/>
      <Services/>
      <Destination/>
      <Subscribe/>
    </div>
  );
}
