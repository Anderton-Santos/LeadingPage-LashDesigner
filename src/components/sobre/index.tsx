import styles from './sobre.module.css'
import sobre from '../../assets/images/sobre/lash.png'
import back from '../../assets/images/sobre/back-sobre.jpg'

export function Sobre() {


    return (

        <section className={styles.main}>
            <img className={styles.back} src={back} alt="" />

                        <div className={styles.mainImg} data-aos="fade-up">
                <img src={sobre} alt="" />
            </div>

            <span className={styles.mainText} data-aos="fade-left">
                <h2>Oi, Me chamo Maria!</h2>
                Sou especialista em extensão de cílios e design de sobrancelha!
                transformo olhares e realço a confiança de minhas clientes com técnicas
                personalizadas de extensão de cílios. Meu objetivo é proporcionar resultados
                impecáveis e naturais, sempre priorizando o conforto e a segurança em cada
                procedimento.<br/><br/>

                <span className={styles.textTwo} data-aos="fade-right">Seja para um visual mais volumoso ou mais delicado, ofereço uma variedade
                de estilos que atendem às suas preferências pessoais. Com um ambiente
                acolhedor e profissionais qualificados, você pode contar comigo para
                alcançar o look dos seus sonhos. Agende seu horário e venha viver a
                experiência de se sentir ainda mais poderosa!</span>

                


            </span>

        </section>

    )
}


