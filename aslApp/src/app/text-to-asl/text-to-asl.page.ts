import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-to-asl',
  templateUrl: './text-to-asl.page.html',
  styleUrls: ['./text-to-asl.page.scss'],
})
export class TextToAslPage implements OnInit {
  inputValue: string = "";
  constructor() { }
  submit(){
    console.log(this.inputValue);

  }
  ngOnInit() {
  }

}
