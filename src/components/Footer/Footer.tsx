import { FC } from 'react'
import styles from './Footer.module.css'
import phoneIcon from '../../shared/assets/contacts-phone.svg'
import emailIcon from '../../shared/assets/contacts-email.svg'

export const Footer: FC = () => {
    return (
        <div className={styles.footer} id="footer">
            <div className={styles.title}>Контакты</div>
            <div className={styles.contacts}>
                <div className={styles.contactItem}>
                    <img src={phoneIcon} alt="" />
                    <div className={styles.contactText}>
                        Проспект Ленина 74
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <img src={phoneIcon} alt="" />
                    <div className={styles.contactText}>8 (800) 888-88-88</div>
                </div>
                <div className={styles.contactItem}>
                    <img src={emailIcon} alt="" />
                    <div className={styles.contactText}>
                        dok.plaza@mail.ru
                    </div>
                </div>
            </div>
        </div>
    )
}
