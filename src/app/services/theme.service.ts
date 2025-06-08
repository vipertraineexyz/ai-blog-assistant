// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkModeKey = 'dark-mode';

  constructor() {
    this.loadInitialTheme();
  }

  toggleTheme(): void {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(this.darkModeKey, JSON.stringify(isDark));
  }

  loadInitialTheme(): void {
    const saved = localStorage.getItem(this.darkModeKey);
    const isDark = saved ? JSON.parse(saved) : false;
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark-mode');
  }
}
