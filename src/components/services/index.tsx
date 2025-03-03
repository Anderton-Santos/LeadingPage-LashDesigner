import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import styles from "./services.module.css";

import molhado from "../../assets/images/services/efeito-molhado.jpg";
import brasileiro from "../../assets/images/services/efeito-brasileiro.jpg";
import fox from "../../assets/images/services/efeito-fox.jpeg";
import glamour from "../../assets/images/services/efeito-glamour.jpeg";
import megan from "../../assets/images/services/efeito-megafox.jpeg";
import kim from "../../assets/images/services/efeito-kimkardashian.jpg";
import sirena from "../../assets/images/services/efeito-sirena.jpg";
import fived from "../../assets/images/services/efeito-volume5d.jpg";
import fioafio from "../../assets/images/services/efeito-fioafio.jpg";
import megaBra from "../../assets/images/services/efeito-megabrasileiro.jpg";

// import back from '../../assets/images/services/back-services.jpg'

const services = [
  { img: molhado, name: "Efeito Molhado" },
  { img: brasileiro, name: "Efeito Brasileiro" },
  { img: fox, name: "Efeito Fox" },
  { img: glamour, name: "Efeito Glamour" },
  { img: megan, name: "Efeito Megafox" },
  { img: kim, name: "Efeito Kim Kardashian" },
  { img: sirena, name: "Efeito Sirena" },
  { img: fived, name: "Efeito Volume 5D" },
  { img: fioafio, name: "Efeito Fio a Fio" },
  { img: megaBra, name: "Efeito Mega Brasileiro" },
];

export function Services() {
  return (
    <section className={styles.main}>

    {/* <img className={back} src={back} alt="" /> */}

      <h2>Efeitos</h2>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={60}  // Aqui você ajusta o espaçamento entre as imagens
  slidesPerView={1}
  navigation
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  className={styles.carousel}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {services.map((service, index) => (
    <SwiperSlide key={index} className={styles.boxImg}>
      <img src={service.img} alt={service.name} />
      <span className={styles.serviceName}>{service.name}</span>
    </SwiperSlide>
  ))}
</Swiper>


    </section>
  );
}
