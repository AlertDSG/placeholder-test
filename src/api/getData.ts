import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const api = {
    
    getPosts() {
        return instance.get<PostType[]>('posts');
    }
}

export type PostType = {
    id: number,
    title: string,
    body: string,
    userId: number,
}