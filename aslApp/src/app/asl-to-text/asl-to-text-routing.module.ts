import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AslToTextPage } from './asl-to-text.page';

const routes: Routes = [
  {
    path: '',
    component: AslToTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AslToTextPageRoutingModule {}
