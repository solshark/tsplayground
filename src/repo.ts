export interface Post {
  id: string;
  title: string;
  body: string;
}
export interface RepositoryInterface {
  posts: Array<Post>;
  addPost: (params: Post) => void;
  getPosts: () => Array<Post>;
}
export class Repository implements RepositoryInterface {
  posts: Post[];
  constructor() {
    this.posts = [];
  }
  addPost(newPost: Post): void {
    this.posts.push(newPost);
  }
  getPosts(): Array<Post> {
    return this.posts;
  }
}
