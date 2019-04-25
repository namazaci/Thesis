import { Injectable } from '@angular/core';
import { EmailComposer} from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _EMAIL  : EmailComposer) { }

  sendEmail(to          : string,
            cc          : string,
            bcc         : string,
            attachment  : string,
            subject     : string,
            body        : string) : void
  
  {
    this._EMAIL.isAvailable().then((available: boolean) =>
    {
      this._EMAIL.hasPermission().then((isPermitted : boolean) =>
      {
        let email : any = {
            app         : 'mailto',
            to          : to,
            cc          : cc,
            bcc         : bcc,
            attachments : [
              attachment
            ],
            subject     : subject,
            body        : body  
        };

        this._EMAIL.open(email);
      })
      .catch((error : any) =>
      {
        console.log('No access permisson granted');
        console.dir(error);
      });
    })
    .catch((error : any) =>
    {
      console.log('User does not appear to have device e-mail account');
      console.dir(error);
    });
  }
}
