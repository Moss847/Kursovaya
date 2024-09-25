import styles from './Premiality.module.css'

export const Premiality = () => {
    return (
        <div className={styles.premiality}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Премиальность услуг </div>
                <div className={styles.secondTitle}>
                    Помимо самой стрижки в услугу входят:
                </div>
                <div className={styles.grid}>
                    <div className={styles.gridItem}>Мытьё головы</div>
                    <div className={styles.gridItem}>
                        Удаление волос в носу и ушах воском
                    </div>
                    <div className={styles.gridItem}>
                        Аппаратный массаж головы
                    </div>
                    <div className={styles.gridItem}>Оформление бровей</div>
                    <div className={styles.gridItem}>Укладка волос</div>
                    <div className={styles.gridItem}>
                        Сахарно-кофейный пилинг головы
                    </div>
                    <div className={styles.gridItem}>
                        Успокаивающий одеколон
                    </div>
                    <div className={styles.gridItem}>Тоник для роста волос</div>
                    <div className={styles.gridItem}>Бесплатный чай, кофе</div>
                    <div className={styles.gridItem}>
                        Консультация по выбору стрижки
                    </div>
                    <div className={styles.gridItem}>
                        Леденец для детей в конце стрижки
                    </div>
                    <div className={styles.gridItem}>Бонусные стрижки</div>
                </div>
            </div>
        </div>
    )
}
