type PropsType = {
    page: number,
    className?: string,
}

export const CountPage = ({page, className}: PropsType) => {
    return (
        <span className={className}>{page}</span>
    );
};
