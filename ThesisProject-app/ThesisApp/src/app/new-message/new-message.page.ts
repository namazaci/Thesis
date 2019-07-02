import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.page.html',
  styleUrls: ['./new-message.page.scss'],
})
export class NewMessagePage implements OnInit {

  public message : FormGroup;

  constructor(public formBuilder: FormBuilder, 
    public modalCtrl: ModalController, 
    public storage: Storage) {

    this.message = this.formBuilder.group({
      to: ['', Validators.required],
      cc: [''],
      bcc: [''],
      subject: [''],
      message: ['']
    });

     
   }

   sendMessage(){
    // set a key/value
    this.modalCtrl.dismiss({
      message: this.message.value
    });
  }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss({});
  }
}
