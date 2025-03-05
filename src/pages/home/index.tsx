import { Header } from "../../components/header"
import { Sobre } from "../../components/sobre"
import { Services } from "../../components/services"
import { Contato } from "../../components/contato"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duração da animação (em ms)
      once: false, // Se true, a animação só ocorre uma vez
    });
  }, []);
    return (
        <div>
          <header>
            <Header/>
          </header>

          <section id="sobre">
            <Sobre/>
          </section>

          <section id="servicos">
            <Services/>
          </section>

          <section id="contato">
            <Contato/>
          </section>

          
        </div>

  
    )
  }
  

  