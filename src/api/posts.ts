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

export type PostData = Post & { content: string };

// featured가 true것만 표시
export async function getFeaturedPosts(): Promise<Post[]>{
    return getAllPosts()
        .then((posts) => posts.filter((post) => post.featured));
}

// featured가 false인것만 표시
export async function getNonFeaturedPosts(): Promise<Post[]>{
    return getAllPosts()
        .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json'); //파일경로설정
    return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)// .then(data => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));//최신 포스트가 젤위로 정렬
}

export async function getPostData(fileName: string): Promise<PostData>{
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const metadata = await getAllPosts()
    .then((posts) => posts.find(post => post.path === fileName));
    if(!metadata) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

    const content = await readFile(filePath, 'utf-8');
    return { ...metadata, content };
}