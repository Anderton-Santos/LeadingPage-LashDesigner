import { Header } from "../../components/header"
import { Sobre } from "../../components/sobre"
import { Services } from "../../components/services"
import { Contato } from "../../components/contato"

export function Home() {


    return (
        <div>
          <header>
            <Header/>
          </header>

          <section>
            <Sobre/>
          </section>

          <section>
            <Services/>
          </section>

          <section>
            <Contato/>
          </section>

          
        </div>

  
    )
  }
  

  