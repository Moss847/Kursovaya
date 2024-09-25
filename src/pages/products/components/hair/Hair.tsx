import { List } from '../../../../components/List/List'
import styles from './Hair.module.css'
import shampooIcon from '../../../../shared/assets/shampoo.svg'
import pomadeIcon from '../../../../shared/assets/pomade.svg'
import pudraIcon from '../../../../shared/assets/pudra.svg'
import morgansIcon from '../../../../shared/assets/ukladka.svg'
import { FC } from 'react'
import classNames from 'classnames'

const ITEMS: {
    image: string
    title: React.ReactNode
    description: string
}[] = [
    {
        description:
            'Отлично фиксирует прическу на средних или коротких волосах ',
        image: morgansIcon,
        title: (
            <>
                Укладка для волос{' '}
                <span style={{ color: '#229216' }}>Nishman</span>
            </>
        ),
    },
    {
        description:
            'Эффективно увлажняет и укрепляет волосы и восстанавливает их ',
        image: shampooIcon,
        title: (
            <>
                Шампунь МУЖИКИ <span style={{ color: '#229216' }}>ПРО</span>
            </>
        ),
    },
    {
        description:
            'Мгновенно придает желаемую форму прическе делая волосы податливыми ',
        image: pudraIcon,
        title: (
            <>
                Пудра для волос{' '}
                <span style={{ color: '#229216' }}>Nishman</span>
            </>
        ),
    },
    {
        description: 'Сильная фиксация стайлинга закрепит локоны на весь день ',
        image: pomadeIcon,
        title: (
            <>
                Помада
                <span style={{ color: '#229216' }}> Morgan’s</span>
            </>
        ),
    },
]

export const Hair: FC<{ inverColours?: boolean }> = ({ inverColours }) => {
    return (
        <div className={classNames(styles.hair)}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Уход за волосами</div>
                <div className={styles.description}>
                    Линейка проверенных средств для ухода <br /> за волосами по
                    доступной цене
                </div>
                <List items={ITEMS} darkColor={!!inverColours} />
            </div>
        </div>
    )
}
