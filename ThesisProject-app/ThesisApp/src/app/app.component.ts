import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { link } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public sidebarPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Role',
      url: '/role',
      icon: 'person'
    },
    {
      title: 'Message',
      url: '/message',
      icon: 'mail'
    },
    {
      title: 'Course',
      url: '/course',
      icon: 'school'
    },
    {
      title: 'Progress',
      url: '/progress',
      icon: 'podium'
    },
    {
      title: 'Discussion',
      url: '/discussion',
      icon: 'chatbubbles'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'calendar'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Join Group',
      inputs: [
        {
          type: 'text',
          label: 'Group Key',
          value: 'Group Key'
        },
      ], 
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Join Group',
          handler: () => {
            console.log('Confirm Ok');
          }
        },
      ]
    });

    await alert.present();
  }
}
