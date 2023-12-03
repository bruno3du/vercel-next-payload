import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="void" />
      <div className="void" />
      <div className="footer">
        <div className="footer-navigation">
          <Link href={"/"}>Accueil</Link>
          <Link href={"/Contact"}>Contact</Link>
          <Link href={"/Confidentialite"}>Confidentialité</Link>
          <Link href={"/CGU"}>CGU</Link>
        </div>
        {/* <a className="footer-social" href="https://www.instagram.com/gongosa.fr/" target="_blank">
          <Image
            src={"/logo-instagram.svg"}
            alt={"Logo représentant le réseau social Instagram"}
            width={24}
            height={24}
            loading="lazy"
          />
        </a> */}
        <p>
          Développé avec ❤️ par{" "}
          <a target="blank" href="https://primo-studio.fr">
            primo-studio.fr
          </a>{" "}
          - 100% made in Guyane{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
