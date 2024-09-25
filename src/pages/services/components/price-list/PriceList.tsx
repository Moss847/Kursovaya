import styles from './PriceList.module.css'

export const PriceList = () => {
    return (
        <div className={styles.priceList}>
            <div className={styles.wrapper}>
                <div className={styles.gridItem}>
                    <span>Услуга</span>
                    <span>Цена</span>
                    <span>Время</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Стрижка мужика</span>
                    <span>
                        1500<span>₽</span>
                    </span>
                    <span>45 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Оформление бороды</span>
                    <span>
                        800<span>₽</span>
                    </span>
                    <span>30 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Стрижка сына</span>
                    <span>
                        1000<span>₽</span>
                    </span>
                    <span>45 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Стрижка + борода</span>
                    <span>
                        1900<span>₽</span>
                    </span>
                    <span>1 ч 15 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Стрижка папы + сын</span>
                    <span>
                        2300<span>₽</span>
                    </span>
                    <span>1 ч 15 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Камуфляж бороды</span>
                    <span>
                        700<span>₽</span>
                    </span>
                    <span>30 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Камуфляж седины (голова)</span>
                    <span>
                        1000<span>₽</span>
                    </span>
                    <span>30 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Чистка лица скрабом</span>
                    <span>
                        600<span>₽</span>
                    </span>
                    <span>15 мин</span>
                </div>
                <div className={styles.gridItem}>
                    <span>Удаление волос воском</span>
                    <span>
                        500<span>₽</span>
                    </span>
                    <span>20 мин</span>
                </div>
            </div>
        </div>
    )
}
