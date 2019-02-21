import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TocPage } from './toc/toc.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter3', loadChildren: './chapter3/chapter3.module#Chapter3PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
