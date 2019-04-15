import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvanceFeaturesOfTalentLMSPage } from './advance-features-of-talent-lms.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceFeaturesOfTalentLMSPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvanceFeaturesOfTalentLMSPage]
})
export class AdvanceFeaturesOfTalentLMSPageModule {}
