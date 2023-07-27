import { HeaderTable } from './HeaderTable';
import { PostType } from '../../api/getData';
import { Row } from './Row';
import styls from './Table.module.css';

type PropsType = {
    posts: PostType[],
}

export const Table = ({posts}: PropsType) => {
    const rows = posts
        .map( row => <Row key={row.id} id={row.id} title={row.title} body={row.body}/>);

    return (
        <table className={styls.table}>
            <tbody>
                <HeaderTable/>
                {rows}
            </tbody> 
        </table>
    );
};
