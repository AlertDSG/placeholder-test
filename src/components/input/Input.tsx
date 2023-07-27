import {useState, ChangeEvent, useEffect} from 'react';
import styles from './Input.module.css';
import SearchSvgComponent from '../svg-components/SearchSvgComponent';
import { useDebounce } from '../../common/hooks/useDebounce';
import { fetchPosts, searchItems } from '../../store/page-reducer';
import { useAppDispatch } from '../../common/hooks';

type PropsType = {
    placeholder: string,
}

export const Input = ({placeholder}: PropsType) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const debounce = useDebounce<string>(value, 1000);

    useEffect(() => {
        if (debounce === '') {
            dispatch(fetchPosts());
        }
        if (debounce) {
            dispatch(searchItems({value}));
        } 
    }, [debounce, dispatch, value]);
    
    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={value}
                placeholder={placeholder}
                className={styles.input}
                onChange={onChangeInputHandler}/>
            <SearchSvgComponent/>
        </div>
        
    );
};
