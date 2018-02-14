import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {


  posts: Post;


  constructor(private postService: PostService) { }

  ngOnInit() {
      this.getPosts();
  }

  // 6. Craete a local wrapper for
  getPosts(): void {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts.posts
        // ,
        // console.log(this.posts)
      }
    );
  }
}
