import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewMessagePage } from '../new-message/new-message.page';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  public messages = [];

  constructor(public modalController: ModalController, 
    public storage: Storage
    ){}

  ngOnInit() {
    this.storage.get('messages').then(messages => {
      this.messages = messages || [];
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewMessagePage

    });

    modal.onDidDismiss().then(info => {
      if (info.data.message !== undefined) this.messages.push(info.data.message);
      this.storage.set('messages', this.messages).then(success =>{ console.log(success); });
    });

    return await modal.present();
  }

}
