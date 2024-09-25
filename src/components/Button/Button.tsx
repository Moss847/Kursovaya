import { FC } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

type ButtonTypes = 'primary' | 'secondary'

type ButtonProps = {
    type: ButtonTypes
    children: React.ReactNode
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, {
                [styles['button--primary']]: type === 'primary',
                [styles['button--secondary']]: type === 'secondary',
            })}
        >
            {children}
        </button>
    )
}
