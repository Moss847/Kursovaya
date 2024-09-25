import { List } from '../../../../components/List/List'
import styles from './Bears.module.css'
import oilIcon from '../../../../shared/assets/oil.svg'
import odekolonIcon from '../../../../shared/assets/odekolon.svg'
import minoksidikIcon from '../../../../shared/assets/minoksidik.svg'
import { FC } from 'react'
import classNames from 'classnames'

const ITEMS: {
    image: string
    title: React.ReactNode
    description: string
}[] = [
    {
        description: 'Стимулирует рост волос, укрепляет корни волос бороды.',
        image: oilIcon,
        title: <>Масло для бороды</>,
    },
    {
        description: 'Тонизирует кожу и придает приятный, легкий аромат.',
        image: odekolonIcon,
        title: (
            <>
                Одеколон после бритья{' '}
                <span style={{ color: '#229216' }}>Nishman</span>
            </>
        ),
    },
    {
        description: 'Предотвращает выпадение волос, стимулирует рост волос',
        image: minoksidikIcon,
        title: <>Миноксидил для роста волос</>,
    },
]

export const Beard: FC = () => {
    return (
        <div className={classNames(styles.hair)}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    Уход за <span>бородой</span>
                </div>
                <div className={styles.description}>
                    Линейка проверенных средств для ухода <br /> за волосами по
                    доступной цене
                </div>
                <List items={ITEMS} darkColor={true} />
            </div>
        </div>
    )
}
