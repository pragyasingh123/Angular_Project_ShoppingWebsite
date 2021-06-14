import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {RegistrationComponent}  from './registration/registration.component'

const routes: Routes = [
  { path: 'navigation', component: NavigationComponent },
  { path: 'user/registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
