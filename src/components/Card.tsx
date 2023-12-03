import { Event, Media, Place } from "@/payload-types";
import Image from "next/image";

interface CardProps {
  eventTitle: Event["eventName"];
  eventPrice: Event["eventPrice"];
  placeName?: Place;
  date: Event["dateStart"];
  hour: Event["dateStart"];
  image: Media;
}

const Card = ({
  eventTitle,
  eventPrice,
  placeName,
  date,
  hour,
  image,
}: CardProps) => {
  // const handleClick = () => {
  //   let objCalendar = {};
  //   if (!imgOpen) {
  //     setImgOpen(!imgOpen);
  //     setImgDetail(card.eventimg.url);

  //     objCalendar = {
  //       type: !type.id ? card.eventtype : type.data.type,
  //       location: card.eventlocation,
  //       name: card.eventtitle,
  //       start: newStart,
  //       end: newEnd,
  //       position,
  //       title: card.eventtitle,
  //       price: card.eventprice,
  //     };
  //   }
  //   setInfosCalendar(objCalendar);
  // };
  console.log(image, "image");
  return (
    <>
      <div
        className="card"
        // onClick={handleClick}
      >
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt ?? "image"}
            title={image.alt ?? "image"}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        )}

        <div className="card-content">
          <div className="line1">
            <p>{eventTitle}</p> <span>{eventPrice ?? "Free"}</span>
          </div>
          <div className="line2">
            <span className="date">
              <Image
                src={"/icone-calendrier.svg"}
                alt="icone illustrant la date de l'événement"
                width={24}
                height={24}
                loading="lazy"
              />
              <p>{date}</p>
            </span>
            <span className="hour">
              <Image
                src={"/icone-horloge.svg"}
                alt="icone illustrant l'heure' de l'événement"
                width={24}
                height={24}
                loading="lazy"
              />
              <p>{hour}</p>
            </span>
          </div>
          <div className="line3">
            <Image
              src={"/icone-location.svg"}
              alt="icone illustrant le lieu de l'événement"
              width={24}
              height={24}
              loading="lazy"
            />
            <p>{placeName?.place ?? "Non-défini"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
