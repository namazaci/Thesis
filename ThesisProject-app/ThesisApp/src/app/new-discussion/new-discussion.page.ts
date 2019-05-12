import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-new-discussion',
  templateUrl: './new-discussion.page.html',
  styleUrls: ['./new-discussion.page.scss'],
})
export class NewDiscussionPage implements OnInit {

  public discussion : FormGroup;

  constructor( 
    public formBuilder: FormBuilder, 
    public modalCtrl: ModalController, 
    public storage: Storage ) { 

    this.discussion = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      visibility: ['everybody']
    });

    
  }

  closeForm(){
    // set a key/value
    this.modalCtrl.dismiss({
      discussion: this.discussion.value
    });
  }

  
  ngOnInit() {

  }

  
  closeModal()
  {
    this.modalCtrl.dismiss({});
  }
}
