import React from 'react';
import arrow from '../../arrow.png';

type PropsType = {
    title: string
}

export const HeaderItem = ({title}: PropsType) => {
    return (
        <th>
            <div>
                <span>{title}</span>
                <img src={arrow} alt="arrow" />
            </div>
            
        </th>
    );
};
