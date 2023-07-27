import { Input } from './input/Input';
import { Pagination } from './pagnation/Pagination';
import { Table } from './table/Table';
import { useAppSelector } from '../common/hooks';


export const Page = () => {
    const posts = useAppSelector(state => state.pages.posts);
    const actualPage = useAppSelector(state => state.pages.page);

    const step = (actualPage - 1) * 10;

    const postsForRender = posts.slice(step, step + 10);

    return (
        <>
            <Input placeholder='Поиск' />
            <Table posts={postsForRender}/>
            <Pagination count={Math.ceil(posts.length / 10)} activePage={actualPage}/>
        </>
    );
};
