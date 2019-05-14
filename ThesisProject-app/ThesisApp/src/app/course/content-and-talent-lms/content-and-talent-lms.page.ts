import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/File/ngx';

@Component({
  selector: 'app-content-and-talent-lms',
  templateUrl: './content-and-talent-lms.page.html',
  styleUrls: ['./content-and-talent-lms.page.scss'],
})
export class ContentAndTalentLMSPage implements OnInit {

  constructor(
    private platform: Platform, 
    private file: File, 
    private ft: FileTransfer, 
    private fileOpener: FileOpener, 
    private document: DocumentViewer,
  ) { }

  openLocalPdf(){
    let filePath = this.file.applicationDirectory + 'www/assets';
  
    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'Exam.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      this.document.viewDocument(`${filePath}/Exam.pdf`, 'application/pdf', options);
    }
  }

  ngOnInit() {
  }

}
