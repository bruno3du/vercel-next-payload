"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ open, setOpen, cardInfos }: any) => {
  const router = useRouter();
  // let arrType = [];

  // if (router.asPath === "/") {
  //   cardInfos.map((ele, i) => {
  //     let type = ele.data.slices[0].items[0].eventtype;
  //     if (type !== null && !arrType.includes(type))
  //       arrType = [...arrType, type];
  //   });
  // }

  return (
    <header>
      <div className="nav-container">
        <div className="nav">
          <Link href={"/"}>
            <div className="logo">
              <Image
                src={"/logo-gongosa.svg"}
                alt="Logo du site web Gongosa, représentant une femme qui regarde les evenements de la guyane"
                width={70}
                height={70}
                loading="eager"
              />
              <h3>Gongosa</h3>
            </div>
          </Link>

          <div onClick={() => setOpen(!open)} className="download">
            {/* {router.asPath === "/" &&
              <select>
                <option value={""} selected>Aucun filtre</option>
                {arrType.map((ele) => (
                  <option key={ele}>{ele}</option>
                ))}
              </select>            
            } */}
            <a
              className="footer-social"
              href="https://www.instagram.com/gongosa.fr/"
              target="_blank"
            >
              <Image
                src={"/logo-instagram.svg"}
                alt={"Logo représentant le réseau social Instagram"}
                width={24}
                height={24}
                loading="lazy"
              />
            </a>
            {/* <Image
              src={"/icone-telechargement-pwa.svg"}
              alt={"Icône indiquant le téléchargement de l'application en PWA"}
              width={24}
              height={24}
              loading="lazy"
            />
            <p>Télécharger l'app</p> */}
          </div>
        </div>
      </div>
      <div className="void" />
      {/* {open ? <InfoModal open={open} setOpen={setOpen} /> : null} */}
    </header>
  );
};

export default Navbar;
