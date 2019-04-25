import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

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
    Camera,
    EmailComposer,
    EmailService,
    ImageService
  ]
})
export class MessagePageModule {}
