import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Chap2pt2Page } from './chap2pt2.page';

const routes: Routes = [
  {
    path: '',
    component: Chap2pt2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Chap2pt2Page]
})
export class Chap2pt2PageModule {}
