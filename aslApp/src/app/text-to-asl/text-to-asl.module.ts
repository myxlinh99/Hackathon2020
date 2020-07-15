import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextToAslPageRoutingModule } from './text-to-asl-routing.module';

import { TextToAslPage } from './text-to-asl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextToAslPageRoutingModule
  ],
  declarations: [TextToAslPage]
})
export class TextToAslPageModule {}
