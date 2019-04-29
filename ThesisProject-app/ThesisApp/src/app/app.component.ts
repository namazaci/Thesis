import { Component } from '@angular/core';

import { Platform, AlertController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

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
    private alertCtrl: AlertController,
    private router: Router

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
            this.router.navigateByUrl('/course');
            console.log('Confirm Ok');
          }
        },
      ]
    });

    await alert.present();
  }
}
