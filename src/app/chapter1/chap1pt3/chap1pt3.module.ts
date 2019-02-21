import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Chap1pt3Page } from './chap1pt3.page';

const routes: Routes = [
  {
    path: '',
    component: Chap1pt3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Chap1pt3Page]
})
export class Chap1pt3PageModule {}
