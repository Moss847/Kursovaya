import { FC } from 'react'
import styles from './Recomentations.module.css'
import morgansImage from './../../../../shared/assets/morgans.svg'
import { Button } from '../../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS_ROUTE } from '../../../../shared/constants'

export const Recomendations: FC = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.recomendations}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <span>Barberovsky</span> рекомендует
                </div>
                <div className={styles.mainPart}>
                    <div className={styles.leftPart}>
                        <p className={styles.description}>
                            Новая линейка мужской косметики премиум-класса от
                            бренда с мировым именем
                        </p>
                        <p className={styles.productName}>
                            MORGAN’S X <span>BARBEROVSKY</span>
                        </p>
                        <div className={styles.button}>
                            <Button type="primary" onClick={() => navigate(PRODUCTS_ROUTE)}>
                                ПОСМОТРЕТЬ ВЕСЬ АССОРТИМЕНТ
                            </Button>
                        </div>
                    </div>
                    <div className={styles.rightPart}>
                        <img src={morgansImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
