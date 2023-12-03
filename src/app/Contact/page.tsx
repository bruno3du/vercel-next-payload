"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, SyntheticEvent, useEffect, useState } from "react";

const types = [
  {
    id: 1,
    value: "concert",
    label: "Concert",
  },
  {
    id: 2,
    value: "festival",
    label: "Festival",
  },
  {
    id: 3,
    value: "salle",
    label: "Salle",
  },
  {
    id: 4,
    value: "autre",
    label: "Autre",
  },
];

const places = [
  {
    id: 1,
    value: "salle",
    label: "Salle",
  },
  {
    id: 2,
    value: "autre",
    label: "Autre",
  },
];

const Contact = () => {
  const [data, setData] = useState({
    img: "",
    title: "",
    type: "",
    place: "",
    price: "",
    start: {
      date: "",
      hour: "",
    },
    end: {
      date: "",
      hour: "",
    },
  });

  useEffect(() => {
    setData({
      img: "",
      title: "",
      type: "",
      place: "",
      price: "",
      start: {
        date: "",
        hour: "",
      },
      end: {
        date: "",
        hour: "",
      },
    });
  }, []);

  const startDateChange = (e: FormEvent<HTMLInputElement>) => {
    const startDate = moment(e.currentTarget.value).format("yyyy-MM-DD");

    setData((prev) => ({
      ...prev,
      start: {
        ...prev.start,
        date: startDate,
      },
    }));
  };
  const endDateChange = (e: FormEvent<HTMLInputElement>) => {
    const endDate = moment(e.currentTarget.value).format("yyyy-MM-DD");

    setData((prev) => ({
      ...prev,
      end: {
        ...prev.end,
        date: endDate,
      },
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-title">
          <h1>
            Si vous avez des questions, des préoccupations ou des suggestions,
            n&apos;hésitez pas à nous contacter via le formulaire ci-dessous ou
            à nous envoyer un email directement à contact@primo-studio.fr
          </h1>
        </div>

        <div className="mail-contact">
          <a href="mailto:contact@primo-studio.fr">Contactez-nous</a>{" "}
        </div>

        <div className="social">
          <h2>Rejoignez-nous</h2>
          <div>
            <Link
              href={"https://www.instagram.com/gongosa.fr/"}
              target="/blank"
            >
              <Image
                src={"/logo-instagram.svg"}
                alt="Logo du réseau social Facebook"
                width={48}
                height={48}
              />
            </Link>
          </div>
        </div>

        <div className="send-to-prismic hidden">
          <h3>Envoyez-nous vos events</h3>
          <form onSubmit={handleSubmit}>
            {/* affiche de l&apos;event */}
            <label>
              <input
                type="file"
                value={data.img}
                onChange={(e) => setData({ ...data, img: e.target.value })}
              />
              Média
            </label>
            {/* nom de l&apos;event */}
            <label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
              />
              Nom de l&apos;event
            </label>
            {/* prix de l&apos;event */}
            <label>
              <input
                type="number"
                min={0}
                value={data.price}
                onChange={(e) => {
                  setData({ ...data, price: e.target.value });
                }}
              />
              Prix
            </label>
            {/* type d&apos;event  */}
            <label>
              <select
                value={data.type}
                onChange={(e) => {
                  setData({ ...data, type: e.target.value });
                }}
              >
                <option value={""}>Default</option>
                {types.map((type) => (
                  <option key={type.id} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              Type d&apos;event
            </label>
            {/* lieu  */}
            <label>
              <select
                value={data.place}
                onChange={(e) => {
                  setData({ ...data, place: e.target.value });
                }}
              >
                <option value={""}>Default</option>
                {places.map((place) => (
                  <option key={place.id} value={place.value}>
                    {place.label}
                  </option>
                ))}
              </select>
              Lieu
            </label>
            {/* date et heure de début */}
            <label>
              <input
                type="date"
                value={data.start.date}
                onChange={startDateChange}
              />
              <input
                type="time"
                value={data.start.hour}
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    start: {
                      ...prev.start,
                      hour: e.target.value,
                    },
                  }));
                }}
              />
              Début
            </label>
            {/* date et heure de fin */}
            <label>
              <input
                type="date"
                value={data.end.date}
                onChange={endDateChange}
              />
              <input
                type="time"
                value={data.end.hour}
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    end: {
                      ...prev.end,
                      hour: e.target.value,
                    },
                  }));
                }}
              />
              Fin
            </label>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
