

import styles from './tablle.module.css';
import back from '../../assets/images/services/back-services.jpg'

export function Tabble() {

    const prices = [
        { name: "Brasileiro", price: "R$ 80,00" },
        { name: "Fio a Fio", price: "R$ 80,00" },
        { name: "Glamour", price: "R$ 80,00" },
        { name: "Molhado", price: "R$ 80,00" },
        { name: "Sirena", price: "R$ 80,00" },
        { name: "Kim Kardashian", price: "R$ 80,00" },
        { name: "5D", price: "R$ 90,00" },
        { name: "6D", price: "R$ 100,00" },
        { name: "Fox", price: "R$ 100,00" },
        { name: "Mega Brasileiro", price: "R$ 110,00" },
        { name: "8D", price: "R$ 110,00" },
        { name: "Megan Fox", price: "R$ 130,00" },
    ];

    return (
        <div className={styles.container} 
        style={{ backgroundImage: `url(${back})` }}
    >
            <main className={styles.main}>
                <h2 className={styles.title}>Tabela de Valores</h2>
                
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Serviço</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prices.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
