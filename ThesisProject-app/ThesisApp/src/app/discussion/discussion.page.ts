import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async presentNewDiscussion() {
    const alert = await this.alertCtrl.create({
      header: 'New Discussion',
      inputs: [
        {
          type: 'text',
          label: 'New Topic',
          value: 'New Topic'
        },
        
        {
          type: 'text',
          label: 'Message',
          value: 'Message'
        },

        {
          name: 'everybody',
          type: 'checkbox',
          label: 'Everybody can see this topic',
          value: 'everybody',
          checked: true
        },

        {
          name: 'private',
          type: 'checkbox',
          label: 'Only me',
          value: 'private',
        },
        
        {
          name: 'selected_friends',
          type: 'checkbox',
          label: 'To selected friends',
          value: 'selected_friends',
        },
      ],
      buttons: [
        {
          text: 'Post',
          handler: () => {
          this.router.navigateByUrl('/discussion');
          console.log('Confirm Ok');
          }
        },

        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
      ]
    });

    

    await alert.present();
  }
}
