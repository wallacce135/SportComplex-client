import { FC } from 'react';
import styles from './Complex.module.css';
import Image from 'next/image';

import about from '../../assets/About1.png';
import about2 from '../../assets/About2.png';
import about3 from '../../assets/About3.png';

const Complex: FC = () => {
    return(
        <div className={styles.Complex}>
            <div className={styles.ComplexHeading}>
                <h1>
                    Многофункциональный развлекательный комплекс "Таврический сад":<br/>
                    Ледовый каток, фитнес, тренажёрный зал, организация и проведение праздников и корпоративных мероприятий.
                </h1>
            </div>

            <div className={styles.ComplexInfo}>
            <p>Сегодня комплекс Таврический сад - уникальный по своим возможностям и предполагаемым услугам объект для проведения тренировочных и развлекательных мероприятий, включающий в себя: оборудованный на высшем уровне крытый ледовый каток с современными раздевалками для хоккея и фигурного катания, ресторан класса De-Lux, уютное кафе и фитнес тренажёрный зал с сауной и бассейном.</p>
            </div>

            <div className={styles.ComplexInfo}>
            <p>Многофункциональный развлекательный комплекс "Таврический сад", в котором разместились ресторан, кафе, фитнес центр и каток, расположен на территории одноименного парка в центре Сенкт-Петербурга.</p>
            </div>

            <div className={styles.Images}>
                <div className={styles.ImageBlock}>
                    <Image src={about} alt='' />
                </div>
                <div className={styles.ImageBlock}>
                    <Image src={about2} alt='' />
                </div>
                <div className={styles.ImageBlock}>
                    <Image src={about3} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Complex