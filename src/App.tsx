import { Header } from "./layouts/Header";
import { Home } from "./layouts/Home";
import { Skills } from "./components/Skills";
import { Services } from "./layouts/Services";
import { WhoIAm } from "./layouts/WhoIAm";
import { Projects } from "./layouts/Projects";
// import { Testimonies } from "./layouts/Testimonies";
import { Contact } from "./layouts/Contact";
import { ButtonBackHome } from "./components/ButtonBackHome";

export function App() {
  return(
    <div className="relative">
      <Header />
      <Home />
      <Skills />
      <WhoIAm />
      <Services />
      <Projects />
      {/* <Testimonies /> */}
      <Contact />
      <ButtonBackHome />
    </div>
  )
}