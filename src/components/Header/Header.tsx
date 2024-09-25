import { FC } from 'react'
import styles from './Header.module.css'
import logoIcon from './../../shared/assets/logo.svg'
import socialVkIcon from './../../shared/assets/vkontakte.svg'
import socialInstagramIcon from './../../shared/assets/instagram.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    ABOUT_ROUTE,
    PRODUCTS_ROUTE,
    SERVICES_ROUTE,
} from '../../shared/constants'

export const Header: FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.headerLogo} onClick={() => navigate(ABOUT_ROUTE)}>
                    <img src={logoIcon} alt="" />
                    <span className={styles.headerLogoText}>Barberovsky</span>
                </div>
                <div className={styles.headerContacts}>
                    <div className={styles.headerLocation}>Челябинск</div>
                    <div className={styles.headerSocials}>
                        <a href='https://vk.com/barberovsky'>
                            <img src={socialVkIcon} alt="" />
                        </a>
                        <a href='https://www.instagram.com/barberovsky/'>
                            <img src={socialInstagramIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <NavLink to={ABOUT_ROUTE}>О нас</NavLink>
                <NavLink to={SERVICES_ROUTE}>Услуги</NavLink>
                <NavLink to={PRODUCTS_ROUTE}>Продукция</NavLink>
                <a href="#footer">Контакты</a>
            </div>
        </div>
    )
}
