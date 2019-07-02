import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IntroductionToLMSPage } from './introduction-to-lms.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductionToLMSPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntroductionToLMSPage]
})
export class IntroductionToLMSPageModule {}
