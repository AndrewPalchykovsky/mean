import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts = [];
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
