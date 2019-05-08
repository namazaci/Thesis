import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  public events = [];

  constructor(public modalController: ModalController, public storage: Storage) { }

  ngOnInit() {

    // Or to get a key/value pair
    this.storage.get('events').then(events => {
      this.events = events;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CalendarPage

    });

    modal.onDidDismiss().then(info => {
      if (info.data.event !== undefined) this.events.push(info.data.event);
      this.storage.set('events', this.events).then(success =>{ console.log('events saved'); });
    });
    
    return await modal.present();
  }

}
