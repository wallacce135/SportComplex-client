import { FC } from 'react';
import styles from './Home.module.css'
import Image from 'next/image';

import background from '../../assets/bg.png';
import trainer1 from '../../assets/trainer1.png';
import trainer2 from '../../assets/trainer2.png';
import trainer3 from '../../assets/trainer3.png';
import trainer4 from '../../assets/trainer4.png';
import lifestyle from '../../assets/sportItIsLive.png';
import skates from '../../assets/skates.png';

const Home: FC = () =>  {
    return(
        <div className={styles.Home}>

            <div className={styles.ImageBlock}>
                <Image src={background} alt='' />
            </div>

            <div className={styles.MainInfoBlocks}>

                <div className={styles.MainInfoBlock}>
                    <h1>Никогда не поздно начать!</h1>
                    <h3>Каждый день к нам присоединяются новые люди!</h3>
                    <h3>До 100 человек в день!</h3>
                </div>

                <div className={styles.MainInfoBlock}>
                    <h1>Дружное сообщество</h1>
                    <h3>Более 3-ти клиентов предпочитают нас!</h3>
                    <h3>До 2-х тясяч человек возвращается снова каждый год!</h3>
                </div>

                <div className={styles.MainInfoBlock}>
                    <h1>Продуктивная обстановка</h1>
                    <h3>Каждый второй клиент тренируется чаще 2-х раз в неделю!</h3>
                    <h3>Работаем 24 на 7!</h3>
                </div>

            </div>

            <div className={styles.Team}>
                <h2>Наша команда</h2>
                <div className={styles.Trainers}>

                    <div className={styles.Trainer}>
                        <Image src={trainer1} alt='' />
                        <h4>Гончаренко Яна</h4>
                    </div>

                    <div className={styles.Trainer}>
                        <Image src={trainer2} alt='' />
                        <h4>Прыткова Валерия</h4>
                    </div>

                    <div className={styles.Trainer}>
                        <Image src={trainer3} alt='' />
                        <h4>Коковин Александр</h4>
                    </div>

                    <div className={styles.Trainer}>
                        <Image src={trainer4} alt='' />
                        <h4>Шмакова Марина</h4>
                    </div>

                    

                </div>
                <div className={styles.TrainerButton}>
                    <button>Тренеры</button>
                </div>
            </div>


            <div className={styles.LifeStyle}>
                <div className={styles.LifeStyle_left}>
                    <h1>Спорт - как образ жизни</h1>
                    <h5>Запишись на пробную тренировку и начни заниматься уже сегодня</h5>
                    <div className={styles.Abonement_info}>
                        <h2>Один абонемент - на все направления!</h2>
                        <button>Пробное занятие</button>
                    </div>
                </div>


                <div className={styles.LifeStyle_right}>
                    <Image src={lifestyle} alt='' />
                </div>

            </div>

            {/* <div className={styles.ImageBlock}>
                <Image src={skates} alt='' />
            </div> */}

        </div>
    )
}

export default Home