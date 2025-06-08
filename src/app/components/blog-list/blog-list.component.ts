import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs: {id: number; title: string; summary: string}[] = [];
  constructor() { 
  this.blogs = [
    {
      id: 1,
      title: 'How to Write Blog Posts with AI',
      summary: 'Discover how to use AI tools like LLaMA 3 to generate high-quality blog content faster.'
    },
    {
      id: 2,
      title: 'Boost Your SEO with AI',
      summary: 'Learn how AI-generated content can help improve your search engine rankings efficiently.'
    },
    {
      id: 3,
      title: 'Content Creation Tips for Busy Creators',
      summary: 'Don’t have time to write long articles? Here’s how AI can help you maintain quality.'
    }
  ];
  }
}
