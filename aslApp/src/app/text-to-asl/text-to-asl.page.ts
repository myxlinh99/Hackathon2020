import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service"; 
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-text-to-asl',
  templateUrl: './text-to-asl.page.html',
  styleUrls: ['./text-to-asl.page.scss'],
})
export class TextToAslPage implements OnInit {
  inputValue: string = "";
  videoURL='https://www.youtube.com/watch?v=fsZtSmnCp0g';
  constructor(private dataService: DataService, private videoPlayer: VideoPlayer) { }
  submit(){
    console.log(this.inputValue);
    this.dataService.getRemoteData(this.inputValue).subscribe(data => {
      console.log("Local Data:");
      console.log(data['videos'][0]);
      this.videoURL = data['videos'][0];
    })
  }
  ngOnInit() {

  }


}
