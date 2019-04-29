import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage {

  private _attachment : any;

  constructor(
              private router      : Router) 
  {
    
  }

  displayMessage(title : string, subTitle : string) : void
  {
    // let alert : any         = this._ALERT.create({
    //   title       : title,
    //   subTitle    : subTitle,
    //   buttons     : ['Got it']
    // });
    // alert.present();
  }

  sendMessage() : void
  {
    // let to         : string     = this.form.controls["to"].value,
    //     cc         : string     = this.form.controls["to"].value,
    //     bcc        : string     = this.form.controls["to"].value,
    //     subject    : string     = this.form.controls["to"].value,
    //     message    : string     = this.form.controls["to"].value;

    // if(this._attachment.length > 1)
    // {
    //   this._EMAIL.sendEmail(to, cc, bcc, this._attachment, subject, message);
    // }

    // else
    // {
    //   this.displayMessage('Error', 'You need to select an attachment');
    // }
  }

}
