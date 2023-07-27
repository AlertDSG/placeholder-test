import styles from './Table.module.css';

type PropsType = {
    userId?: number,
    id: number,
    title: string,
    body: string,
}

export const Row = ({id, title, body}: PropsType) => {
    return (
        <tr className={styles.rowBody}>
            <td>{id}</td>
            <td>
                <div>{title}</div>
            </td>
            <td>
                <div>{body}</div>
            </td>
        </tr>
    );
};
