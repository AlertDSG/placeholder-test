import styles from './Table.module.css';
import { HeaderItem } from './HeaderItem';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { sortHelper } from '../../common/helpers/sortHelper';
import { NameCellType, SortType } from '../../common/helpers/sortTypes';

export const HeaderTable = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.pages.posts);

    const sortHelperHandler = (name: NameCellType, regulator: SortType) => {
        sortHelper(dispatch, regulator, name, posts);
    };

    return (
        <tr className={styles.header}>
            <HeaderItem title={'ID'} helper={(name, regulator) =>sortHelperHandler(name, regulator)}/>
            <HeaderItem title={'Заголовок'} helper={(name, regulator) =>sortHelperHandler(name, regulator)}/>
            <HeaderItem title={'Описание'} helper={(name, regulator) =>sortHelperHandler(name, regulator)}/>
        </tr>
    );
};
