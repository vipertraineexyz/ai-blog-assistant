import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/Blog';

@Component({
  selector: 'app-blog-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
}
