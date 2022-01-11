import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import dynamic from "next/dynamic";

const Tracker = ({
                     ip, location, timezone, isp,
                     lat, lng
                 }) => {
    const Map = React.useMemo(() => dynamic(
        () => import('../Map'), // replace '@components/map' with your component's location
        {
            loading: () => <p>A map is loading</p>,
            ssr: false // This line is important. It's what prevents server-side render
        }
    ), [/* list variables which should trigger a re-render here */]);

    return (
        <div className={styles.tracker}>
            <Container className={styles.container}>
                <h1 className={styles.title}>
                    IP Address Tracker
                </h1>
                <form className={styles.form}>
                    <input className={styles.input}
                           name={'ip'}
                    />
                    <button className={styles.submitButton}
                            type={'submit'}
                    >
                        <img src={'/icons/icon-arrow.svg'}
                             alt={'submit'}
                        />
                    </button>
                </form>

                <div className={styles.infoBox}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.header}>
                            IP Address
                        </div>
                        <p className={styles.content}>
                            {ip}
                        </p>
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.header}>
                            Location
                        </div>
                        <p className={styles.content}>
                            {location}
                        </p>
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.header}>
                            Timezone
                        </div>
                        <p className={styles.content}>
                            {timezone}
                        </p>
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.header}>
                            ISP
                        </div>
                        <p className={styles.content}>
                            {isp}
                        </p>
                    </div>
                </div>
            </Container>
            <div className={styles.mapWrapper}>
                <Map lat={lat}
                     lng={lng}
                />
            </div>
        </div>
    );
};

export default Tracker;
