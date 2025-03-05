import styles from './contato.module.css'

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export function Contato() {


    return (

        <div>



        <div className={styles.main}>

            <div className={styles.info} data-aos="fade-up">
                <p className={styles.title}>Cilios da Maria</p>
                <div className={styles.infoServices}>
                    <span>Extensão de cílios</span>
                    <span>Sobrancelhas</span>
                    <span>Lash Lifiting</span>
                    

                </div>
            </div>

            <div className={styles.localizacao} data-aos="fade-up">
                <p className={styles.title}>Localização</p>
                <div>
                    <span>Lagarto-Se</span>
                </div>
            </div>

            <div className={styles.contato} data-aos="fade-up">
                <p className={styles.title}>Contato</p>
                <div className={styles.redes}>
                    <span><a 
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=5579999441007&text&type=phone_number&app_absent=0">
                        <FaWhatsapp/>
                        </a></span>

                    <span>
                        <a href="https://www.instagram.com/piedade_jesuss/"
                        target="_blank"
                        >
                        <FaInstagram/>
                        </a></span>
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


