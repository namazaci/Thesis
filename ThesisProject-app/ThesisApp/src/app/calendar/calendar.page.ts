import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  
  public collapseCard: boolean = false;

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  daysInMonth: number = 31;

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  
  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private router: Router,
    public modalCtrl: ModalController,
    public storage: Storage) { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime).getTime() / 1000,
      endTime: new Date(this.event.endTime).getTime() / 1000,
      allDay: this.event.allDay
    }

    console.log(eventCopy);
    

    if(eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      let singleDay = 60 * 60 * 24;
      eventCopy.startTime = Math.floor(eventCopy.startTime / singleDay) * singleDay;
      eventCopy.endTime = Math.ceil(eventCopy.endTime / singleDay) * singleDay;
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();

    // let event = {
    //   title: 'assignment',
    //   date: '8',
    //   month: 'May',
    //   year: '2019',
    //   starttime: '14:59',
    //   endtime: '15:59'
    // };

      // set a key/value
      this.modalCtrl.dismiss({
        event: eventCopy
      });


   
  }

  // Chnage current month/week/day
  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked 
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev){
    let date = ev.selectedTime;
    date.startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    date.endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    // this.event.startTime = ev.selctedTime.toISOString();
    // ev.selctedTime.setHours(ev.selctedTime.getHours() + 1);
    // this.event.endTime = (ev.selctedTime.toISOString());
  }

  closeModal()
  {
    this.modalCtrl.dismiss({});
  }
}
