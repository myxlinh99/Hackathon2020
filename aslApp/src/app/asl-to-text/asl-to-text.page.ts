import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-asl-to-text',
  templateUrl: './asl-to-text.page.html',
  styleUrls: ['./asl-to-text.page.scss'],
})
export class AslToTextPage implements OnInit {
  imgURL = 'assets/defaultPhoto.png';
  imgRequest;
  dataFromService:any = "";
  constructor( 
    private camera: Camera,
    public dataService: DataService) { }

  ngOnInit() {
  }
  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then( (res) => {
      this.imgURL = 'data:image/jpeg;base64,' + res;
      this.imgRequest = res;
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
      this.imgRequest = res;
    }).catch (e => {
      console.log(e);
    })

  }

  saveData() {
    var dataToSend = this.imgRequest;
    console.log("Button Pressed");
    console.log(this.imgRequest);
    this.dataService.saveData(dataToSend);
    //this.dataService.saveData(dataToSend).subscribe((dataReturnFromService)=>{
    //  this.dataFromService = JSON.stringify(dataReturnFromService);
    //})
  }

}
