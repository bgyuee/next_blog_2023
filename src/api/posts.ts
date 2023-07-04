import { readFile } from "fs/promises";
import path from "path";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

export async function getFeaturedPosts(): Promise<Post[]>{
    return getAllPosts()
        .then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json'); //파일경로설정
    return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)// .then(data => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));//최신 포스트가 젤위로 정렬
}