// blog-generator.component.ts
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-blog-generator',
  imports: [CommonModule,FormsModule],
  templateUrl: './blog-generator.component.html',
  styleUrls: ['./blog-generator.component.scss']
})
export class BlogGeneratorComponent {
  title: string = '';
  prompt: string = '';
  tone: 'friendly' | 'professional' | 'casual' = 'friendly';
  length: 'short' | 'medium' | 'long' = 'medium';

  generatedBlog: string | null = null;
  isLoading: boolean = false;

  setTone(tone: 'friendly' | 'professional' | 'casual') {
    this.tone = tone;
  }

  setLength(length: 'short' | 'medium' | 'long') {
    this.length = length;
  }

  generateBlog() {
    if (!this.prompt) return;

    this.isLoading = true;
    this.generatedBlog = null;

    // Simulate backend call (replace with real API call)
    setTimeout(() => {
      this.generatedBlog = `This is a ${this.length} and ${this.tone} blog generated for the prompt: "${this.prompt}"`;
      this.isLoading = false;
    }, 2000);
  }
}
