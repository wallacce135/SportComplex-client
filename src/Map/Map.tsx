import { FC } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Image from 'next/image';

import map from '../../assets/map.png';
import styles from './Map.module.css';



const YMap: FC = () => {

    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
      };

    return(
        <div className={styles.MapBlock}>
            <h1>Где мы находимся</h1>
            <h2>г. Санкт-Петербург, улица Потёмкинская, д.4а</h2>


            {/* <YMaps>
                <Map defaultState={defaultState}>
                    <Placemark geometry={[55.684758, 37.738521]}  />
                </Map>
            </YMaps> */}
            <Image src={map} alt='' />

        </div>
    )
}

export default YMap