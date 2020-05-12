import React from 'react';
import styles from './Loader.module.scss';
const Loader = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.Loader}>
                <div className={styles.LoaderItem}>
                    <div/>
                </div>
            </div>
        </div>
    );
};

export default Loader;