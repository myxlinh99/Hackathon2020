import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AslToTextPageRoutingModule } from './asl-to-text-routing.module';

import { AslToTextPage } from './asl-to-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AslToTextPageRoutingModule
  ],
  declarations: [AslToTextPage]
})
export class AslToTextPageModule {}
