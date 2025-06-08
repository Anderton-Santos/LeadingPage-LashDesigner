import cilios from '../../assets/images/models/cilios1.png'
import sobrancelha from '../../assets/images/models/sobran2.png'

import styles from './models.module.css'

export function Models() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Serviços</h1>

            <section className={styles.main}>

                <div className={styles.card}>
                    <img src={cilios}
                        alt=""
                        width={250}
                        height={130}
                        className={styles.img}
                    />

                    <p>Cílios</p>

                    <span>
                        Cílios Fio a Fio
                        Técnica precisa para um olhar marcante e natural. Cílios leves, duradouros e confortáveis.
                    </span>
                </div>

                <div className={styles.card}>
                    <img
                        src={sobrancelha}
                        alt=""
                        width={250}
                        height={130}
                        className={styles.img}
                    />
                    <p>Sobrancelhas</p>
                    <span>
                        Técnica precisa para um olhar marcante e natural.
                        Fios delicados, duradouros e com acabamento leve e confortável.
                    </span>
                </div>

            </section>

        </section>
    )
}