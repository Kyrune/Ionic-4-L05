import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Chap2pt3Page } from './chap2pt3.page';

const routes: Routes = [
  {
    path: '',
    component: Chap2pt3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Chap2pt3Page]
})
export class Chap2pt3PageModule {}
