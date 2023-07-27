import { sortTable } from '../../store/page-reducer';
import { PostType } from '../../api/getData';
import { NameCellType, SortType, sortRows } from './sortTypes';
import { AppDispatch } from '../../store/store';

export const sortHelper = (dispatch: AppDispatch, regulator: SortType, cell: NameCellType, posts: PostType[]) => {
    let sortPosts = [...posts];
    let statusSort;
    if (cell === 'ID') {
        if (regulator === 'desc') {
            sortPosts = sortPosts.sort((a, b) => b.id - a.id);
            statusSort = sortRows.DESC;
        } else {
            sortPosts = sortPosts.sort((a, b) => a.id - b.id);
            statusSort = sortRows.INCR;
        }
    } else if (cell === 'Заголовок') {
        if (regulator === 'desc') {
            sortPosts = sortPosts.sort((a, b) => {
                if (a.title > b.title) {
                    return -1;
                  }
                  if (a.title < b.title) {
                    return 1;
                  }
                  return 0;
            })
            statusSort = sortRows.DESC;
        } else {
            sortPosts = sortPosts.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                  }
                  if (a.title > b.title) {
                    return 1;
                  }
                  return 0;
            })
            statusSort = sortRows.INCR;
        }
    } else if (cell === 'Описание') {
        if (regulator === 'desc') {
            sortPosts = sortPosts.sort((a, b) => {
                if (a.body > b.body) {
                    return -1;
                  }
                  if (a.body < b.body) {
                    return 1;
                  }
                  return 0;
            })
            statusSort = sortRows.DESC;
        } else {
            sortPosts = sortPosts.sort((a, b) => {
                if (a.body < b.body) {
                    return -1;
                  }
                  if (a.body > b.body) {
                    return 1;
                  }
                  return 0;
            })
            statusSort = sortRows.INCR;
        }
    } else return;

    dispatch(sortTable({posts: sortPosts, statusSort, columnSort: cell }))
}
