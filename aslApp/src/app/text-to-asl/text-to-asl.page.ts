import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-text-to-asl',
  templateUrl: './text-to-asl.page.html',
  styleUrls: ['./text-to-asl.page.scss'],
})
export class TextToAslPage implements OnInit {
  inputValue: string = "";
  
  constructor(private dataService: DataService) { }
  submit(){
    console.log(this.inputValue);
    this.dataService.getRemoteData().subscribe(data => {
      console.log("Local Data:");
      console.log(data);
    })
    


  }
  ngOnInit() {

  }

}
