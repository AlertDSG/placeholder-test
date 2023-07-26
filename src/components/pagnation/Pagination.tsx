import React from 'react';
import styles from './Pagination.module.css';
import { CountPage } from './CountPage';
type PropsType = {
    len: number
}

export const Pagination = ({len}: PropsType) => {

    const pages = Array.from({length: Math.ceil(len / 10)}, (_, i) => i + 1)

    return (
        <div className={styles.container}>
            <span>Назад</span>
            <div className={styles.countBody}>
                {pages.map(page => <CountPage page={page}/>)}
            </div>
            <span>Далее</span>
        </div>
    );
};
