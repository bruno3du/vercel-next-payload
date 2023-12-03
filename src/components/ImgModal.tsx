import Image from "next/image";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import allMonths from "./item/Month";

const ImgModal = ({ imgOpen, setImgOpen, imgDetail, infosCalendar }: any) => {
  let date = infosCalendar.start.split(" ")[0];
  let hour = infosCalendar.start.split(" ")[1];

  allMonths.map((ele) => {
    if (ele.digit === date.split("/")[1]) {
      date = `${date.split("/")[0]} ${ele.month} ${date.split("/")[2]}`;
    }
  });

  hour = `${hour.split(":")[0]}h${
    hour.split(":")[1] === "00" ? "" : hour.split(":")[1]
  }`;

  return (
    <div className="modal-container">
      <div className="modal-title img">
        <Image
          src={"/icone-close.svg"}
          alt="icone pour fermer la modale"
          width={36}
          height={36}
          loading="lazy"
          onClick={() => setImgOpen(!imgOpen)}
          style={{
            cursor: "pointer",
            fill: "#FFFF",
            background: "#0C1029",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
      </div>
      <div
        className="img-detail"
        style={{
          background: `url(${imgDetail}) no-repeat`,
        }}
      />
      <div className="infos">
        <div className="event-description">
          <span className="event-name">
            <p>{infosCalendar.name}</p>
          </span>
          <span className="event-price">
            <p>{infosCalendar.price}</p>
          </span>
          <span className="event-date">
            <Image
              src={"/icone-calendrier.svg"}
              alt="icone illustrant la date de l'événement"
              width={24}
              height={24}
              loading="lazy"
            />
            <p>{infosCalendar.start.split("-")[0]}</p>
          </span>
          <span className="event-hour">
            <Image
              src={"/icone-horloge.svg"}
              alt="icone illustrant l'heure' de l'événement"
              width={24}
              height={24}
              loading="lazy"
            />
            <p>{infosCalendar.start.split("-")[1]}</p>
          </span>
        </div>
        <span className="event-type">
          <Image
            src={"/logo-type-event.svg"}
            alt={"logo représentant la catégorie de l'évènement"}
            width={24}
            height={24}
            loading="lazy"
          />
          <p>{infosCalendar.type ? infosCalendar.type : "Non-défini"}</p>
        </span>
        <div className="calendar">
          {/*.calendar = span pour le partage sur d'autres réseaux*/}
          <FacebookShareButton
            url={"https://www.gongosa.com"}
            quote={`Retrouvez '${infosCalendar.name}' et d'autres évènements sur Gongosa`}
            // hashtag="#test"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton
            url={"https://www.gongosa.com"}
            title={`Retrouvez '${infosCalendar.name}' et d'autres évènements sur Gongosa`}
            separator={" - "}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TwitterShareButton
            url={"https://www.gongosa.com"}
            title={`Retrouvez '${infosCalendar.name}' et d'autres évènements sur Gongosa`}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <button className="location">
          <a
            href={`https://google.fr/maps/place/${
              infosCalendar.position.data
                ? infosCalendar.position.data.place_location.latitude
                : 0
            }+${
              infosCalendar.position.data
                ? infosCalendar.position.data.place_location.longitude
                : 0
            }`}
            target="_blank"
          >
            <Image
              src={"/logo-location.svg"}
              alt={
                "logo représentant la redirection vers un service en ligne indiquant la localisation de l'évènement"
              }
              width={24}
              height={24}
              loading="lazy"
            />
            <p>Localisation</p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ImgModal;
