import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentAndTalentLMSPage } from './content-and-talent-lms.page';

const routes: Routes = [
  {
    path: '',
    component: ContentAndTalentLMSPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContentAndTalentLMSPage]
})
export class ContentAndTalentLMSPageModule {}
