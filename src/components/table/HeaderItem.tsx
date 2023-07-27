import { NameCellType, SortType } from '../../common/helpers/sortTypes';
import { Arrow } from './Arrow';
import { useAppSelector } from '../../common/hooks';
import styles from './Table.module.css';

type PropsType = {
    title: NameCellType,
    helper: (title: NameCellType, regulator: SortType) => void,
}

export const HeaderItem = ({title, helper}: PropsType) => {
    const statusSort = useAppSelector(state => state.pages.statusSort);
    const columnSort = useAppSelector(state => state.pages.columnSort);

    const onClickHelper = (regulator: SortType) => {
        helper(title, regulator);
    };

    return (
        <th>
            <div>
                <span>{title}</span>
                { columnSort === title && statusSort ==='desc' 
                ? <Arrow onClickHelper={() => onClickHelper('inc')}  className={styles.activeArrow}/>
                : <Arrow onClickHelper={() => onClickHelper('desc')}/>
                }
            </div>      
        </th>
    );
};
