import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import TypeWritterCustom from "@/components/TypeWritterCustom";
import { Media, Place } from "@/payload-types";
import getPayloadClient from "@/payload/payloadClient";

export default async function Home() {
  const client = await getPayloadClient();
  const getEvents = await client.find({
    collection: "events",
  });
  const events = getEvents.docs;

  return (
    <main>
      {/* Metadata pour les partage sur les autres réseaux */}

      <Navbar />
      <div
        className="page-container"
        //   onClick={handleClick}
      >
        <h1 className="page-title">
          Le concentré des <TypeWritterCustom /> de l&apos;Ouest Guyanais,
          rassemblé en un seul endroit
        </h1>
        <div className="event-container">
          <div className="cards-container">
            {events.map((event) => (
              <Card
                key={event.id}
                date={event.dateStart}
                hour={event.dateEndHour}
                eventTitle={event.eventName}
                placeName={event.eventLocation as Place}
                eventPrice={event.eventPrice as number}
                image={event.eventImg as Media}
                // imgOpen={imgOpen}
                // setImgOpen={setImgOpen}
                // setImgDetail={setImgDetail}
                // setInfosCalendar={setInfosCalendar}
              />
            ))}
          </div>
        </div>
      </div>
      {/* {imgOpen ? (
        <ImgModal
          imgOpen={imgOpen}
          setImgOpen={setImgOpen}
          imgDetail={imgDetail}
          infosCalendar={infosCalendar}
        />
      ) : null} */}
      {/* <Footer /> */}
    </main>
  );
}

//  <div className="event-container" key={`${ele.title}-empty`}>
//                 <div className="soon">
//                   <span>
//                     <p>👇</p>
//                     <h2>{ele.title ?? "TESTE"}</h2>
//                     <p>👇</p>
//                   </span>
//                 </div>
//                 <div className="cards-container" key={`${ele.title}-div-empty`}>
//                   <span className="empty">
//                     <p>Aucun</p>
//                   </span>
//                 </div>
//               </div>
