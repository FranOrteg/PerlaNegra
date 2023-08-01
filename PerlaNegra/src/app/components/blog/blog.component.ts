import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  arrPosts: Post[];

  constructor(private postService: PostService) {
    this.arrPosts = []
  }

  ngOnInit() {
    this.arrPosts = this.postService.getAll()
    console.log(this.arrPosts)
  }
}
