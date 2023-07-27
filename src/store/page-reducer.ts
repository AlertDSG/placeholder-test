import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostType, api } from "../api/getData";
import { NameCellType, SortType } from "../common/helpers/sortTypes";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, {dispatch}) => {
        const responce = await api.getPosts();
        dispatch(setData({data: responce.data}));
})

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        posts: [] as PostType[],
        length: 0,
        page: 1,
        statusSort: 'inc',
        columnSort: '',
    },
    reducers: {
        setData: (state, action: PayloadAction<{data: PostType[]}>) => {
            state.posts = action.payload.data;
            state.length = action.payload.data.length;
        },
        changePage: (state, action: PayloadAction<{page: number}>) => {
            state.page = action.payload.page;
        },
        sortTable: (state, action: PayloadAction<{posts: PostType[], statusSort: SortType, columnSort: NameCellType}>) => {
            state.posts = action.payload.posts;
            state.statusSort = action.payload.statusSort;
            state.columnSort = action.payload.columnSort;
        },
        searchItems: (state, action) => {
            const filteredPosts = state
                                    .posts
                                    .filter(post => 
                                        post.title.includes(action.payload.value) 
                                        || post.body.includes(action.payload.value));
            state.posts = filteredPosts;
            state.length = filteredPosts.length;
        }
    }
}) 

export const {setData, changePage, sortTable, searchItems}  = pageSlice.actions;

export const pageReducer = pageSlice.reducer;