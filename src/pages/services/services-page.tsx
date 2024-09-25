import { FC } from 'react'
import styles from './services-page.module.css'
import { FirstBanner } from '../../components/FirstBanner/FirstBanner'
import { Premiality } from './components/premiality/Premiality'
import { PriceList } from './components/price-list/PriceList'

export const ServicesPage: FC = () => {
    return (
        <div className={styles.servicesPage}>
            <FirstBanner
                withImage
                bannerText={
                    <>
                        Услуги премиум <br /> качества по <br />
                        доступной цене
                    </>
                }
            />
            <Premiality />
            <PriceList />
        </div>
    )
}
