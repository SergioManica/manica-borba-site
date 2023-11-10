import { EnvelopeSimple, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import  BiancaImage  from "../assets/img-bianca.webp"
// import  AndreImage  from "../assets/img-andre.webp"


function Professionals() {
  return (
    <section className="professional-container">
      <h2 className="title-professionals">Profissionais</h2>
      <div className="separators"></div>
      <div className="professionals-img-container">
        <div className="professional-cards">
          <div className="professional-img">
            <img src={BiancaImage} alt="" />
          </div>
          <div className="basic-information">
            <ol className="identification">
              <li className="name">
                <strong>Bianca Viegas Manica</strong>
              </li>
              <li className="job-position">CEO e Sócio-Fundadora</li>
            </ol>
            <ul className="contact-information">
              <li className="information-line">
                <MapPin className="icons" size={21} />
                Porto Alegre/RS
              </li>
              <li className="information-line">
                <WhatsappLogo size={21} />
                (51)999792-9924
              </li>
              <li className="information-line">
                <EnvelopeSimple size={21} />
                bianca.adv@manicaborba.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Professionals;
