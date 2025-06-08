import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogGeneratorComponent } from './components/blog-generator/blog-generator.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: LandingPageComponent },
    { path: 'blogs', component: BlogListComponent },
    { path: 'create', component: BlogGeneratorComponent },
    { path: 'blog/:id', component: BlogDetailComponent },
];
