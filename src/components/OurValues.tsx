import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OurValues() {
  return (
    <section className="our-values-section">
      <div className="cards-container">
        <h2 className="our-values-title">NOSSOS VALORES</h2>
        <div className="cards">
          <div className="icons">
            <FontAwesomeIcon icon={faPeopleGroup} />
          </div>
          <div className="text-about-values">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            corporis dicta nobis optio dolor eos iusto
          </div>
        </div>
        <div className="cards">
          <div className="icons">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="text-about-values">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            corporis dicta nobis optio dolor eos iusto
          </div>
        </div>
        <div className="cards">
          <div className="icons">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="text-about-values">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            corporis dicta nobis optio dolor eos iusto
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
