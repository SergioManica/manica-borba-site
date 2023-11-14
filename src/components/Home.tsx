import AboutUs from "./AboutUs";
import AreasOfExpertise from "./AreasOfExpertise";
import Header from "./Header";
import OurValues from "./OurValues";
import { ProfessionalsPage } from "./Professionals";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="slide-container">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>
          <button className="btn-services">Saiba mais</button>
          <nav className="slide-nav">
            <div className="icons-nav"></div>
            <div className="icons-nav"></div>
            <div className="icons-nav"></div>
            <div className="icons-nav"></div>
          </nav>
        </div>
      </section>
      <AboutUs />
      <OurValues />
      <ProfessionalsPage />
      <AreasOfExpertise/>
    </>
  );
}

export default Home;
