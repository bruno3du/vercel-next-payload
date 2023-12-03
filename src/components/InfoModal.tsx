import Image from "next/image";

const InfoModal = ({ open, setOpen }: any) => {
  return (
    <div className="modal-container">
      <div className="modal-title">
        <h3>
          Installez l'appli Gongosa depuis le menu du navigateur (Google Chrome
          uniquement)
        </h3>
        <Image
          src={"/icone-close.svg"}
          alt="icone pour fermer la modale"
          width={24}
          height={24}
          loading="lazy"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="modal-mobile">
        <div>
          <Image
            src={"/pwa-dl/west-event-screen-telechargement-pwa-mobile1.jpg"}
            alt="screen expliquant le téléchargement de la PWA sur mobile"
            width={150}
            height={350}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src={"/pwa-dl/west-event-screen-telechargement-pwa-mobile2.jpg"}
            alt="screen expliquant le téléchargement de la PWA sur mobile"
            width={150}
            height={350}
            loading="lazy"
          />
        </div>
      </div>
      <div className="modal-desktop">
        <div>
          <Image
            src={"/pwa-dl/west-event-screen-telechargement-pwa-desktop1.png"}
            alt="screen expliquant le téléchargement de la PWA sur desktop"
            width={650}
            height={350}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src={"/pwa-dl/west-event-screen-telechargement-pwa-desktop2.png"}
            alt="screen expliquant le téléchargement de la PWA sur desktop"
            width={650}
            height={350}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
