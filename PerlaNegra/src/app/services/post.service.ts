import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POSTS } from '../db/post.db';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]



  constructor() {
    this.posts = POSTS
  }


  getAll(): Post[] {
    return this.posts
  }

  getPostById(postId: number): Post | null {
    for (let post of this.posts) {
      if (post.id === postId) {
        console.log(postId)
        return post
      }
    }
    return null
  }
}
