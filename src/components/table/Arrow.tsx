import arrow from '../../arrow.png';

type PropsType = {
    onClickHelper: () => void,
    className?: string,
}

export const Arrow = ({onClickHelper, className}: PropsType) => {
    return <img 
                src={arrow} 
                alt="arrow" 
                onClick={()=>onClickHelper()} 
                className={className}/>
};
