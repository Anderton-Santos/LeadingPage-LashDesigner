import styles from './header.module.css'
import { Link } from 'react-router-dom'


import back from '../../assets/images/home/background.jpg'
import imgback from '../../assets/images/home/img-background.png'

export function Header() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (

        <div className={styles.headerContain}>

            <img className={styles.background} src={back} alt="" />

            {/* <div className={styles.logo}>
                <span>ola mundo</span>
            </div> */}

            <div className={styles.headerLinks}>



                {/* <span>Home</span>
                <span>Sobre</span>
                <span>Serviços</span>
                <span>Contato</span> */}

                <span>Home</span>
                <span onClick={() => scrollToSection("sobre")}>Sobre</span>
                <span onClick={() => scrollToSection("servicos")}>Serviços</span>
                <span onClick={() => scrollToSection("contato")}>Contato</span>
            </div>

            <div className={styles.headerMain}>
                <div className={styles.headerTitle}>
                    <h2 className={styles.headerTit} data-aos="fade-up">Realce sua beleza com cílios perfeitos!</h2>
                    <span className={styles.headerSub} data-aos="fade-down">Alongamento de cílios que valoriza seu olhar com naturalidade e durabilidade.
                        Agende seu horário e sinta-se ainda mais linda!</span>

                    <div className={styles.buttonHeader} data-aos="zoom-in-up">

                        <a className={styles.mainButton}
                            href="https://api.whatsapp.com/send/?phone=5579999441007&text&type=phone_number&app_absent=0"
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            Marcar Horário</a>


                        <Link className={styles.mainButton} to="/tabela">
                            Ver Valores
                        </Link>


                    </div>

                </div>

                <div className={styles.imgBack}>
                    <img src={imgback} alt="" />
                </div>


            </div>





        </div>



    )
}


