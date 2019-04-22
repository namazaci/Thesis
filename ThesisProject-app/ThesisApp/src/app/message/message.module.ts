import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Camera, CameraOriginal } from '@ionic-native/camera';
import { EmailComposer, EmailComposerOriginal } from '@ionic-native/email-composer';

import { MessagePage } from './message.page';
import { EmailService } from '../services/email/email.service';
import { ImageService } from '../services/image/image.service';

const routes: Routes = [
  {
    path: '',
    component: MessagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MessagePage],
  providers: [
    CameraOriginal,
    EmailComposerOriginal,
    EmailService,
    ImageService
  ]
})
export class MessagePageModule {}
