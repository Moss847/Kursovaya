import { FC } from 'react'
import styles from './BaseLayout.module.css'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const BaseLayout: FC = () => {
    return (
        <div className={styles.baseLayout}>
            <Outlet />
            <Footer />
        </div>
    )
}
