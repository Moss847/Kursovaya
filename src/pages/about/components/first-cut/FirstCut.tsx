import { FC } from 'react'
import styles from './FirstCut.module.css'
import personImage from './../../../../shared/assets/man1.svg'
import { Button } from '../../../../components/Button/Button'

export const FirstCut: FC = () => {



    const handleClick = () => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className={styles.firstCut}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src={personImage} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        Первая стрижка <br /> по <span>супер цене</span>
                    </div>
                    <div className={styles.description}>
                        Получите премиум стрижку по <br /> супер цене в честь
                        первого посещения
                    </div>
                    <div className={styles.prices}>
                        <div className={styles.priceItem}>
                            <div className={styles.priceItemPrice}>599₽</div>
                            <div className={styles.priceItemText}>
                                Первая
                                <br /> стрижка
                                <br /> <span>мужика</span>
                            </div>
                        </div>
                        <div className={styles.priceItem}>
                            <div className={styles.priceItemPrice}>549₽</div>
                            <div className={styles.priceItemText}>
                                Первая <br /> стрижка <br />{' '}
                                <span>студента</span>
                            </div>
                        </div>
                        <div className={styles.priceItem}>
                            <div className={styles.priceItemPrice}>499₽</div>
                            <div className={styles.priceItemText}>
                                Первая
                                <br /> стрижка <br /> <span>Ребенка</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.button} onClick={handleClick}>
                        <Button type="secondary">НАЙТИ БЛИЖАЙШИЙ САЛОН</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
