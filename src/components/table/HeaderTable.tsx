import React from 'react';
import styles from './Table.module.css';
import { HeaderItem } from './HeaderItem';

export const HeaderTable = () => {
    return (
        <tr className={styles.header}>
            <HeaderItem title={'ID'}/>
            <HeaderItem title={'Заголовок'}/>
            <HeaderItem title={'Описание'}/>
        </tr>
    );
};
