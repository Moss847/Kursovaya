import { FC } from 'react'
import styles from './FirstBanner.module.css'
import { Header } from '../Header/Header'
import { Button } from '../Button/Button'
import personBanner from '../../shared/assets/man2.svg'

interface FirstBannerProps {
    bannerText: React.ReactNode
    withImage?: boolean
}

export const FirstBanner: FC<FirstBannerProps> = ({
    bannerText,
    withImage,
}) => {
    const handleButtonClick = () => {
        const element = document.getElementsByClassName(
            'yButton'
        )[0]! as HTMLDivElement
        element.click()
    }
    return (
        <div className={styles.banner}>
            <Header />
            <div className={styles.bannerBody}>
                {withImage && (
                    <div className={styles.bannerImagePart}>
                        <img src={personBanner} alt="" />
                    </div>
                )}
                <div className={styles.bannerTextPart}>
                    <div className={styles.bannerText}>
                        <h1>{bannerText}</h1>
                    </div>
                    <div
                        className={styles.bannerButton}
                        onClick={handleButtonClick}
                    >
                        <Button type="primary">ЗАПИСАТЬСЯ ОНЛАЙН</Button>
                    </div>
                </div>
            </div>
            hello
        </div>
    )
}
