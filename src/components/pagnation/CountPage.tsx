import React from 'react';

type PropsType = {
    page: number
}

export const CountPage = ({page}: PropsType) => {
    return (
        <span>{page}</span>
    );
};
