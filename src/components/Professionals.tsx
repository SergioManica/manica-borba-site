import { EnvelopeSimple, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import AndreImage from "../assets/img-andre.webp";
import BiancaImage from "../assets/img-bianca.webp";

export function ProfessionalsPage() {
  return (
    <>
      <section className="professional-container">
        <h2 className="title-professionals">Profissionais</h2>
        <div className="separators"></div>
        <Professionals
          photo={BiancaImage}
          name="Bianca Viegas Manica"
          position="CEO e Sócio-Fundadora"
          location="Porto Alegre/RS"
          phoneNumber="(51) 99792-9924"
          email="bianca@manicaborba.com"
        />
        <div className="separators"></div>
        <Professionals
          photo={AndreImage}
          name="André Luiz Borba Oliveira"
          position="CEO e Sócio-Fundador"
          location="Porto Alegre/RS"
          phoneNumber="(51) xxxx-xxxx"
          email="andre@manicaborba.com"
        />
      </section>
    </>
  );
}
function Professionals({
  photo,
  name,
  position,
  location,
  phoneNumber,
  email,
}: {
  photo: string;
  name: string;
  position: string;
  location: string;
  phoneNumber: string;
  email: string;
}) {
  return (
      <div className="professionals-img-container">
        <div className="professional-cards">
          <div className="professional-img">
            <img src={photo} alt="" />
          </div>
          <div className="basic-information">
            <ol className="identification">
              <li className="name">
                <strong>{name}</strong>
              </li>
              <li className="job-position">{position}</li>
            </ol>
            <ul className="contact-information">
              <li className="information-line">
                <MapPin className="icons" size={21} />
                {location}
              </li>
              <li className="information-line">
                <WhatsappLogo className="icons" size={21} />
                {phoneNumber}
              </li>
              <li className="information-line">
                <EnvelopeSimple className="icons" size={21} />
                {email}
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default ProfessionalsPage;
