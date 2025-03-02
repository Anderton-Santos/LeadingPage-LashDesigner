import styles from './contato.module.css'

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export function Contato() {


    return (

        <div>



        <div className={styles.main}>

            <div className={styles.info}>
                <p className={styles.title}>Cilios da Maria</p>
                <div className={styles.infoServices}>
                    <span>Extensão de cílios</span>
                    <span>Sobrancelhas</span>
                    <span>Lash Lifiting</span>
                    

                </div>
            </div>

            <div className={styles.localizacao}>
                <p className={styles.title}>Localização</p>
                <div>
                    <span>Lagarto-Se</span>
                </div>
            </div>

            <div className={styles.contato}>
                <p className={styles.title}>Contato</p>
                <div className={styles.redes}>
                    <span><FaWhatsapp/></span>
                    <span><FaInstagram/></span>
                </div>
            </div>

 
        </div>
        <div className={styles.direitos}>
                <span>&copy; 2025 Cilios da Maria. Todos os direitos reservados.</span>
                <span>Desenvolvido por AndertonDev</span>
            </div>

        </div>
    )
}


