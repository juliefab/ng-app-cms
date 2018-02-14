import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  post: Post;
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPost(id);
  }

  getUser(id): void {
    this.postService.getPost(id).subscribe(
      user => this.post = user.post
    );
  }


  getPost(slug): void {
    this.postService.getPost(slug).subscribe(
      post => this.post = post.post
    );
}

  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      // console.log(response)
      this.router.navigate(['/posts/view/', response.post.slug]);
    }
  }

  onSubmit(): void {
    this.postService.editPost(this.post).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }

}
