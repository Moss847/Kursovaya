import { FC, useEffect, useRef, useState } from 'react'
import styles from './List.module.css'
import classNames from 'classnames'

interface ListProps {
    darkColor?: boolean
    items: {
        image: string
        title: React.ReactNode
        description: string
    }[]
}

export const List: FC<ListProps> = ({ items, darkColor }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isModalOpen, setIsModalOpen] = useState(false);

    useOutsideClick(ref, () => setIsModalOpen(false))

    return (
        <div className={styles.list}>
            {isModalOpen &&  <div className={styles.modal} >
                <div className={styles.modalContent} ref={ref}>
                    <h2>Уважаемый клиент!</h2>
                    <p>Для приобретения обратитесь в ближайшую парикмахерскую Barberovsky</p>
                </div>
            </div>}
           
            {items.map((item) => (
                <div
                    key={item.description}
                    className={classNames(styles.listItem, {
                        [styles['listItem-inverted']]: darkColor,
                    })}
                >
                    <div>
                        <div className={styles.listImage}>
                            <img src={item.image} alt="" />
                        </div>

                        <div className={styles.listTitle}>{item.title}</div>
                        <div className={styles.listDecription}>
                            {item.description}
                        </div>
                    </div>

                    <div className={styles.button} onClick={() => setIsModalOpen(true)}>Подробнее</div>
                </div>
            ))}
        </div>
    )
}

function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void): void {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent): void {
        // Проверяем, если клик был вне элемента
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      }
  
      // Добавляем обработчик события клика по документу
      document.addEventListener('mousedown', handleClickOutside);
  
      // Очищаем обработчик при размонтировании компонента
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, callback]);
  }
  