import { Injectable } from '@angular/core';
import { Camera, CameraOriginal, CameraOptions } from '@ionic-native/camera';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _CAMERA : CameraOriginal) { }

  selectPhotograph() : Promise<any>
  {
    return new Promise((resolve) =>
    {
      let cameraOptions : CameraOptions = {
        sourceType         : this._CAMERA.PictureSourceType.PHOTOLIBRARY,
        destinationType    : this._CAMERA.DestinationType.FILE_URI,
        quality            : 100,
        targetWidth        : 320,
        targetHeight       : 240,
        encodingType       : this._CAMERA.EncodingType.JPEG,
        correctOrientation : true
      };

      this._CAMERA.getPicture(cameraOptions)
      .then((data : any) =>
      {
        resolve(data);
      });

    });
  }
}
