import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ELearningBasicsPage } from './e-learning-basics.page';

const routes: Routes = [
  {
    path: '',
    component: ELearningBasicsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ELearningBasicsPage]
})
export class ELearningBasicsPageModule {}
