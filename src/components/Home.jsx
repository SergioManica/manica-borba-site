import Header from "./Header";

function Home() {
  return (
    <section className="home">
      <Header />
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
  );
}

export default Home;
