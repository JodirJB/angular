import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';


const ROUTES: Routes = [
//   {path: 'contents', component: ContentsComponent },
  {path: 'contents/:id', component: ContentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
