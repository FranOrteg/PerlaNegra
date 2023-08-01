import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: Post | null

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.post = null
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.post = this.postService.getPostById(parseInt(data['postId']))
    })
  }
}
