
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // <-- Import HomeComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // <-- Set HomeComponent as the default route
  // ...existing code...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }