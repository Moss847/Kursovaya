import { FC } from 'react'
import styles from './products-page.module.css'
import { FirstBanner } from '../../components/FirstBanner/FirstBanner'
import { Hair } from './components/hair/Hair'
import { Beard } from './components/Beard/Beard'

export const ProductsPage: FC = () => {
    return (
        <div className={styles.productsPage}>
            <FirstBanner
                bannerText={
                    <>
                        Каталог мужской <br /> косметики
                    </>
                }
            />
            <Hair />
            <Beard />
        </div>
    )
}
