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

  public filteredEvents = [];

  constructor(public modalController: ModalController, public storage: Storage) { }

  ngOnInit() {

    // Or to get a key/value pair
    this.storage.get('events').then(events => {
      this.setEvents(events || []);
    }); 
  }

  async presentCalendarModal() {
    const modal = await this.modalController.create({
      component: CalendarPage

    });

    modal.onDidDismiss().then(info => {
      if (info.data.event !== undefined) this.events.push(info.data.event);
      this.storage.set('events', this.events).then(success =>{ console.log('events saved'); });
    });
    
    return await modal.present();
  }

  setEvents(events:any[])
  {
    this.events = events;

    this.filteredEvents = [];
    events.forEach(item => {
      
      let foundIndex = -1;
      this.filteredEvents.filter((ev, index) => {
        if (ev.date.day == item.date && ev.date.month == item.month && ev.date.year == item.year) foundIndex = index;
      });
      
      console.log(foundIndex);
      if (foundIndex > -1)
      {
        this.filteredEvents[foundIndex].events.push(item);
      }
      else
      {
        this.filteredEvents.push({
          date: {
            day: item.date,
            month: item.month,
            year: item.year
          },
          events: [ item ]
        });
      }
    });

    console.log(this.filteredEvents);
  }

}
