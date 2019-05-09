import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewDiscussionPage } from '../new-discussion/new-discussion.page';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {

  public discussions = [];

  constructor(
    public modalController: ModalController, public storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('discussions').then(discussions => {
      this.discussions = discussions;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewDiscussionPage

    });

    modal.onDidDismiss().then(info => {
      if (info.data.discussions !== undefined) this.discussions.push(info.data.discussions);
      this.storage.set('discussions', this.discussions).then(success =>{ console.log('discussions saved'); });
    });

    return await modal.present();
  }

  /* async presentNewDiscussion() {
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
  } */
}
