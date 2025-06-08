import { Instagram } from "lucide-react";
import styles from './redes.module.css'

import insta from '../../assets/images/redes/insta.png'


export function Redes() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>Conheça nosso</h1>

                <div className={styles.icon}>
                    <a
                        href="https://www.instagram.com/ciliosdamariaa/"
                        target="_blank"
                    >

                        <Instagram size={52} color="black" />
                    </a>

                </div>
            </div>

            <div className={styles.imageMain}>
                <img
                    src={insta}
                    className={styles.image}

                    alt="" />
            </div>


            <a
                href="https://www.instagram.com/ciliosdamariaa/"
                target="_blank"
            >

                <button className={styles.btn}>Acessar Instagram</button>
            </a>

        </div>
    )
}