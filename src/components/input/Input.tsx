import {useState, ChangeEvent} from 'react';
import styles from './Input.module.css';
import SearchSvgComponent from '../svg-components/SearchSvgComponent';

type PropsType = {
    placeholder: string
}

export const Input = ({placeholder}: PropsType) => {
    const [value, setValue] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    
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
