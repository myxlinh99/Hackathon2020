import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-asl-to-text',
  templateUrl: './asl-to-text.page.html',
  styleUrls: ['./asl-to-text.page.scss'],
})
export class AslToTextPage implements OnInit {
  imgURL = 'assets/defaultPhoto.png';

  constructor( 
    private camera: Camera) { }

  ngOnInit() {
  }
  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then( (res) => {
      this.imgURL = res;
    }).catch (e => {
      console.log(e);
    })


  }

  getGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then( (res) => {
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch (e => {
      console.log(e);
    })

  }
}
