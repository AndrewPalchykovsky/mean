import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  totalPosts = 10;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  isLoading = false;
  posts: Post[] = [];
  private postSub: Subscription;

  constructor(public postsService: PostsService) { }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }
  onChangePage(pageData: PageEvent) {
    console.log(pageData);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
