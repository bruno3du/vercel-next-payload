import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Confidentialite = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-container">
        <h1>Politique de confidentialité de Gongosa</h1>

        <div>
          <h2>Informations collectées</h2>
          <p>
            Lors de votre visite sur Gongosa.fr, nous pouvons recueillir
            certaines informations à l&apos;aide de cookies pour améliorer votre
            expérience utilisateur et pour des raisons analytiques.
          </p>
        </div>
        <div>
          <h2>Google Analytics</h2>
          <p>
            Nous utilisons Google Analytics pour comprendre comment nos
            visiteurs interagissent avec notre site. Google Analytics peut
            recueillir des informations telles que la durée de votre visite, les
            pages que vous consultez, votre emplacement approximatif, et le type
            d&apos;appareil que vous utilisez. Aucune de ces informations ne peut
            être utilisée pour vous identifier personnellement. Pour en savoir
            plus sur la manière dont Google utilise vos informations, veuillez
            visiter{" "}
            <Link href={"https://policies.google.com/privacy"} target="/blank">
              Google Privacy & Terms
            </Link>
            .
          </p>
        </div>
        <div>
          <h2>Vos droits</h2>
          <p>
            Vous avez le droit de demander l&apos;accès, la rectification ou la
            suppression de vos données personnelles. Pour toute demande ou
            question relative à la vie privée, veuillez nous contacter via notre
            [page de contact](lien-vers-la-page-de-contact).
          </p>
        </div>
        <div>
          <h2>Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment, donc veuillez la consulter
            régulièrement. Les changements et clarifications prendront effet
            immédiatement après leur publication sur le site web.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confidentialite;
