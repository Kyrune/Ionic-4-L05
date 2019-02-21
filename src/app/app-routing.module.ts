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
  { path: 'chap1pt2', loadChildren: './chapter1/chap1pt2/chap1pt2.module#Chap1pt2PageModule' },
  { path: 'chap1pt3', loadChildren: './chapter1/chap1pt3/chap1pt3.module#Chap1pt3PageModule' },
  { path: 'chap2pt2', loadChildren: './chapter2/chap2pt2/chap2pt2.module#Chap2pt2PageModule' },
  { path: 'chap2pt3', loadChildren: './chapter2/chap2pt3/chap2pt3.module#Chap2pt3PageModule' },
  { path: 'chap3pt2', loadChildren: './chapter3/chap3pt2/chap3pt2.module#Chap3pt2PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
