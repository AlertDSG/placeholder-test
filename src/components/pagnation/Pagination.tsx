import styles from './Pagination.module.css';
import { CountPage } from './CountPage';
import { useAppDispatch } from '../../common/hooks';
import { changePage } from '../../store/page-reducer';
import { useNavigate } from 'react-router-dom';

type PropsType = {
    count: number,
    activePage: number,
}

export const Pagination = ({count, activePage}: PropsType) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const pages = Array.from({length: count}, (_, i) => i + 1);

    const onClickPrevPageHandler = () => {
        if (activePage > 1) {
            const page = activePage - 1
            dispatch(changePage({page}));
            navigate(`/${page}`);
        }
    };

    const onClickNextPageHandler = () => {
        if (activePage < pages.length) {
            const page = activePage + 1
            dispatch(changePage({page}));
            navigate(`/${page}`);
        }
    };

    return (
        <div className={styles.container}>
            <span onClick={onClickPrevPageHandler}>Назад</span>
            <div className={styles.countBody}>
                {pages.map((page, index) => <CountPage 
                key={index} 
                page={page}
                className={activePage === page ? styles.activePage : ''}
                />)}
            </div>
            <span onClick={onClickNextPageHandler}>Далее</span>
        </div>
    );
};
