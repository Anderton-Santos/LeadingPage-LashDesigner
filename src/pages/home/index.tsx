import { Header } from "../../components/header"
import { Sobre } from "../../components/sobre"
import { Services } from "../../components/services"
import { Contato } from "../../components/contato"
import { Models } from "../../components/models";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Redes } from "../../components/redes";




export function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>

      <section id="sobre">
        <Sobre />
      </section>

      <section id="models" >
        <Models />
      </section>

      <section id="servicos">
        <Services />
      </section>

      <section>
        <Redes/>
      </section>

      <section id="contato">
        <Contato />
      </section>


    </div>


  )
}


