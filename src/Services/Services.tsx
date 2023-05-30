import { FC } from 'react';
import styles from './Services.module.css';
import Image from 'next/image';

import chess from '../../assets/Services/chess.png';


const Services: FC = () => {
    return (
        <div className={styles.Services}>
            <div className={styles.CardsBlock}>

                <div className={styles.CardBlock}>
                    <Image src={chess} alt=''/>
                    <h3>Свободное катание</h3>
                    <h4>Свободное катание - возможность парить, как птица</h4>
                    <div className={styles.SignUp}>
                        <button>Записаться</button>
                    </div>
                </div>

                <div className={styles.CardBlock}>
                    <Image src={chess} alt=''/>
                    <h3>Свободное катание</h3>
                    <h4>Свободное катание - возможность парить, как птица</h4>
                    <div className={styles.SignUp}>
                        <button>Записаться</button>
                    </div>
                </div>

                <div className={styles.CardBlock}>
                    <Image src={chess} alt=''/>
                    <h3>Свободное катание</h3>
                    <h4>Свободное катание - возможность парить, как птица</h4>
                    <div className={styles.SignUp}>
                        <button>Записаться</button>
                    </div>
                </div>

                <div className={styles.CardBlock}>
                    <Image src={chess} alt=''/>
                    <h3>Свободное катание</h3>
                    <h4>Свободное катание - возможность парить, как птица</h4>
                    <div className={styles.SignUp}>
                        <button>Записаться</button>
                    </div>
                </div>

                <div className={styles.CardBlock}>
                    <Image src={chess} alt=''/>
                    <h3>Свободное катание</h3>
                    <h4>Свободное катание - возможность парить, как птица</h4>
                    <div className={styles.SignUp}>
                        <button>Записаться</button>
                    </div>
                </div>

                <div className={styles.CardBlock}>
                    <Image src={chess} alt=''/>
                    <h3>Свободное катание</h3>
                    <h4>Свободное катание - возможность парить, как птица</h4>
                    <div className={styles.SignUp}>
                        <button>Записаться</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services