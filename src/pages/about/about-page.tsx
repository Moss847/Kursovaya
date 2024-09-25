import { FC } from 'react'
import styles from './about-page.module.css'
import { FirstBanner } from '../../components/FirstBanner/FirstBanner'
import { FirstCut } from './components/first-cut/FirstCut'
import { Recomendations } from './components/recomendations/Recomentations'

export const AboutPage: FC = () => {
    return (
        <div className={styles.aboutPage}>
            <FirstBanner
                bannerText={
                    <>
                        Премиум <br /> стрижки по <br /> доступной цене
                    </>
                }
            />
            <FirstCut />
            <Recomendations />
        </div>
    )
}
