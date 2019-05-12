import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: "This is the First post's content"},
  //   {title: 'Second Post', content: "This is the Second post's content"},
  //   {title: 'Third Post', content: "This is the Third post's content"}
  // ];

  @Input() posts: Post[] = [];
}
