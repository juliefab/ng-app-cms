import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // id out of parm map
    this.getPost(id);
  }

  getPost(slug): void {
    this.postService.getPost(slug).subscribe(
      post => this.post = post

    );
  }


  deletePost(id: string): void {
  if(confirm("Are you sure to delete " + this.post.post.title)) {
    this.postService.deletePost(id).subscribe(
       ()=>{this.router.navigate(['/posts'])}
      );
    }
  }
}
