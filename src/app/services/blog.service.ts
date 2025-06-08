import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from '../models/Blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'How to Write Blog Posts with AI',
      summary: 'Use LLaMA 3 to write better, faster.',
      content: 'Here is the full blog content for AI writing...'
    },
    {
      id: 2,
      title: 'Boost Your SEO with AI',
      summary: 'AI content can skyrocket your SEO rankings.',
      content: 'Full article about SEO boosting...'
    },
    {
      id: 3,
      title: 'Content Creation Tips for Busy Creators',
      summary: 'Write efficiently using automation.',
      content: 'Full content creation article...'
    }
  ];

  getBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return of(this.blogs.find(blog => blog.id === id));
  }
}
