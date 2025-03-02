import styles from './header.module.css'
import { Link } from 'react-router-dom'

import back from '../../assets/images/home/background.jpg'
import imgback from '../../assets/images/home/img-background.png'

export function Header() {


    return (

        <div className={styles.headerContain}>

            <img className={styles.background} src={back} alt="" />

            {/* <div className={styles.logo}>
                <span>ola mundo</span>
            </div> */}

            <div className={styles.headerLinks}>



                <span>Home</span>
                <span>Sobre</span>
                <span>Serviços</span>
                <span>Contato</span>
            </div>

            <div className={styles.headerMain}>
                <div className={styles.headerTitle}>
                    <h2 className={styles.headerTit}>Realce sua beleza com cílios perfeitos!</h2>
                    <span className={styles.headerSub}>Alongamento de cílios que valoriza seu olhar com naturalidade e durabilidade.
                        Agende seu horário e sinta-se ainda mais linda!</span>

                    <div className={styles.buttonHeader}>
                        <button>Marcar Horario</button>
                        <Link  to="/tabela"><button>Ver Valores</button></Link>
                        

                    </div>

                </div>

                <div className={styles.imgBack}>
                    <img src={imgback} alt="" />
                </div>


            </div>





        </div>



    )
}


