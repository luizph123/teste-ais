import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridPageComponent } from './grid-page/grid-page.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: GridPageComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
