import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'booking', component: BookingComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
