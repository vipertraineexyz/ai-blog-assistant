// services/blog-generator.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogGeneratorService {
  private apiUrl = 'http://your-backend-domain.com/api/generate-blog.php'; // adjust accordingly

  constructor(private http: HttpClient) {}

  generateBlog(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
