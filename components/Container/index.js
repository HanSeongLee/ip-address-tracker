import React from "react";
import styles from './style.module.scss';

const Container = ({ children, ...props }) => {
    return (
        <div className={styles.container}
             {...props}
        >
            {children}
        </div>
    );
};

export default Container;
