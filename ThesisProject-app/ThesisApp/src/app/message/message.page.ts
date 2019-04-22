import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ImageService } from '../services/image/image.service';
import { EmailService } from '../services/email/email.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage {

  public form   : FormGroup;

  private _attachment : any;

  constructor(public navCtrl      : NavController,
              private _ALERT      : AlertController,
              private _FORM       : FormBuilder,
              private _IMAGE      : ImageService,
              private _EMAIL      : EmailService) 
  {
    this.form = this._FORM.group({
        "to"           : ["", Validators.required],
        "cc"           : ["", Validators.required],
        "bcc"          : ["", Validators.required], 
        "subject"      : ["", Validators.required],
        "message"      : ["", Validators.required]
    });
  }

  retrieveAttachment()  : void
  {
    this._IMAGE.selectPhotograph().then((attachment : any) =>
    {
      this._attachment = attachment;
    });
  }

  displayMessage(title : string, subTitle : string) : void
  {
    let alert : any         = this._ALERT.create({
      title       : title,
      subTitle    : subTitle,
      buttons     : ['Got it']
    });
    alert.present();
  }

  sendMessage() : void
  {
    let to         : string     = this.form.controls["to"].value,
        cc         : string     = this.form.controls["to"].value,
        bcc        : string     = this.form.controls["to"].value,
        subject    : string     = this.form.controls["to"].value,
        message    : string     = this.form.controls["to"].value;

    if(this._attachment.length > 1)
    {
      this._EMAIL.sendEmail(to, cc, bcc, this._attachment, subject, message);
    }

    else
    {
      this.displayMessage('Error', 'You need to select an attachment');
    }
  }

}
