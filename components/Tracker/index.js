import React from "react";
import styles from './style.module.scss';
import Container from "../Container";

const Tracker = ({ ip, location, timezone, isp }) => {
    return (
        <div className={styles.tracker}>
            <Container>
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
        </div>
    );
};

export default Tracker;
