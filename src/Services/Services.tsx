import { FC, useState, useEffect } from 'react';
import styles from './Services.module.css';
import Image from 'next/image';

import chess from '../../assets/Services/chess.png';
import CardBlock from './Cardblock/Cardblock';
import axios from 'axios';

const Services = () => {


    const [services, setServices] = useState<any>(null);

    useEffect(() => {

        axios.get('http://localhost:4040/services').then((data) => {
            setServices(data.data);
        })

    }, [])


    console.log('services -> ', services);


    return (
        <div className={styles.Services}>
            <div className={styles.CardsBlock}>

                {
                    services && services.map((item: any) => (
                        <CardBlock 
                            Price={item.Price} 
                            description={item.description} 
                            serviceID={item.serviceID}
                            serviceName={item.serviceName} 
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Services