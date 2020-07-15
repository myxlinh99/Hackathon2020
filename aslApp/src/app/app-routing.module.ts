import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asl-to-text',
    loadChildren: () => import('./asl-to-text/asl-to-text.module').then( m => m.AslToTextPageModule)
  },
  {
    path: 'text-to-asl',
    loadChildren: () => import('./text-to-asl/text-to-asl.module').then( m => m.TextToAslPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
