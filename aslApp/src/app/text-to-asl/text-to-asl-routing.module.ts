import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextToAslPage } from './text-to-asl.page';

const routes: Routes = [
  {
    path: '',
    component: TextToAslPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextToAslPageRoutingModule {}
