import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  // {
  //   title: 'First post',
  //   content: 'This is first post content'
  // },
  // {
  //   title: 'Second post',
  //   content: 'This is second post content'
  // },
  // {
  //   title: 'Third post',
  //   content: 'This is third post content'
  // },

  constructor() { }

  ngOnInit() {
  }

}
