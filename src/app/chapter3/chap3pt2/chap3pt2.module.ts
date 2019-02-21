import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Chap3pt2Page } from './chap3pt2.page';

const routes: Routes = [
  {
    path: '',
    component: Chap3pt2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Chap3pt2Page]
})
export class Chap3pt2PageModule {}
